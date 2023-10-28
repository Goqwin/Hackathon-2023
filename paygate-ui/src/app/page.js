"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { LoginEntry } from "./components/login-entry";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <LoginEntry logo="/metamask-logo.svg" name="MetaMask" />
}
