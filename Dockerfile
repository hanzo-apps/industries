# hanzo.industries — image ghcr.io/hanzoai/hanzo-industries, served by
# ghcr.io/hanzoai/static.
#
# This replaces a Cloudflare Pages project (the live origin: 103 Early Hints +
# `cache-control: public, max-age=0, must-revalidate`, no GitHub headers) AND the
# GitHub Pages workflow that published the same export a second time.

FROM node:22-bookworm-slim AS build
WORKDIR /app
# pnpm-lock.yaml is lockfileVersion 9.0. package.json names no packageManager, so
# pin the major explicitly rather than inheriting whatever corepack ships (the
# retired workflow ran `corepack prepare pnpm@latest`, which is a different
# resolver on every run).
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate
COPY . .
RUN pnpm install --frozen-lockfile
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# Clean URLs on hanzoai/static. This export is FLAT (out/about.html,
# out/careers.html, …) because next.config.mjs sets trailingSlash: false; static
# serves a DIRECTORY's index.html, so every top-level page is also written as
# <name>/index.html. Identical to the hanzo.ai apex image.
#
# What is NOT done here: `cp out/index.html out/404.html`, which the retired Pages
# workflow did for an SPA fallback. That clobbers the export's real 404 with the
# homepage, so every broken inbound link answers 404 while rendering the front
# page — indistinguishable from a good visit. The real 404.html ships instead.
RUN set -eu; \
    test -s out/index.html; \
    test -s out/404.html; \
    for f in out/*.html; do \
      [ "$f" = "out/index.html" ] && continue; \
      [ "$f" = "out/404.html" ] && continue; \
      d="${f%.html}"; mkdir -p "$d"; cp "$f" "$d/index.html"; \
    done

FROM ghcr.io/hanzoai/static:v0.5.1
COPY --from=build /app/out /srv
# static (>=0.4.0) is configured by FLAGS, not env: --root, --port, --404.
# --404 (not --spa): every route is a real exported file, so a miss is a genuine
# miss and must answer 404 with the export's own page. --spa would answer 200
# with the homepage for every typo'd URL.
ENTRYPOINT ["/static"]
CMD ["--root=/srv", "--port=3000", "--404=404.html"]
