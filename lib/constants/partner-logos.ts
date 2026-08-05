/**
 * Every partner mark is one ink on transparency, so it can only be right in one
 * theme as authored — the other theme has to invert it. `ink` is that fact about
 * the FILE, stated once and required, so a logo added later cannot forget it and
 * silently vanish on one theme. The class it maps to lives in system.css
 * (`.hz-ink-*`); nothing here knows about `filter`.
 */
export type Ink = "black" | "white";

export type PartnerLogo = {
  name: string;
  src: string;
  ink: Ink;
};

export const partnerLogos: PartnerLogo[] = [
  { name: "Techstars", src: "/logos/partners/techstars.png", ink: "white" },
  { name: "NVIDIA", src: "/logos/partners/nvidia.svg", ink: "black" },
  { name: "Google Cloud", src: "/logos/partners/googlecloud.svg", ink: "black" },
  { name: "AWS", src: "/logos/partners/aws.svg", ink: "black" },
  { name: "DigitalOcean", src: "/logos/partners/digitalocean.svg", ink: "black" },
  { name: "Nebius", src: "/logos/partners/nebius.svg", ink: "black" },
  { name: "Lux Network", src: "/logos/partners/lux-network.svg", ink: "black" },
  {
    name: "Zoo Labs Foundation",
    src: "/logos/partners/zoo-labs-foundation.svg",
    ink: "white",
  },
];
