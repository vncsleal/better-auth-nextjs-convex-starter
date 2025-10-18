"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@/components/ui/spinner";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        // Call signOut with fetchOptions to handle the response
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
            onError: (ctx: { error: Error }) => {
              console.error("Sign out error:", ctx.error);
              router.push("/");
            },
          },
        });
      } catch (error) {
        console.error("Sign out error:", error);
      }
    };

    handleSignOut();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <Spinner />
      </div>
    </div>
  );
}
