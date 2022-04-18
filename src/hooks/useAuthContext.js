import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  //if AuthcontextProvider was wrapped around another component then this if check is necessary for us to be alerted if useAuthContext is out of scope
  // since it is wrapped around the entire app we will not get this error message
  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }
  return context;
};
