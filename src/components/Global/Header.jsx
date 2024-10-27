"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaProjectDiagram, FaTools, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  NavigationMenu as UiNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenu() {
  return (
    <>
      <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 text-black flex justify-between items-center p-4 border-b select-none">
        <div className="flex items-center space-x-3">
          <img
            src="/Logo.svg"
            alt="GDSC Logo"
            className="w-8 h-8 object-contain"
          />
          <Link href="/" legacyBehavior passHref>
            <div className="text-3xl font-bold cursor-pointer">
              <span className="text-red-500">G</span>
              <span className="text-blue-500">D</span>
              <span className="text-yellow-500">G</span>
              <span className="text-blue-500"> </span>
              <span className="text-yellow-500">R</span>
              <span className="text-purple-500">CC</span>
              <span className="text-pink-500">I</span>
              <span className="text-red-500">I</span>
              <span className="text-orange-500">T</span>
            </div>
          </Link>
        </div>

        {/* Right-Aligned Menu */}
        <div className="flex">
          <UiNavigationMenu>
            <NavigationMenuList className="flex">
              <NavigationMenuItem>
                <DropdownMenu className="mr-4">
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <FaProjectDiagram className="mr-2" /> Projects and Events
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link href="/Projects" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaProjectDiagram className="mr-2" /> Projects
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/Hackathon" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaProjectDiagram className="mr-2" /> Hackathons
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/Events" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaProjectDiagram className="mr-2" /> Events
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <DropdownMenu className="mr-4">
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <FaTools className="mr-2" /> Guides and Support
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link href="/helpCenter" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaQuestionCircle className="mr-2" /> Help Center
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/participation-terms" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaQuestionCircle className="mr-2" /> Participation Terms
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/RulesAndRegulations" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaQuestionCircle className="mr-2" /> Rules and Regulations
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/Resources" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaQuestionCircle className="mr-2" /> Resources
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/FAQsForum" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaQuestionCircle className="mr-2" /> FAQs & Forum
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <DropdownMenu className="mr-4">
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <FaUsers className="mr-2" /> Developer and Community Programs
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link href="/devprod" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaUsers className="mr-2" /> DevProd
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/devStudent" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaUsers className="mr-2" /> DevStudent
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/expertdev" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaUsers className="mr-2" /> ExpertDev
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/Chapters" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaUsers className="mr-2" /> Chapters
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/womentechmakers" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaUsers className="mr-2" /> Women Techmakers
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/how-apply" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaUsers className="mr-2" /> How to Apply
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/gitContributors" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaUsers className="mr-2" /> Git Contributors
                          </NavigationMenuLink>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/GeminiAI" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Gemini AI
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/SignIn" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
                    )}
                  >
                    Sign In
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/SignUp" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
                    )}
                  >
                    Sign Up
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </UiNavigationMenu>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
