// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: {
          name: "Satoshi",
          weights: [300, 400, 500, 600, 700],
        },
      },
    }),
  ],
});
