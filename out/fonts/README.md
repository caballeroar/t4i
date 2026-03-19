# Custom font drop zone

Place the licensed PP Mori and Monument Extended files in this folder so the @font-face rules in app/globals.css can find them.

Current setup (OTF files):

- public/fonts/pp-mori/PPMori-Regular.otf
- public/fonts/pp-mori/PPMori-SemiBold.otf
- public/fonts/monument-extended/MonumentExtended-Regular.otf
- public/fonts/monument-extended/MonumentExtended-Ultrabold.otf

Adjust the file names (and the weight values in app/globals.css) if you add different cuts. For faster loading in production, consider exporting WOFF2 versions and updating the sources accordingly.
