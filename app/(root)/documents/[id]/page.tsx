'use server';

import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { log } from "console";
import { redirect } from "next/navigation";
import React from "react";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }

  const room = await getDocument({ roomId: id, userId: clerkUser.emailAddresses[0].emailAddress });
  
  if (!room) {
    redirect("/");
  }

  
  // Grant access to the room for the current user


  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata} users={[]} currentUserType={"creator"}  />
    </main>
  );
};

export default Document;
