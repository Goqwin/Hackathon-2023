"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { LoginEntry } from "./components/login-entry";
import metamaskLogo from "../../public/metamask-logo.svg";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <LoginEntry logo={metamaskLogo} name="MetaMask" />
}
