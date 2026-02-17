import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Mój Blog",
        description: "Najświeższe wpisy na moim blogu",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>pl</language>`,
    });
}