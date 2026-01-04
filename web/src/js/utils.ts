export type ClassSpec = undefined | string | Record<string, boolean> | ClassSpec[];
export const joinClasses = (...classSpec: ClassSpec[]): string => {
  const classes: string[] = [];
  for (const spec of classSpec) {
    if (typeof spec === "string") {
      for (const part of spec.split(/[\s\,]+/)) classes.push(part.trim());
      continue;
    }

    if (Array.isArray(spec)) {
      classes.push(joinClasses(...spec));
      continue;
    }

    if (typeof spec === "object") {
      for (const [key, value] of Object.entries(spec)) {
        value && classes.push(key);
      }
    }
  }

  return classes.filter((i) => i).join(" ");
};
