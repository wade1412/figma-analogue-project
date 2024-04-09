"use client";

import Live from "@/components/Live";
import { Room } from "./Room";

export default function Page() {
  return (
    <div>
      <Room>
        <Live />
      </Room>
    </div>
  );
}
