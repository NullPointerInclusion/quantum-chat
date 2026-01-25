import { useSelector } from "react-redux";

import type { GlobalState } from "../../store/types.ts";
import { joinClasses } from "../../utils";
import { UserDetails } from "../UserDetails/UserDetails.tsx";
import s from "./StatusBar.module.css";

const StatusBar = () => {
  const connectionStatus = useSelector((state: GlobalState) => state.connection.status);
  return (
    <div className={s["status-bar"]}>
      <div className={s["connection-status"]}>
        <div className={s["connection-status-indicator"]} data-status={connectionStatus}></div>
        <p className={joinClasses(s["status-text"], s["connection-status-text"])}>
          {connectionStatus[0]?.toUpperCase()}
          {connectionStatus.slice(1)}
        </p>
      </div>
      <UserDetails />
    </div>
  );
};

export { StatusBar };

