"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import {
    LayoutDashboard,
    FileText,
    Mail,
    Moon,
    Sun,
    Laptop,
    Code,
    ArrowUp,
    ArrowDown,
    CornerDownLeft,
    Copy,
    Briefcase,
    BookOpen
} from "lucide-react"
import { SiGithub } from "react-icons/si"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const { setTheme } = useTheme()

    const openExternal = React.useCallback((url: string) => {
        const opened = window.open(url, "_blank", "noopener,noreferrer")
        if (!opened) window.location.assign(url)
    }, [])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement;
            const isTypingField =
                target.isContentEditable ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.tagName === 'SELECT'

            if (!open) {
                return
            }

            // When the command palette is open, we still want shortcuts to work
            // even if the search input is focused.
            if (e.shiftKey) {
                const key = e.key.toLowerCase()

                // Navigation
                if (key === 'e') {
                    e.preventDefault()
                    runCommand(() => window.location.hash = "#experience")
                } else if (key === 'p') {
                    e.preventDefault()
                    runCommand(() => window.location.hash = "#projects")
                } else if (key === 'b') {
                    e.preventDefault()
                    runCommand(() => window.location.hash = "#blogs")
                } else if (key === 'o') {
                    e.preventDefault()
                    runCommand(() => window.location.hash = "#opensource")
                } else if (key === 's') {
                    e.preventDefault()
                    runCommand(() => window.location.hash = "#skills")
                }

                // General
                else if (key === 'c') {
                    e.preventDefault()
                    runCommand(() => navigator.clipboard.writeText(window.location.href))
                }

                // Theme
                else if (key === 't') {
                    e.preventDefault()
                    runCommand(() => setTheme("light"))
                } else if (key === 'd') {
                    e.preventDefault()
                    runCommand(() => setTheme("dark"))
                } else if (key === 'y') {
                    e.preventDefault()
                    runCommand(() => setTheme("system"))
                }
            } else if (isTypingField) {
                // Allow normal typing when no shortcut is being used
                return
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [open, openExternal, runCommand, setTheme])

    return (
        <>
            <button 
                onClick={() => setOpen(true)}
                className="flex items-center text-[12px] font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors group cursor-pointer"
            >
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-black/30 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-zinc-500 dark:text-zinc-400 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                    <span className="text-[10px] leading-none mt-[1px]">⌘</span><span className="leading-none mt-[1px]">K</span>
                </kbd>
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                {/* Header Section */}
                <div className="flex items-center gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        <LayoutDashboard className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Navigation Menu</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Quickly jump to sections or actions</p>
                    </div>
                </div>

                <CommandInput placeholder="Search for actions..." className="border-none focus:ring-0" />

                <CommandList className="p-2">
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading="Sections">
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#experience")} className="rounded-lg py-3 cursor-pointer">
                            <Briefcase className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Experience</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + E</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#projects")} className="rounded-lg py-3 cursor-pointer">
                            <Code className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Projects</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + P</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#blogs")} className="rounded-lg py-3 cursor-pointer">
                            <FileText className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Blogs</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + B</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#opensource")} className="rounded-lg py-3 cursor-pointer">
                            <SiGithub className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Open Source</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + O</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#skills")} className="rounded-lg py-3 cursor-pointer">
                            <BookOpen className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Skills</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="General">
                        <CommandItem onSelect={() => runCommand(() => {
                            navigator.clipboard.writeText(window.location.href)
                        })} className="rounded-lg py-3 cursor-pointer">
                            <Copy className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Copy Link</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + C</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))} className="rounded-lg py-3 cursor-pointer">
                            <Sun className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Light Mode</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + T</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))} className="rounded-lg py-3 cursor-pointer">
                            <Moon className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Dark Mode</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + D</CommandShortcut>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))} className="rounded-lg py-3 cursor-pointer">
                            <Laptop className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>System</span>
                            <CommandShortcut className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">shift + Y</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div className="flex items-center gap-4 text-[10px] text-zinc-500">
                        <div className="flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" />
                            <ArrowDown className="w-3 h-3" />
                            <span>to navigate</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CornerDownLeft className="w-3 h-3" />
                            <span>to select</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                        <span className="font-mono">esc</span>
                        <span>to close</span>
                    </div>
                </div>
            </CommandDialog>
        </>
    )
}
