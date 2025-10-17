"use client";
import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { authClient } from "@/lib/auth-client";
import { ptBR } from "@/lib/localization/pt-br";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <AuthUIProvider
      authClient={authClient}
      navigate={router.push}
      replace={router.replace}
      onSessionChange={async () => {
        // Check if user is still authenticated
        const session = await authClient.getSession();
        
        // If no session and not already on auth/home pages, redirect to home
        if (!session && !pathname.startsWith("/auth") && pathname !== "/") {
          router.push("/");
        }
        
        // Always refresh to update protected routes
        router.refresh();
      }}
      Link={Link}
      viewPaths={{
        FORGOT_PASSWORD: "forgot-password",
      }}
      social={{
        providers: ["github"],
      }}
      organization={{
        logo: {
          upload: async (file) => {
            // TODO: Implement actual upload to storage service
            // For now, convert to base64
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.readAsDataURL(file);
            });
          },
        },
        customRoles: [
          { role: "developer", label: "Desenvolvedor" },
          { role: "viewer", label: "Visualizador" },
        ],
      }}
      avatar={{
        upload: async (file) => {
          // TODO: Implement actual upload to storage service  
          // For now, convert to base64
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          });
        },
      }}
      localization={ptBR}
    >
      {children}
    </AuthUIProvider>
  );
}