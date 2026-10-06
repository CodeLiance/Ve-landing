"use client"

import { PhoneMockup } from "./phone-mockup"
import { StoreButtons } from "./store-buttons"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Subtle radial gradient overlay for depth — works in both modes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fadeIn text-center lg:text-left">
          <span className="landing-glass-badge inline-flex items-center rounded-full border border-border/50 bg-card/40 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-xl">
            🎓 Exclusivo para universitarios de Cali
          </span>

          <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            La red social exclusiva para universitarios de Cali.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg lg:mx-0">
            Conecta, descubre y comparte con estudiantes de tu universidad en un entorno seguro y verificado.
          </p>

          <StoreButtons className="mt-9 items-center sm:justify-center lg:justify-start" />

          <p className="mt-4 text-xs text-muted-foreground">
            Gratis · Solo con tu correo institucional
          </p>
        </div>

        <div className="animate-scaleIn">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
