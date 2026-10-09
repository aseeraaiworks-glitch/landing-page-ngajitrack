import Image from "next/image"
import { cn } from "@/lib/utils"

export function NgajiTrackMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative block size-9 overflow-hidden", className)}>
      <Image
        src="/images/ngajitrack-mark.png"
        alt=""
        fill
        sizes="64px"
        className="scale-[1.6] object-contain"
        priority
      />
    </span>
  )
}

export function NgajiTrackLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <NgajiTrackMark />
      <span className="text-lg font-semibold tracking-tight">NgajiTrack</span>
    </span>
  )
}

export function AseeraLogo({ className }: { className?: string }) {
  return (
    <span className={cn("relative block aspect-[6/1] w-28 overflow-hidden", className)}>
      <Image src="/images/aseera-logo.png" alt="Aseera" fill sizes="160px" className="object-cover" />
    </span>
  )
}
