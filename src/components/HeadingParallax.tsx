// components/HeadingParallax.tsx
import { useSpring, animated } from "@react-spring/web";

interface HeadingParallaxProps {
  scrollY: number;
  children: React.ReactNode;
}

const HeadingParallax: React.FC<HeadingParallaxProps> = ({
  scrollY,
  children,
}) => {
  const headingSpring = useSpring({
    transform: `translateX(${scrollY * 0.5}px)`, // Horizontal scrolling effect
  });

  return (
    <animated.h1
      style={headingSpring}
      className="text-9xl font-extrabold text-slate-800"
    >
      {children}
    </animated.h1>
  );
};

export default HeadingParallax;
