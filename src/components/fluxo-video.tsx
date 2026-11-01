import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import fluxoVideo from "@/assets/fluxo-vendas-loop.mp4.asset.json";
import fluxoHero from "@/assets/fluxo-vendas-hero.webp.asset.json";

export function shouldPlayFluxoVideo(reducedMotion: boolean, manualPlayback: boolean | null) {
  return manualPlayback ?? !reducedMotion;
}

export function FluxoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const manualPlayback = useRef<boolean | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (shouldPlayFluxoVideo(motion.matches, manualPlayback.current)) {
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    // Playback is independent of scroll; the source and video node stay mounted.
    update();
    motion.addEventListener("change", update);
    return () => { motion.removeEventListener("change", update); video.pause(); };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    manualPlayback.current = video.paused;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  };

  return <div className="relative mt-6 aspect-[1878/864] w-full overflow-hidden rounded-2xl border border-fluxo/30 bg-background">
    <video ref={videoRef} src={fluxoVideo.url} poster={fluxoHero.url} autoPlay muted loop playsInline preload="auto" width={1878} height={864} aria-label="Gravação real do Fluxo Vendas" onPlay={(event) => {
      if (!shouldPlayFluxoVideo(window.matchMedia("(prefers-reduced-motion: reduce)").matches, manualPlayback.current)) {
        event.currentTarget.pause();
        return;
      }
      setPlaying(true);
    }} onPause={() => setPlaying(false)} className="absolute inset-0 h-full w-full object-contain" />
    <Button variant="outline" size="icon" onClick={toggle} aria-label={playing ? "Pausar demonstração" : "Reproduzir demonstração"} title={playing ? "Pausar demonstração" : "Reproduzir demonstração"} className="absolute bottom-2 right-2 border-fluxo/40 bg-background/90 text-fluxo">
      {playing ? <Pause /> : <Play />}
    </Button>
  </div>;
}