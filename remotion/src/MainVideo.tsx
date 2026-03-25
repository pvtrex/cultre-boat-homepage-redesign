import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Slow rotation for the entire composition (creates drift feel)
  const globalRotation = interpolate(frame, [0, durationInFrames], [0, 8], {
    extrapolateRight: "clamp",
  });

  // Breathing scale
  const breathe = interpolate(
    Math.sin((frame / durationInFrames) * Math.PI * 2),
    [-1, 1],
    [1.0, 1.15]
  );

  // Drifting offsets for orbs
  const drift1X = Math.sin(frame * 0.012) * 120;
  const drift1Y = Math.cos(frame * 0.008) * 80;
  const drift2X = Math.cos(frame * 0.01) * 150;
  const drift2Y = Math.sin(frame * 0.014) * 100;
  const drift3X = Math.sin(frame * 0.015 + 2) * 100;
  const drift3Y = Math.cos(frame * 0.009 + 1) * 130;

  // Grain opacity pulses subtly
  const grainOpacity = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [0.03, 0.08]
  );

  // Warm light sweep across the frame
  const sweepX = interpolate(
    Math.sin(frame * 0.007),
    [-1, 1],
    [20, 80]
  );
  const sweepY = interpolate(
    Math.cos(frame * 0.005),
    [-1, 1],
    [30, 70]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#060608",
        overflow: "hidden",
      }}
    >
      {/* Base deep gradient */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 120% 100% at ${sweepX}% ${sweepY}%, #1a1520 0%, #0a0a0f 50%, #050507 100%)`,
          transform: `scale(${breathe}) rotate(${globalRotation}deg)`,
        }}
      />

      {/* Warm amber orb - top right drift */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,149,106,0.25) 0%, rgba(196,149,106,0.05) 40%, transparent 70%)",
          top: -200 + drift1Y,
          right: -100 + drift1X,
          filter: "blur(60px)",
        }}
      />

      {/* Cool blue orb - bottom left */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,42,69,0.4) 0%, rgba(26,42,69,0.1) 40%, transparent 70%)",
          bottom: -300 + drift2Y,
          left: -200 + drift2X,
          filter: "blur(80px)",
        }}
      />

      {/* Wine/magenta accent orb - center */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(80,30,50,0.3) 0%, rgba(60,20,35,0.08) 50%, transparent 70%)",
          top: "30%",
          left: "40%",
          transform: `translate(${drift3X}px, ${drift3Y}px)`,
          filter: "blur(50px)",
        }}
      />

      {/* Tungsten highlight streak */}
      <div
        style={{
          position: "absolute",
          width: "200%",
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, rgba(196,149,106,0.08) 30%, rgba(196,149,106,0.15) 50%, rgba(196,149,106,0.08) 70%, transparent 100%)`,
          top: "45%",
          left: "-50%",
          transform: `rotate(${-15 + globalRotation * 0.5}deg)`,
          filter: "blur(2px)",
        }}
      />

      {/* Second streak - cooler */}
      <div
        style={{
          position: "absolute",
          width: "180%",
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, rgba(100,130,180,0.06) 30%, rgba(100,130,180,0.12) 50%, rgba(100,130,180,0.06) 70%, transparent 100%)`,
          top: "62%",
          left: "-40%",
          transform: `rotate(${8 - globalRotation * 0.3}deg)`,
          filter: "blur(1px)",
        }}
      />

      {/* Vignette overlay */}
      <AbsoluteFill
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(5,5,7,0.7) 100%)",
        }}
      />

      {/* Film grain noise overlay */}
      <AbsoluteFill
        style={{
          opacity: grainOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          mixBlendMode: "overlay",
          transform: `translate(${(frame * 7) % 256}px, ${(frame * 11) % 256}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
