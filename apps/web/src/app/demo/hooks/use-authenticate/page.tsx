"use client";

import { useAuthenticate } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function UseAuthenticateDemo() {
  const { user, data } = useAuthenticate();

  return (
    <DemoLayout
      title="useAuthenticate"
      description="Hook to access auth state"
      category="Hooks"
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Current User</h3>
          <pre className="p-4 bg-muted rounded-lg text-sm overflow-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Auth Data</h3>
          <pre className="p-4 bg-muted rounded-lg text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </DemoLayout>
  );
}
