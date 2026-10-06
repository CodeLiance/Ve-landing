"use client"

import { Logo } from "@/components/layout/logo"

export function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 px-6 py-4 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center">
        <Logo size="sm" className="text-foreground" />
      </div>
    </header>
  )
}
