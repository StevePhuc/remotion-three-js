import { ThreeCanvas } from "@remotion/three";
import { useVideoConfig } from "remotion";
import Torus from "./Torus";

export const Scene: React.FC = () => {
  const { width, height } = useVideoConfig();
  return (
    <ThreeCanvas width={width} height={height}>
      <Torus />
    </ThreeCanvas>
  );
};
