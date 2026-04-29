import { useState, useEffect } from "react";
import type { SoccerNation } from "../types/countryTypes";
import useCountdown from "./hooks/useCountdown";

// Color Palette - Classic (navy / red/ cream /green)
const colorPalette = {
  bg: "#0b0f1a",
  primary: "#e63946",
  secondary: "#1d6f5c",
  paper: "#f1faee",
};
const KICKOFF = new Date("2026-06-11T18:00:00-05:00");

export default function Header() {
  const [countries, setCountries] = useState<SoccerNation[]>([]);
  const daysLeft = useCountdown(KICKOFF);

  // Fetch all nations from the backend on mount
  useEffect(() => {
    async function getCountries() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:4000";
        const response = await fetch(`${apiUrl}/api/nations`);
        if (!response.ok) {
          throw new Error("Error fetching countries");
        }
        const data: SoccerNation[] = await response.json();
        setCountries(data);
      } catch (err) {
        // TODO: display an error state to the user
      }
    }
    getCountries();
  }, []);

  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const indexId = setInterval(
      () => setFeaturedIndex((i) => (i + 1) % countries.length),
      3500,
    );
    return () => clearInterval(indexId);
  }, [countries]);

  const nation = countries.length ? countries[featuredIndex] : undefined;

  const countdownNumStyle = {
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: "clamp(26px, 3.2vw, 36px)",
    lineHeight: 1,
  };

  // Returned Content

  return (
    <header
      className=" relative text-white overflow-hidden"
      style={{ background: colorPalette.bg }}
    >
      {nation && (
        <div
          key={nation.code}
          className="absolute inset-y-0 right-0 w-[60%] animate-[fadeIn_0.6s_ease-out]"
        >
          <img
            className="w-full h-full object-cover"
            src={`https://flagcdn.com/${nation.flagCode}.svg`}
            alt={`Flag of ${nation.name}`}
          ></img>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg,
                        ${colorPalette.bg} 0%,
                        transparent 35%,
                        transparent 70%,
                        ${colorPalette.bg}00 100%)`,
            }}
          />
        </div>
      )}
      {/*Dateline banner */}
      <div className="relative px-4 sm:px-8 md:px-12 pt-12 pb-12">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.28em] opacity-85">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: colorPalette.primary }}
            />
            <span>Kickoff · Jun 11, 2026 · Estadio Azteca</span>
          </div>
          <span>//</span>
          <div className="flex items-center gap-2">
            <span className="opacity-60">Featured</span>
            {nation && (
              <span
                key={nation.code}
                className="inline-flex items-center gap-2 animate-[fadeIn_0.5s_ease-out]"
              >
                <img
                  className="w-5 h-3.5 object-cover rounded-[1px] ring-1 ring-white/30"
                  src={`https://flagcdn.com/${nation.flagCode}.svg`}
                  alt={`Flag of ${nation.name}`}
                />
                <span className="font-semibold tracking-[0.2em]">
                  {nation.name.toUpperCase()}
                </span>
                <span className="opacity-60">· FIFA #{nation.fifaRanking}</span>
              </span>
            )}
          </div>
        </div>
        {/*Title + paragraph + CTA*/}
        <h1
          className="mt-7 uppercase"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(80px, 15vw, 180px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
          }}
        >
          <span className="block">World</span>
          <span className="block">Cup</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: "2px white",
              color: "transparent",
            }}
          >
            2026.
          </span>
        </h1>
      </div>
      {/*Info grid*/}
      <div
        className="relative border-t border-white/20 grid grid-cols-2 md:grid-cols-7"
        style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
      >
        <div
          className="col-span-2 md:col-span-3 px-5 py-5 border-r border-white/20"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <div className="text-[10px] tracking-[0.25em] opacity-60 mb-2">
            COUNTDOWN · LIVE
          </div>
          <div className="flex gap-2">
            <h2 style={countdownNumStyle}>
              {daysLeft.days}
              <span className="text-[10px] opacity-60">D</span>
            </h2>
            <h2 style={countdownNumStyle}>
              {daysLeft.hours}
              <span className="text-[10px] opacity-60">H</span>
            </h2>
            <h2 style={countdownNumStyle}>
              {daysLeft.minutes}
              <span className="text-[10px] opacity-60">M</span>
            </h2>
            <h2 style={countdownNumStyle}>
              {daysLeft.seconds}
              <span className="text-[10px] opacity-60">S</span>
            </h2>
          </div>
        </div>
        {[
          ["48", "NATIONS"],
          ["16", "HOST CITIES"],
          ["104", "MATCHES"],
          ["6", "CONFEDS"],
        ].map(([number, title], index) => (
          <div
            key={number}
            style={{ backgroundColor: colorPalette.bg }}
            className={`px-5 py-5 ${index < 3 ? "border-r border-white/20" : ""}`}
          >
            <div
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(28px, 3vw, 36px)",
                lineHeight: 1,
              }}
            >
              {number}
            </div>
            <div className="mt-1 text-[10px] tracking-[0.25em] opacity-60">
              {title}
            </div>
          </div>
        ))}
      </div>
      {/*Marquee*/}
      <div
        className="relative overflow-hidden border-t border-white/20"
        style={{ background: colorPalette.primary }}
      >
        <div
          className="flex py-3 whitespace-nowrap font-semibold uppercase text-[12px] tracking-[0.3em] animate-[marquee_38s_linear_infinite]"
          style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
        >
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10 pr-10 shrink-0">
              <span>● 48 Nations</span>
              <span>● Kickoff Jun 11 · Azteca</span>
              <span>● Final Jul 19 · MetLife</span>
              <span>● 16 Host Cities</span>
              <span>● 104 Matches</span>
              <span>● 6 Confederations</span>
              <span>● First 48-Team Tournament</span>
              <span>● USA · Canada · Mexico</span>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
                    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                    @keyframes fadeIn  { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: scale(1); } }`}
      </style>
    </header>
  );
}
