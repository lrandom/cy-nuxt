// https://nuxt.com/docs/api/configuration/nuxt-config
import {routes} from "./routes";
import type {NuxtPage} from "@nuxt/schema";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    app: {
        head: {
            title: "CY Page"
        }
    },
    hooks: {
        'pages:extend'(pages) {
            // add a route

            routes.forEach(route => {
                pages.push(route);
            });

            // remove routes
            function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
                const pagesToRemove: NuxtPage[] = []
                for (const page of pages) {
                    if (page.file && pattern.test(page.file)) {
                        pagesToRemove.push(page)
                    } else {
                        removePagesMatching(pattern, page.children)
                    }
                }
                for (const page of pagesToRemove) {
                    pages.splice(pages.indexOf(page), 1)
                }
            }

            removePagesMatching(/\.ts$/, pages)
        }
    }
})
