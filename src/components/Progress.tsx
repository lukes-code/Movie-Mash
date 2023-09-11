type Props = {
  percentage: number;

  strokeWidth?: number;
};

const Progress = ({ percentage, strokeWidth = 10 }: Props) => {
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
        M 50,50 m 0,-${radius}
        a ${radius},${radius} 0 1 1 0,${2 * radius}
        a ${radius},${radius} 0 1 1 0,-${2 * radius}
      `;

  const statusColour =
    percentage > 70 ? "#4caf50" : percentage > 50 ? "#E4D749" : "#f44336";

  const diameter = Math.PI * 2 * radius;

  return (
    <svg viewBox="0 0 100 100" width={40} height={40}>
      <path
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: "#292929",
        }}
      />

      <path
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: statusColour,
          strokeLinecap: "round",
          strokeDasharray: `${diameter}px ${diameter}px`,
          strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
        }}
      />

      <text
        x={50}
        y={50}
        style={{
          fill: "#fff",
          fontSize: "30px",
          dominantBaseline: "central",
          textAnchor: "middle",
          pointerEvents: "none",
          backgroundColor: "red",
        }}
      >
        <tspan fontSize="30px">{percentage}</tspan>
        <tspan fontSize="15px" dy="-0.3em">
          %
        </tspan>
      </text>
    </svg>
  );
};

export default Progress;
