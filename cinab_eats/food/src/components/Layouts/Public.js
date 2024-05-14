import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function Public() {
  return (
    <div>
      <Navbar />
      <main class="font-[sans-serif] text-[#333] py-16">
        <Outlet />
      </main>
    </div>
  );
}
