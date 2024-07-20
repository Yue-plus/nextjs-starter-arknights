import {ArknightsConfig} from "@/app/_types/config";

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
        ]
    },
}

export default arknightsConfig
