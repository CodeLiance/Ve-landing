"use client"

import { Logo } from "@/components/layout/logo"
import { Reveal } from "./reveal"
import { StoreButtons } from "./store-buttons"

export function LandingDownload() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/50 px-6 py-14 text-center backdrop-blur-xl sm:px-12">
          {/* Brillo suave */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/[0.07] blur-[90px]" />

          <div className="relative">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-[#0A0A0C] shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
              <Logo size="md" className="text-white" />
            </span>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tu universidad, en tu bolsillo.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
              Descarga Ve! y entra con tu correo institucional. Es gratis.
            </p>
            <StoreButtons className="mt-8 items-center justify-center" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
