import { ArrowDownToLine } from "lucide-react"
import { STORE_LINKS, type StorePlatform } from "@/lib/store-links"
import { cn } from "@/lib/utils"

const STORES: Record<StorePlatform, { eyebrow: string; label: string; store: string }> = {
  ios: { eyebrow: "Descargar para", label: "iPhone", store: "App Store" },
  android: { eyebrow: "Descargar para", label: "Android", store: "Google Play" },
}

function StoreButton({ platform }: { platform: StorePlatform }) {
  const { eyebrow, label, store } = STORES[platform]
  const href = STORE_LINKS[platform]
  const available = href.length > 0

  const content = (
    <>
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          available ? "bg-primary-foreground/10" : "bg-foreground/10",
        )}
        aria-hidden
      >
        <ArrowDownToLine size={20} strokeWidth={2.25} />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className={cn("text-[11px] font-medium", available ? "opacity-70" : "text-muted-foreground")}>
          {available ? eyebrow : `${store} · Muy pronto`}
        </span>
        <span className="text-[17px] font-bold tracking-tight">{label}</span>
      </span>
    </>
  )

  const base =
    "group flex h-16 w-full items-center gap-3 rounded-2xl px-4 pr-6 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] sm:w-auto sm:min-w-[200px]"

  if (!available) {
    return (
      <span
        aria-disabled="true"
        title={`Muy pronto en ${store}`}
        className={cn(base, "cursor-default border border-foreground/15 bg-card/70 text-foreground backdrop-blur-xl")}
      >
        {content}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Descargar Ve! para ${label} en ${store}`}
      className={cn(
        base,
        "bg-primary text-primary-foreground shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring active:scale-[0.98]",
      )}
    >
      {content}
    </a>
  )
}

export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <StoreButton platform="ios" />
      <StoreButton platform="android" />
    </div>
  )
}
