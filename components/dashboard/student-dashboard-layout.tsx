"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, BookOpen, BarChart3, CreditCard, Bell, Settings, LogOut, User } from "lucide-react"

interface StudentDashboardLayoutProps {
  children: React.ReactNode
}

export default function StudentDashboardLayout({ children }: StudentDashboardLayoutProps) {
  const pathname = usePathname()
  const [notifications, setNotifications] = useState(3)

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard/student",
      icon: LayoutDashboard,
    },
    {
      title: "Schedule",
      href: "/dashboard/student/schedule",
      icon: Calendar,
    },
    {
      title: "Study Materials",
      href: "/dashboard/student/materials",
      icon: BookOpen,
    },
    {
      title: "Performance",
      href: "/dashboard/student/performance",
      icon: BarChart3,
    },
    {
      title: "Fee Payment",
      href: "/dashboard/student/fees",
      icon: CreditCard,
    },
    {
      title: "Notifications",
      href: "/dashboard/student/notifications",
      icon: Bell,
      badge: notifications,
    },
    {
      title: "Settings",
      href: "/dashboard/student/settings",
      icon: Settings,
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar>
          <SidebarHeader className="flex h-14 items-center px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-xl font-bold text-primary-500">Reamanujan</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-500 px-1.5 py-0.5 text-xs font-medium text-white">
                      {item.badge}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Rahul Sharma</span>
                <span className="text-xs text-gray-500">Class XII Science</span>
              </div>
            </div>
            <SidebarSeparator className="my-4" />
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="/dashboard/student/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start text-red-500 hover:text-red-600" asChild>
                <Link href="/logout">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-white px-4 md:px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />}
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Student" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="container-wrapper p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
