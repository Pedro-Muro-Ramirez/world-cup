const colorPalette = {
  ink: "#0b0f1a",
  bg: "#0b0f1a",
  primary: "#e63946",
  secondary: "#1d6f5c",
  paper: "#f1faee",
};

export default function About() {
  return (
    <section className="px-4 sm:px-8 md:px-12 py-20">
      <div className="w-auto md:max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <div>
            <h4
              className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4"
              style={{
                color: colorPalette.primary,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              Why this exists
            </h4>
            <h1
              className="uppercase"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(44px, 6vw, 72px)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              Built by <br></br>
              one fan, <br></br>
              <span style={{ color: colorPalette.primary }}>for fans.</span>
            </h1>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <div>
            <div>
              <p
                className="text-[17px] leading-relaxed"
                style={{ color: "rgba(0, 0, 0, 0.75)" }}
              >
                World Cup 2026 is the biggest in history — 48 teams across 3
                host countries. This site lets you browse them like a scouting
                report. Filter by confederation, compare rankings, and read up
                on the names that will define the summer.
              </p>
            </div>
            <div className="mt-8">
              {[
                ["Made", "By hand. React, Tailwind, Express."],
                ["Scope", "All 48 qualifiers — nothing less"],
                ["Squad", "Players worth watching per nation"],
              ].map(([leftText, rightText]) => (
                <div
                  key={leftText}
                  className="flex items-baseline gap-4 py-4 border-t"
                  style={{ borderColor: "rgba(0,0,0,0.15)" }}
                >
                  <div
                    className="w-24 font-bold tracking-widest text-xs uppercase"
                    style={{
                      color: colorPalette.secondary,
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    {leftText}
                  </div>
                  <div
                    className="flex-1 text-[14.5px]"
                    style={{ color: "rgba(0,0,0,0.72)" }}
                  >
                    {rightText}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-8 flex flex-wrap gap-2 text-[11px]"
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              {["UEFA", "CONMEBOL", "CONCACAF", "CAF", "AFC", "OFC"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full"
                    style={{
                      border: `1px solid ${colorPalette.ink}`,
                      color: colorPalette.ink,
                    }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
