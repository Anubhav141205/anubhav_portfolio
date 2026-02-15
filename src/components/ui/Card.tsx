import type { ReactNode } from "react";

export function Card({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-cyan-400/20 bg-cyan-900/25 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_20px_60px_rgba(0,0,0,0.35)]",
        "backdrop-blur",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}

