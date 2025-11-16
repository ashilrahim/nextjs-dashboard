"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, Moon, Settings, Sun, UserRoundPen } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "./ui/sidebar"


const Navbar = () => {

  const { setTheme } = useTheme()
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* left */}
      <SidebarTrigger />
      {/* right */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        {/* theme mode */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* menu item */}
        <Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AvatarImage src="https://pbs.twimg.com/profile_images/1951905910517088256/VhdnHJft_400x400.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserRoundPen />
                Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                Settings</DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
              >
                <LogOut />
                Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Avatar>
      </div>
    </nav>
  )
}

export default Navbar