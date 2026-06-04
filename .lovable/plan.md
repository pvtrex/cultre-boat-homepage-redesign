## Goal

Replace the current `music_studio.glb` model with the full textured `scene.gltf` set the user uploaded (scene.gltf + scene.bin + JPEG textures), so the studio renders with its proper neon/red materials like the reference screenshot.

## Why a new approach

`scene.gltf` references `scene.bin` and texture images by relative URI. Lovable Assets put each file at a unique UUID URL, so the loader can't resolve siblings automatically. The cleanest fix is to upload each referenced file, then rewrite the `.gltf` to use absolute CDN URLs before uploading it.

## Steps

1. **Inspect** `scene.gltf` to enumerate every `buffers[].uri` and `images[].uri` (scene.bin + all `Material.*_baseColor.jpeg` textures).
2. **Upload each referenced file** via `lovable-assets create` from `/mnt/user-uploads/` (scene.bin and every texture image). Capture each returned CDN `url`.
3. **Rewrite `scene.gltf**` in a temp copy: replace each `uri` with its absolute Lovable Assets URL.
4. **Upload the rewritten `scene.gltf**` and write the pointer to `src/assets/music_studio_scene.gltf.asset.json`.
5. **Update `MusicStudio3D.tsx**`:
  - Switch `useGLTF` source from the old `.glb` pointer to the new `.gltf` pointer URL.
  - Keep auto-rotate, OrbitControls, Bounds/Center framing.
  - Tweak lighting for the neon/red interior: lower ambient, add a warm point light to lift interior, drop `Environment` preset to `night` (or remove and rely on the model's emissive textures so the neon screens glow).
  - Enable `gl.toneMapping = ACESFilmicToneMapping` and `outputColorSpace = SRGBColorSpace` so textures look correct.
6. **Delete the now-unused old asset** `src/assets/music_studio.glb.asset.json` via the asset delete tool (only after the new scene renders).
7. **QA**: open preview, confirm the room matches the reference (red walls, neon monitor, amp, guitars, mic stand), and that autorotation reveals all sides without clipping.

## Files

- new: `src/assets/music_studio_scene.gltf.asset.json` (+ uploaded sibling assets, no repo files for binaries/textures)
- edit: `src/components/MusicStudio3D.tsx`
- delete: `src/assets/music_studio.glb.asset.json`

## Notes

- No changes to `StudioShowcase.tsx` layout/copy — only the underlying model source and renderer settings change.
- Camera position may need a small tweak (lower fov, slightly higher Y) because the room is an open-top isometric volume; `Bounds fit` should handle most of it.  
- Making the exact same  in the first  screenshot img