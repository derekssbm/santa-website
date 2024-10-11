// components/ParallaxSection.tsx
import { ParallaxLayer } from "@react-spring/parallax";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  offset: number;
  speed: number;
  background: string;
  children: ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  offset,
  speed,
  background,
  children,
}) => {
  return (
    <ParallaxLayer offset={offset} speed={speed}>
      <div
        className={`h-screen ${background} flex items-center justify-center`}
      >
        {children}
      </div>
    </ParallaxLayer>
  );
};

export default ParallaxSection;
