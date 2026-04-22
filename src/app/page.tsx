import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center flex-col gap-y-6">
      Protected server components
      {JSON.stringify(data, null, 2)}
      <LogoutButton />
    </div>
  );
};

export default Page;
