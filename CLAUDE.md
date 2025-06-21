# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

This is a React-based Single Page Application (SPA) for Hanzo Industries, built with:

- **React 18** with TypeScript for the frontend
- **Vite** as the build tool
- **shadcn-ui components** (custom Radix UI implementations) in `src/components/ui/`
- **Tailwind CSS** for styling with custom animations
- **React Router** for client-side routing
- **React Query** (TanStack Query) for server state management
- **Supabase** for backend services (auth, data)
- **React Hook Form** with Zod validation for forms

## Key Architecture Patterns

### Component Structure
- **UI Components**: Reusable shadcn-ui components in `src/components/ui/`
- **Feature Components**: Domain-specific components organized by feature (navigation, sections, team)
- **Page Components**: Route handlers in `src/pages/`
- Path aliasing configured: `@/` maps to `./src/`

### Routing
- Dynamic product pages: `/products/[product-name]`
- Team member pages: `/team/[member-name]`
- All routes defined in `src/App.tsx`

### State Management
- Server state: React Query with Supabase integration
- Local state: React hooks
- Form state: React Hook Form with Zod schemas

### Styling
- Utility-first with Tailwind CSS
- Dark mode support via class-based theming
- Custom animations defined in `tailwind.config.js`
- CSS variables for design tokens in `src/App.css`

## Important Development Notes

### TypeScript Configuration
- TypeScript is configured with relaxed settings (no strict null checks, implicit any allowed)
- When adding new code, prefer explicit typing despite relaxed settings

### Component Development
- Follow existing patterns in `src/components/ui/` when creating new UI components
- Use the existing shadcn-ui component structure and styling patterns
- Components use `cn()` utility for className merging

### Testing
- **No testing framework is currently set up**
- Before adding tests, discuss with the team about preferred testing approach

### Deployment
- Configured for Vercel deployment
- SPA rewrite rules in `vercel.json` handle client-side routing
- Built for integration with Hanzo.app platform

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation if needed in `src/components/navigation/`

### Creating New UI Components
1. Check if shadcn-ui has a similar component pattern
2. Create in `src/components/ui/` following existing patterns
3. Use Tailwind utilities and CSS variables for styling
4. Export from component's index file

### Working with Forms
1. Use React Hook Form with Zod validation
2. Follow patterns in existing form components
3. Define Zod schemas for type safety and validation

### Modifying Styles
1. Use Tailwind utility classes
2. Custom animations go in `tailwind.config.js`
3. Theme variables in `src/App.css`
4. Component-specific styles use Tailwind's component layer