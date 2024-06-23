export interface NavigationItem {
    titleZh: string;
    titleEn: string;
    href: string;
}

export const NavigationItems: NavigationItem[] = [
    {titleEn: "Index", titleZh: "首页", href: "/#index"},
    {titleEn: "Information", titleZh: "情报", href: "/#information"},
    {titleEn: "Operator", titleZh: "干员", href: "/#operator"},
    {titleEn: "World", titleZh: "设定", href: "/#world"},
    {titleEn: "Media", titleZh: "泰拉万象", href: "/#media"},
    {titleEn: "More", titleZh: "更多内容", href: "/#more"},
]

export default function NavigationBar() {
    return <nav className="fixed top-0 right-0 left-0 z-[23]">
        <ul className="flex justify-evenly">{
            NavigationItems.map((item: NavigationItem) => {
                return (
                    <li key={item.titleEn} className="inline-block text-center">
                        <a href={item.href}>
                            <div>{item.titleEn}</div>
                            <div>{item.titleZh}</div>
                        </a>
                    </li>
                )
            })
        }</ul>
    </nav>
}
