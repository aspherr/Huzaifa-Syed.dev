import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.145, 0.388, 0.922],
      glowColor: [1, 1, 1],
      offset: [200, 700],
      markers: [{ location: [51.5074, -0.1278], size: 0.12 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    const onResize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    window.addEventListener("resize", onResize);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div style={{ width: 320, height: 320 }}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default Globe;
