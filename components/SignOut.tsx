"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { Button } from "./ui/button";

export default function SignOutButton() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      window.location.reload();
    } catch (error) {
      console.error("Error logging out", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button onClick={handleSignOut} disabled={loading}>
      {loading ? "Signing out..." : "Sign Out"}
    </Button>
  );
}
