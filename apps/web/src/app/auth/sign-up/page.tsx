import { AuthView } from "@daveyplate/better-auth-ui";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        <AuthView view="SIGN_UP" />
      </div>
    </div>
  );
}