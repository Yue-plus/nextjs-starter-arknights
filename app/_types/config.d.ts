import {Languages} from "next/dist/lib/metadata/types/alternative-urls-types";

export type NavbarItem = {
    title: string
    subtitle: string
    href: string
}

export type ArknightsConfig = {
    title: string
    description: string
    language: Languages
    navbar: {
        logo: {
            src: string
            alt: string
        }
        items: NavbarItem[]
    }
}
