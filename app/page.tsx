import SignOutButton from "@/components/SignOut";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Supabase User Logged In
      {data.user ? (
        <>
          <Button asChild>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
          <SignOutButton />
        </>
      ) : (
        <Button asChild>
          <Link href={"/login"}>Login</Link>
        </Button>
      )}
    </div>
  );
}
