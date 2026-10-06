import Image from "next/image"
import { Caveat } from "next/font/google"
import {
  BatteryFull,
  Compass,
  Heart,
  Home,
  MessageCircle,
  MessageSquare,
  Plus,
  RotateCcw,
  Search,
  Send,
  Signal,
  Trophy,
  User,
  Wifi,
  X,
} from "lucide-react"

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] })

// Paleta monocroma (blanco sobre negro). Solo los botones de Explorar
// conservan su rojo y verde, como en la app.
const BRAND = "#FFFFFF"
const NOPE = "#FF4458"
const LIKE = "#4CD964"

const stories = [
  { name: "Tú", initial: "+", own: true },
  { name: "Sofía", initial: "S" },
  { name: "Mateo", initial: "M" },
  { name: "Valen", initial: "V" },
  { name: "Juanes", initial: "J" },
]

function Avatar({ initial, className = "" }: { initial: string; className?: string }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-[#F5F5F0] to-[#8E8E93] font-bold text-[#0A0A0C] ${className}`}
    >
      {initial}
    </span>
  )
}

function FloatingCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`absolute z-20 rounded-2xl border border-white/10 bg-[#141416]/80 p-3 text-[#F5F5F0] shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

/** Pantalla de Inicio de la app, siempre en modo oscuro (como el ícono). */
function AppScreen() {
  return (
    <div className="relative h-full w-full bg-[#0A0A0C] text-[#F5F5F0]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <Signal size={11} strokeWidth={2.5} />
          <Wifi size={11} strokeWidth={2.5} />
          <BatteryFull size={14} strokeWidth={2} />
        </span>
      </div>

      {/* Header — logo, búsqueda y "+" como en la app */}
      <div className="mt-4 flex items-center gap-2 px-3.5">
        <span className={`${caveat.className} shrink-0 text-[28px] leading-none`} style={{ color: BRAND }}>
          Ve!
        </span>
        <div className="flex h-7 flex-1 items-center gap-1.5 rounded-full bg-white/[0.08] px-2.5 text-[10px] text-white/40">
          <Search size={11} className="shrink-0" />
          Buscar estudiantes
        </div>
        <Plus size={18} strokeWidth={2.5} className="shrink-0" />
      </div>

      {/* Historias */}
      <div className="mt-3.5 flex gap-2.5 px-3.5">
        {stories.map(({ name, initial, own }) => (
          <div key={name} className="flex w-11 flex-col items-center gap-1">
            <span
              className={`rounded-full p-[2px] ${own ? "bg-white/15" : "bg-gradient-to-tr from-white via-[#A8A398] to-white"}`}
            >
              <span className="block rounded-full bg-[#0A0A0C] p-[2px]">
                {own ? (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                    {initial}
                  </span>
                ) : (
                  <Avatar initial={initial} className="h-9 w-9 text-xs" />
                )}
              </span>
            </span>
            <span className="w-full truncate text-center text-[8.5px] text-white/60">{name}</span>
          </div>
        ))}
      </div>

      {/* Publicación */}
      <div className="mt-3 px-3">
        <div className="overflow-hidden rounded-[22px] bg-[#141416] ring-1 ring-white/[0.06]">
          <div className="flex items-center gap-2 px-3 py-2.5">
            <Avatar initial="S" className="h-7 w-7 text-[11px]" />
            <div className="leading-tight">
              <p className="text-[11px] font-semibold">Sofía Ramírez</p>
              <p className="text-[9px] text-white/50">Univalle · hace 2 h</p>
            </div>
          </div>
          <div className="relative aspect-[4/3.6] w-full">
            <Image
              src="/images/feed-post-1.jpg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 300px, 260px"
            />
          </div>
          <div className="flex items-center gap-3.5 px-3 pt-2.5">
            <Heart size={16} fill={NOPE} color={NOPE} />
            <MessageSquare size={16} className="text-white/80" />
            <Send size={15} className="text-white/80" />
          </div>
          <p className="px-3 pt-1.5 pb-3 text-[10px] leading-snug text-white/80">
            <span className="font-semibold text-white">248 me gusta</span> · Atardecer en el campus 🌅
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/[0.06] bg-[#0A0A0C]/90 px-3 pt-2.5 pb-6 backdrop-blur-xl">
        {[Home, Compass, MessageCircle, Trophy, User].map((Icon, i) => (
          <span
            key={i}
            className={`relative flex h-8 w-8 items-center justify-center rounded-xl ${i === 0 ? "bg-white/10 text-white" : "text-white/35"}`}
          >
            <Icon size={17} strokeWidth={i === 0 ? 2.4 : 2} />
            {i === 2 && <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full" style={{ background: NOPE }} />}
          </span>
        ))}
      </div>
      {/* Home indicator */}
      <span className="absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/60" />
    </div>
  )
}

export function PhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Vista previa de la app Ve!: inicio con historias y publicaciones de estudiantes, un match y un mensaje nuevo"
      className="relative mx-auto w-full max-w-[290px] sm:max-w-[310px]"
    >
      {/* Brillo ambiental */}
      <div aria-hidden className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute top-[12%] left-[8%] h-56 w-56 rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute right-[4%] bottom-[14%] h-56 w-56 rounded-full bg-[#3B82F6]/20 blur-[90px]" />
      </div>

      <div aria-hidden className="animate-float">
        {/* Marco del teléfono */}
        <div className="relative rounded-[3.1rem] bg-gradient-to-b from-[#5b5b60] via-[#2a2a2e] to-[#4a4a4f] p-[3px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06)]">
          {/* Botones laterales */}
          <span className="absolute top-[18%] -left-[3px] h-7 w-[3px] rounded-l-sm bg-[#3a3a3e]" />
          <span className="absolute top-[26%] -left-[3px] h-12 w-[3px] rounded-l-sm bg-[#3a3a3e]" />
          <span className="absolute top-[35%] -left-[3px] h-12 w-[3px] rounded-l-sm bg-[#3a3a3e]" />
          <span className="absolute top-[28%] -right-[3px] h-16 w-[3px] rounded-r-sm bg-[#3a3a3e]" />

          <div className="rounded-[2.95rem] bg-black p-[9px]">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.4rem]">
              <AppScreen />
              {/* Dynamic Island */}
              <span className="absolute top-2.5 left-1/2 z-10 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black" />
              {/* Reflejo del cristal */}
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_38%)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas flotantes: lo que pasa en la app */}
      <FloatingCard className="animate-float-slow top-[14%] -left-6 w-[190px] sm:-left-24">
        <div className="flex items-center gap-2.5">
          <span className="flex -space-x-2">
            <Avatar initial="T" className="h-8 w-8 text-xs ring-2 ring-[#141416]" />
            <Avatar initial="S" className="h-8 w-8 text-xs ring-2 ring-[#141416]" />
          </span>
          <div className="leading-tight">
            <p className="text-[13px] font-bold" style={{ color: BRAND }}>
              ¡Es un match!
            </p>
            <p className="text-[10.5px] text-white/60">Tú y Sofía se gustaron</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="animate-float-slower top-[46%] -right-6 w-[178px] sm:-right-20">
        <div className="flex items-start gap-2">
          <Avatar initial="M" className="mt-0.5 h-7 w-7 shrink-0 text-[11px]" />
          <div className="min-w-0 leading-tight">
            <p className="text-[11px] font-semibold">Mateo</p>
            <p className="mt-0.5 rounded-xl rounded-tl-sm bg-white/10 px-2.5 py-1.5 text-[11px]">
              ¿Café antes de clase? ☕
            </p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="animate-float-slow top-[4%] -right-4 hidden px-3 py-2 sm:-right-10 sm:block">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold">
          <Trophy size={13} style={{ color: BRAND }} />
          #1 en el ranking de Icesi
        </p>
      </FloatingCard>

      <FloatingCard className="animate-float-slower bottom-[12%] -left-4 flex items-center gap-2.5 rounded-full px-3 py-2.5 sm:-left-16">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#FF4458]/40 bg-[#FF4458]/15">
          <X size={20} color={NOPE} strokeWidth={2.8} />
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <RotateCcw size={15} color={BRAND} strokeWidth={2.2} />
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#4CD964]/40 bg-[#4CD964]/15">
          <Heart size={21} color={LIKE} fill={LIKE} />
        </span>
      </FloatingCard>
    </div>
  )
}
