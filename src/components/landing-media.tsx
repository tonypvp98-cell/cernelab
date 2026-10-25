import { Film, Smartphone } from "lucide-react";

type LandingMediaProps = {
  src: string | null;
  alt: string;
  kind?: "image" | "video";
  priority?: boolean;
  className?: string;
};

export function LandingMedia({ src, alt, kind = "image", priority = false, className = "" }: LandingMediaProps) {
  const Icon = kind === "video" ? Film : Smartphone;
  return <div className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-neon/20 bg-secondary/20 [contain:layout_paint] ${className}`} data-media-status={src ? "ready" : "pending"}>
    {src ? kind === "video" ? (
      <iframe src={src} title={alt} loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
    ) : (
      <img src={src} alt={alt} width={1280} height={720} loading={priority ? "eager" : "lazy"} decoding="async" className="absolute inset-0 h-full w-full object-contain" />
    ) : (
      <div role="img" aria-label={`${alt} — mídia aguardando arquivo real`} className="absolute inset-0 grid place-items-center">
        <div aria-hidden="true" className="grid h-16 w-16 place-items-center rounded-2xl border border-glass-border text-gold/40"><Icon className="h-7 w-7" strokeWidth={1} /></div>
      </div>
    )}
  </div>;
}