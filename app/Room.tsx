"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap } from "@liveblocks/client";
import Loader from "@/components/Loader";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_x1iLYN3v9dw00PbBVVmJn1bXutfUndwDjCjTDJy3JkUyAKAOr3lCitw1RDPTBaO8"
      }
    >
      <RoomProvider id="my-room" initialPresence={{
        cursor: null, cursorColor: null, editingText: null
      }} initialStorage={{canvasObject: new LiveMap}}>
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
