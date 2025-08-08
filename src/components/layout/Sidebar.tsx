import Link from "next/link"
import { ExploreIcon } from "../icons/ExploreIcon"
import { FollowingIcon } from "../icons/FollowingIcon"
import { PopularIcon } from "../icons/PopularIcon"
import { GamesIcon } from "../icons/GamesIcon"
import { FollowIcon } from "../icons/FollowIcon"
import { DiscordIcon } from "../icons/DiscordIcon"

export function Sidebar() {

    const navMainMenu = [
        {
            type: "link",
            target: "_self",
            label: "Explore",
            key: "explore",
            icon: <ExploreIcon />,
            href: "/explore"
        },
        {
            type: "link",
            target: "_self",
            label: "Following",
            key: "following",
            icon: <FollowingIcon />,
            href: "/following"
        },
        {
            type: "link",
            target: "_self",
            label: "Popular",
            key: "popular",
            icon: <PopularIcon />,
            href: "/popular"
        },
        {
            type: "link",
            label: "Hentai Games",
            target: "_blank",
            key: "hentai-games",
            icon: <GamesIcon />,
            href: "https://www.google.com/"
        },
        //{
        //    type: "group",
        //    label: "Community",
        //    icon: "user",
        //    "items": [
        //        { label: "Artists", href: "/community/artists" },
        //        { label: "Collections", href: "/community/collections" },
        //        { label: "Comments", href: "/community/comments" }
        //    ]
        //},
    ]

    const navMenuBottom = [
        {
            type: "link",
            target: "_blank",
            label: "Follow us",
            key: "follow-us",
            icon: <FollowIcon />,
            href: "https://www.google.com/"
        },
        {
            type: "link",
            target: "_blank",
            label: "Discord",
            key: "discord",
            icon: <DiscordIcon />,
            href: "https://www.google.com/"
        },
        {
            type: "link",
            target: "_self",
            label: "Contact us",
            key: "contact-us",
            icon: <DiscordIcon />,
            href: "/contact-us"
        }
    ]

    return <>
        <div>
            <div className="pt-4 pb-6 px-3 flex flex-col gap-2">
                {
                    navMainMenu.map((item) => {
                        if (item.type === 'link') {
                            if (item.target === '_blank') {
                                return (
                                    <a key={item.key} href={item.href!} target={item.target} className="group flex items-center py-1.5 transition px-2 rounded-lg gap-3 font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                        <span className="transition text-gray-400 dark:text-gray-500 group-hover:text-current">
                                            {item.icon}
                                        </span>
                                        {item.label}</a>
                                )
                            } else {
                                return (
                                    <Link key={item.key} href={item.href!} className="group flex items-center py-1.5 transition px-2 rounded-lg gap-3 font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                        <span className="transition text-gray-400 dark:text-gray-500 group-hover:text-current">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </Link>
                                )
                            }
                        }
                    })
                }
            </div>
            <div className="divider"></div>
            <div className="px-3 py-6">

            </div>
            <div className="divider"></div>
            <div className="px-3 py-6 flex flex-col gap-2">
                {
                    navMenuBottom.map((item) => {
                        if (item.type === 'link') {
                            if (item.target === '_blank') {
                                return (
                                    <a key={item.key} href={item.href!} target={item.target} className="group flex items-center py-1.5 transition px-2 rounded-lg gap-3 font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                        <span className="transition text-gray-400 dark:text-gray-500 group-hover:text-current">
                                            {item.icon}
                                        </span>
                                        {item.label}</a>
                                )
                            } else {
                                return (
                                    <Link key={item.key} href={item.href!} className="group flex items-center py-1.5 transition px-2 rounded-lg gap-3 font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                        <span className="transition text-gray-400 dark:text-gray-500 group-hover:text-current">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </Link>
                                )
                            }
                        }
                    })
                }
            </div>
        </div>
    </>
}
