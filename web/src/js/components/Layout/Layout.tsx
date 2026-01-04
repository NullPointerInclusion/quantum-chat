import type React from "react";
import { Atom } from "../icons/Atom.tsx";
import { StatusBar } from "../StatusBar/StatusBar.tsx";
import s from "./Layout.module.css";

const Layout: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className={s["layout-main"]}>
      <div className={s["layout-background"]}>
        <Atom />
      </div>
      <div className={s["layout-content"]}>{props.children}</div>
      <StatusBar />
    </div>
  );
};

export { Layout };
