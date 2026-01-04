import { joinClasses } from "../../utils";
import s from "./StatusBar.module.css";

const StatusBar = () => {
  const status = "connecting";
  return (
    <div className={s["status-bar"]}>
      <div className={s["connection-status"]}>
        <div className={s["connection-status-indicator"]} data-status={status}></div>
        <p className={joinClasses(s["status-text"], s["connection-status-text"])}>
          {status[0]?.toUpperCase()}
          {status.slice(1)}
        </p>
      </div>
      <div className={s["user-details"]}>
        <p className={joinClasses(s["status-text"], s["user-details-text"])}>Mr. Anonymous</p>
      </div>
    </div>
  );
};

export { StatusBar };
