import type { CSSProperties, SVGProps } from "react";
import AtomIcon from "../../../assets/atom.svg?react";

interface AtomProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  /** The color of the electron bands (stroke). Defaults to #fff. */
  colour?: string;
  /** The color of the drop shadow. Defaults to #5f5f5fff. */
  shadowColour?: string;
  /** The opacity of the drop shadow. Defaults to .95. */
  shadowOpacity?: number | string;
  /** The width/height ratio of the bands. Defaults to 3.5. */
  whRatio?: number;
  /** The inset spacing of the bands. Defaults to 5%. */
  inset?: string | number;
  /** The stroke width of the bands. Defaults to 3%. */
  strokeWidth?: string | number;
}

export const Atom = ({
  colour,
  shadowColour,
  shadowOpacity,
  whRatio,
  inset,
  strokeWidth,
  style,
  ...props
}: AtomProps) => {
  const customStyle = {
    "--band-stroke-colour": colour,
    "--band-shadow-colour": shadowColour,
    "--band-shadow-opacity": shadowOpacity,
    "--band-wh-ratio": whRatio,
    "--band-inset": inset,
    "--band-stroke-width": strokeWidth,
    ...style,
  } as CSSProperties;

  return <AtomIcon style={customStyle} {...props} />;
};
