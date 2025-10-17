import { RedirectToSignUp } from "@daveyplate/better-auth-ui";

export default function SignUpOnlyPage() {
  return (
    <main className="container max-w-md mx-auto py-16">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Sign Up Required</h1>
        <p className="text-muted-foreground">
          This page demonstrates the RedirectToSignUp component.
          Unauthenticated users will be redirected to the sign-up page.
        </p>
      </div>
      <RedirectToSignUp />
    </main>
  );
}
