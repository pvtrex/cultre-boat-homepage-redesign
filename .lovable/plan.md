## Goal
Use the uploaded `music_studio.glb` as an interactive 3D scene on the landing page (`src/pages/Index.tsx`), fitting the existing Cultre Boat creative-agency aesthetic without disturbing existing sections.

## Approach
1. **Upload the GLB as a Lovable Asset** (CDN-hosted) so the binary stays out of the repo. Reference it via the generated `.asset.json` pointer.
2. **Install 3D stack** (React 18-compatible):
   - `three@^0.160`
   - `@react-three/fiber@^8.18`
   - `@react-three/drei@^9.122` (for `useGLTF`, `Environment`, `OrbitControls`, `Stage`)
3. **Create `src/components/MusicStudio3D.tsx`**:
   - `<Canvas>` with sensible camera (fov ~35, positioned to frame the studio).
   - `useGLTF` to load the model from the asset URL; wrap in `<Suspense>` with a subtle loader.
   - Lighting: soft ambient + key light, plus `<Environment preset="studio">` for realistic shading.
   - Auto-rotate via `OrbitControls` (`autoRotate`, `enableZoom={false}`, gentle damping). Optional gesture drag on desktop.
   - Preload via `useGLTF.preload(url)`.
4. **Create `src/components/StudioShowcase.tsx`** — a full-width section with:
   - Left: short editorial copy ("Where sound meets story" / agency framing — no marine wording).
   - Right: the `MusicStudio3D` canvas (aspect ~1/1 on desktop, 4/3 mobile).
   - Dark background tying into the existing `TextImageReveal` cinematic palette for continuity.
5. **Wire into `src/pages/Index.tsx`** — insert the new section between `GallerySection` and `ProductGrid` (or wherever the user prefers).
6. **Performance & UX**:
   - Lazy-load the component with `React.lazy` so the GLB doesn't block initial paint.
   - `dpr={[1, 1.5]}` and `frameloop="demand"` when not auto-rotating to save battery.
   - Provide a static fallback image while loading.

## Files
- new: `src/assets/music_studio.glb.asset.json`
- new: `src/components/MusicStudio3D.tsx`
- new: `src/components/StudioShowcase.tsx`
- edit: `src/pages/Index.tsx`
- edit: `package.json` (3D deps)

## Open questions
1. Section placement — between Gallery and ProductGrid, or as a dedicated hero replacement?
2. Should the model auto-rotate only, or allow click-and-drag user interaction?
