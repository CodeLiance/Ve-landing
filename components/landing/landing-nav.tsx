"use client"

import { ArrowDownToLine } from "lucide-react"
import { Logo } from "@/components/layout/logo"

export function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 px-6 py-3 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Logo size="sm" className="text-foreground" />
        <a
          href="#descargar"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95"
        >
          <ArrowDownToLine size={16} strokeWidth={2.25} aria-hidden />
          Descargar
        </a>
      </div>
    </header>
  )
}
