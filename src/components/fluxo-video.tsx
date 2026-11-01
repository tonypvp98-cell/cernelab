import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import fluxoVideo from "@/assets/fluxo-vendas-loop.mp4.asset.json";
import fluxoHero from "@/assets/fluxo-vendas-hero.webp.asset.json";

export function FluxoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [manualPause, setManualPause] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      if (visible && !motion.matches && !manualPause) {
        setLoadVideo(true);
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      update();
    }, { threshold: 0.2 });
    observer.observe(video);
    motion.addEventListener("change", update);
    return () => { observer.disconnect(); motion.removeEventListener("change", update); video.pause(); };
  }, [manualPause, loadVideo]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) { setManualPause(true); video.pause(); }
    else { setManualPause(false); setLoadVideo(true); void video.play().catch(() => setPlaying(false)); }
  };

  return <div className="relative mt-6 aspect-[1878/864] w-full overflow-hidden rounded-2xl border border-fluxo/30 bg-background">
    <video ref={videoRef} src={loadVideo ? fluxoVideo.url : undefined} poster={fluxoHero.url} muted loop playsInline preload="none" width={1878} height={864} aria-label="Gravação real do Fluxo Vendas" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onLoadedData={() => { if (!manualPause && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) void videoRef.current?.play().catch(() => setPlaying(false)); }} className="absolute inset-0 h-full w-full object-contain" />
    <Button variant="outline" size="icon" onClick={toggle} aria-label={playing ? "Pausar demonstração" : "Reproduzir demonstração"} title={playing ? "Pausar demonstração" : "Reproduzir demonstração"} className="absolute bottom-2 right-2 border-fluxo/40 bg-background/90 text-fluxo">
      {playing ? <Pause /> : <Play />}
    </Button>
  </div>;
}