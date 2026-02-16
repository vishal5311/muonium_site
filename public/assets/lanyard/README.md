# 3D Lanyard Assets

## Required Files

Place the following files in this directory to enable the 3D ID card animation on the Contact page:

1. **card.glb** - 3D model of the ID card with clip and clamp
2. **lanyard.png** - Texture for the lanyard band

## Where to Get These Files

You can download sample files from:
- The original repository: https://github.com/pmndrs/examples
- Or create your own custom card using a 3D modeling tool

## Editing Your Card

You can customize the card.glb file using this online editor:
- https://modelviewer.dev/editor/

## Notes

- The card.glb file should contain meshes named: `card`, `clip`, and `clamp`
- The card mesh should have a material named `base` with a texture map
- The clip and clamp meshes should use a material named `metal`
- The lanyard.png will be tiled along the rope/band connecting the card

## Current Status

⚠️ **Files are missing** - The Contact page will load but the 3D card won't appear until you add these files.

Once you add the files, the interactive 3D ID card will appear on the right side of the Contact page!
