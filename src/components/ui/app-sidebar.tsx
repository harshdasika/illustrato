"use client"

import * as React from "react"
import {
  Atom,
  Globe,
  Rocket,
  Sparkle,
  Bookmark,
  MessageSquareText,
  HelpCircle,
  Palette,
} from "lucide-react"

import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

// Responsive Site Logo component
const SiteLogo = () => {
  const { state } = useSidebar()
  return (
    <div className="flex items-center p-2 h-12">
  {state === "expanded" ? (
    <span className="text-lg font-semibold">
      <Palette className="inline mr-1" size={20} />
      illustrato
    </span>
  ) : (
    <span className="text-lg font-semibold">
      <Palette size={20} />
    </span>
  )}
</div>
  )
}

// Updated sample data
const data = {
  user: {
    name: "Harsh Dasika",
    email: "harsh.dasika@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Explore",
      url: "#",
      icon: Atom,
      isCollapsible: false,
    },
    {
      title: "Latest",
      url: "#",
      icon: Globe,
      isCollapsible: false,
    },
    {
      title: "Popular",
      url: "#",
      icon: Rocket,
      isCollapsible: true,
      items: [
        {
          title: "Today",
          url: "#",
        },
        {
          title: "This Month",
          url: "#",
        },
        {
          title: "This Year",
          url: "#",
        },
        {
          title: "All Time",
          url: "#",
        },
      ],
    },
    {
      title: "Featured",
      url: "#",
      icon: Sparkle,
      isCollapsible: false,
    },
    {
      title: "Collections",
      url: "#",
      icon: Bookmark,
      isCollapsible: false,
    },
    {
      title: "Message",
      url: "#",
      icon: MessageSquareText,
      isCollapsible: false,
    },
    {
      title: "Help",
      url: "#",
      icon: HelpCircle,
      isCollapsible: true,
      items: [
        {
          title: "Report an Issue",
          url: "#",
        },
        {
          title: "Feedback",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SiteLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
