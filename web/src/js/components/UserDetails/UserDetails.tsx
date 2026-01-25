import { useSelector } from "react-redux";
import type { GlobalState } from "../../store/types.ts";
import { joinClasses } from "../../utils.ts";
import { MSO } from "../icons/MSO.tsx";
import s from "./UserDetails.module.css";

const UserDetails = () => {
  const authState = useSelector((state: GlobalState) => state.authentication);
  const displayName = authState.authenticated ? authState.user.username : "Mr. Anonymous";
  const AuthIcon = MSO[authState.authenticated ? "Logout" : "Login"];
  return (
    <div className={s["user-details"]}>
      <p className={joinClasses(s["status-text"], s["user-details-text"])}>{displayName}</p>
      <div className={s["popup"]}>
        <p>
          <AuthIcon weight={300} grade={-25} style={{ fontSize: "inherit" }} />
          {authState.authenticated ? "Sign out" : "Sign in"}
        </p>
      </div>
    </div>
  );
};

export { UserDetails };

