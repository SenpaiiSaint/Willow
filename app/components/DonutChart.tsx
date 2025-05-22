import React from "react";

interface DonutChartDatum {
  name: string;
  amount: number;
  color?: string;
}

interface DonutChartProps {
  data: DonutChartDatum[];
  category: string;
  value: string;
  showLabel?: boolean;
  valueFormatter?: (n: number) => string;
  showTooltip?: boolean;
  colors?: string[];
  className?: string;
}

// Add a mapping from Tailwind bg-* classes to hex codes
const tailwindColorToHex: Record<string, string> = {
  'bg-blue-500': '#3b82f6',
  'bg-cyan-500': '#06b6d4',
  'bg-indigo-500': '#6366f1',
  'bg-violet-500': '#8b5cf6',
  'bg-fuchsia-500': '#d946ef',
  'bg-emerald-500': '#10b981',
  'bg-pink-500': '#ec4899',
  'bg-lime-500': '#84cc16',
  'bg-amber-500': '#f59e42',
  'bg-gray-500': '#6b7280',
  'bg-red-500': '#ef4444',
};

function getHexFromColorClass(colorClass: string | undefined, fallback: string): string {
  if (!colorClass) return fallback;
  const baseClass = colorClass.split(' ')[0];
  return tailwindColorToHex[baseClass] || fallback;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  showLabel = true,
  valueFormatter = (n: number) => n.toString(),
  className = "",
}) => {
  // Calculate total
  const total = data.reduce((sum, d) => sum + d.amount, 0);
  // Angles
  let cumulative = 0;
  const arcs = data.map((d, i) => {
    const value = d.amount;
    const startAngle = cumulative;
    const angle = (value / total) * 360;
    cumulative += angle;
    return {
      ...d,
      startAngle,
      endAngle: cumulative,
      index: i,
    };
  });

  // SVG arc helper
  function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    return [
      "M", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }
  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  // Assign fallback colors if not provided
  const fallbackColors = [
    '#3b82f6', // blue
    '#06b6d4', // cyan
    '#8b5cf6', // violet
    '#d946ef', // fuchsia
    '#10b981', // emerald
    '#6366f1', // indigo
    '#f59e42', // amber
    '#6b7280', // gray
    '#ef4444', // red
  ];

  return (
    <div
      className={className}
      style={{ width: '100%', maxWidth: 320, height: 'auto', position: 'relative', margin: '0 auto' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 240 240"
        aria-label="Donut chart"
        style={{ display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.07))' }}
        role="img"
      >
        <title>Total breakdown donut chart</title>
        <desc>Shows a breakdown of categories as a donut chart</desc>
        <g>
          {arcs.map((arc, i) => (
            <path
              key={arc.name}
              d={describeArc(120, 120, 100, arc.startAngle, arc.endAngle)}
              fill="none"
              stroke={getHexFromColorClass(arc.color, fallbackColors[i % fallbackColors.length])}
              strokeWidth={32}
              style={{
                transition: 'stroke 0.4s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.04))',
              }}
              aria-label={`${arc.name}: ${valueFormatter(arc.amount)}`}
              tabIndex={0}
            />
          ))}
        </g>
        {/* Center white circle for donut effect */}
        <circle cx="120" cy="120" r="64" fill="#fff" />
        {/* Center label */}
        {showLabel && (
          <g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="2.1rem"
              fill="#222"
              style={{ fontWeight: 700 }}
            >
              {valueFormatter(total)}
            </text>
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="1rem"
              fill="#888"
              style={{ fontWeight: 500, letterSpacing: 0.5 }}
            >
              Total
            </text>
          </g>
        )}
        {/* Visually hidden label for screen readers */}
        <text x="0" y="0" fontSize="0" opacity="0" aria-hidden="false">
          Donut chart showing total and category breakdown
        </text>
      </svg>
    </div>
  );
}; 