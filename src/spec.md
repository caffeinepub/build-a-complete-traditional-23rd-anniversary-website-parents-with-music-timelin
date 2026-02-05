# Specification

## Summary
**Goal:** Remove all background music and photo-related features/sections from the anniversary website.

**Planned changes:**
- Remove the background music feature so no audio player UI is rendered and no audio playback logic/assets are referenced.
- Remove all photo gallery functionality, including the Gallery section, navbar/scroll-spy entry, and any gallery lightbox/modal interactions.
- Update the Hero section to render without the framed/featured photo and remove any hero photo asset references.
- Update the Family Messages section to be text-only by removing handwritten letter image previews and any related lightbox/modal behavior, plus remove letter image asset references.
- Update the centralized anniversary configuration to remove now-unused photo/audio fields and related instructions.

**User-visible outcome:** The site no longer has any music controls or playback, and all photo-based elements (hero photo, gallery, and letter images) are removed so only non-photo content remains.
