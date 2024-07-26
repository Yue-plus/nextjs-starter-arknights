import {ArknightsConfig} from "@/app/_types/config";
import Index from "@/app/_views/00-Index";
import Information from "@/app/_views/01-Information";
import Operator from "@/app/_views/02-Operator";
import World from "@/app/_views/03-World";
import Media from "@/app/_views/04-Media";
import More from "@/app/_views/05-More";

const arknightsConfig: ArknightsConfig = {
    metadataBase: new URL("https://yue-plus.github.io/nextjs-starter-arknights/nextjs-starter-arknights/"),
    title: "Arknights",
    description: "Arknights Next.js Theme Template Starter",
    language: "zh",
    navbar: {
        logo: {src: "/next.svg", alt: "Next Logo"},
        items: [
            {title: "INDEX", subtitle: "首页", href: "/#index"},
            {title: "INFORMATION", subtitle: "情报", href: "/#information"},
            {title: "OPERATOR", subtitle: "干员", href: "/#operator"},
            {title: "WORLD", subtitle: "设定", href: "/#world"},
            {title: "MEDIA", subtitle: "泰拉万象", href: "/#media"},
            {title: "MORE", subtitle: "更多内容", href: "/#more"},
        ],
    },
    rootPage: {
        views: [Index, Information, Operator, World, Media, More],
    },
    pageTracker: {
        microInfo: "ARKNIGHTS",
        labels: ["HOMEPAGE", "INFORMATION", "OPERATOR", "WORLD", "ABOUT TERRA", "MORE"],
    },
}

export default arknightsConfig
