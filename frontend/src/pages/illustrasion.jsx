function Illustration() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-[420px] h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* background shapes */}
      <circle cx="300" cy="300" r="220" fill="white" opacity="0.08" />
      <circle cx="450" cy="150" r="60" fill="white" opacity="0.12" />
      <circle cx="150" cy="450" r="80" fill="white" opacity="0.1" />

      {/* book */}
      <rect
        x="210"
        y="280"
        width="180"
        height="120"
        rx="10"
        fill="white"
        opacity="0.95"
      />

      <rect
        x="300"
        y="280"
        width="3"
        height="120"
        fill="#6366F1"
      />

      {/* pages */}
      <rect x="225" y="300" width="60" height="6" rx="3" fill="#6366F1" opacity="0.6"/>
      <rect x="225" y="315" width="50" height="6" rx="3" fill="#6366F1" opacity="0.4"/>
      <rect x="225" y="330" width="55" height="6" rx="3" fill="#6366F1" opacity="0.4"/>

      <rect x="315" y="300" width="60" height="6" rx="3" fill="#6366F1" opacity="0.6"/>
      <rect x="315" y="315" width="50" height="6" rx="3" fill="#6366F1" opacity="0.4"/>
      <rect x="315" y="330" width="55" height="6" rx="3" fill="#6366F1" opacity="0.4"/>

      {/* graduation cap */}
      <polygon
        points="300,200 370,230 300,260 230,230"
        fill="white"
      />

      <rect
        x="285"
        y="260"
        width="30"
        height="10"
        rx="3"
        fill="white"
      />

      <line
        x1="370"
        y1="230"
        x2="390"
        y2="270"
        stroke="white"
        strokeWidth="3"
      />

      <circle cx="390" cy="270" r="5" fill="white" />

      {/* floating elements */}
      <rect
        x="120"
        y="200"
        width="50"
        height="50"
        rx="10"
        fill="white"
        opacity="0.2"
      />

      <rect
        x="430"
        y="360"
        width="50"
        height="50"
        rx="10"
        fill="white"
        opacity="0.2"
      />

      <circle cx="120" cy="380" r="20" fill="white" opacity="0.15" />
      <circle cx="470" cy="200" r="15" fill="white" opacity="0.15" />
    </svg>
  );
}

export default Illustration;

