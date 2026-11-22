"use client";

import dynamic from "next/dynamic";

const GameApp = dynamic(() => import("../GameApp"), { ssr: false });

export default function GameClient() {
  return (
    <div id="root">
      <GameApp />
    </div>
  );
}
