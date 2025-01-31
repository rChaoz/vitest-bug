import { defineConfig } from "vitest/config"
import { type PluginOption } from "vite"

export default defineConfig({
    plugins: [
        {
            // Allow importing `.hbs` files directly
            name: "vite-plugin-import-handlebars",
            transform(_, id): string | undefined {
                if (id.startsWith("\0") || !id.endsWith(".hbs")) return undefined
                // language=ts
                return `
                    import Handlebars from "handlebars"
                    import template from "${id}?raw"
                    export default Handlebars.compile(template)
                `
            },
        },
    ],
    test: {
        reporters: ["default", "junit"],
        outputFile: "build/report.junit.xml",
        clearMocks: true,
        fakeTimers: {
            toFake: ["Date", "performance", "setTimeout", "clearTimeout", "requestAnimationFrame", "cancelAnimationFrame"],
        },
    },
})
