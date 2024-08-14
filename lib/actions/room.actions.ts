'use server';

import { nanoid } from "nanoid";
import { liveblocks } from "../liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomid = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: "Untitled Document",
    };

    const usersAccesses: RoomAccesses = {
      [email]: ["room:write"],
    };

    const room = await liveblocks.createRoom(roomid, {
      metadata,
      usersAccesses,
      defaultAccesses: [],
    });
      
      revalidatePath('/');

      return parseStringify(room);
  } catch (error) {
      console.error("Error creating document: ", error);
  }
};
