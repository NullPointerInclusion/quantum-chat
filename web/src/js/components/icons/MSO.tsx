import type * as React from "react";
import { joinClasses } from "../../utils.ts";

const icons = ["login", "logout"];
const stylesheet = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..200&icon_names=${icons.sort().join()}`;

const linkEl = document.createElement("link");
linkEl.rel = "stylesheet";
linkEl.href = stylesheet;
document.head.appendChild(linkEl);

interface IconMap {
  Login: "login";
  Logout: "logout";
}

interface FontVariationSettings {
  fill: boolean;
  weight: number;
  grade: number;
  opsz: number;
}

interface IconProps extends React.HTMLAttributes<HTMLSpanElement>, Partial<FontVariationSettings> {
  fontVariationSettings?: Partial<FontVariationSettings>;
}

const createIconComponent = (name: IconMap[keyof IconMap]): React.FC<IconProps> => {
  return (props) => {
    const { className, style, fontVariationSettings, fill, weight, grade, opsz, ...rest } = props;
    const fontSettings: FontVariationSettings = {
      fill: fontVariationSettings?.fill ?? fill ?? false,
      weight: fontVariationSettings?.weight ?? weight ?? 400,
      grade: fontVariationSettings?.grade ?? grade ?? 0,
      opsz: fontVariationSettings?.opsz ?? opsz ?? 24,
    };
    return (
      <span
        className={joinClasses("material-symbols-outlined", className)}
        style={{
          fontVariationSettings: `'FILL' ${+fontSettings.fill}, 'wght' ${fontSettings.weight}, 'GRAD' ${fontSettings.grade}, 'opsz' ${fontSettings.opsz}`,
          ...style,
        }}
        {...rest}
      >
        {name}
      </span>
    );
  };
};

const MSO: { [key in keyof IconMap]: React.FC<IconProps> } = {
  Login: createIconComponent("login"),
  Logout: createIconComponent("logout"),
};

export { MSO };
export type { IconMap, IconProps };

