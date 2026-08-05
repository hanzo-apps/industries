/**
 * Global stylesheets are side-effect imports. TypeScript 7 checks those (TS2882)
 * and `next`'s own types declare only `*.module.css`, so this declares the other
 * half — the plain stylesheet a root layout imports for its side effect.
 */
declare module '*.css'
