"use client";

import { DemoLayout } from "@/components/demo-layout";
import { UserAvatar, useAuthenticate } from "@daveyplate/better-auth-ui";

export default function UserComponentsDemo() {
  const { user, isPending } = useAuthenticate();

  return (
    <DemoLayout
      title="User Components"
      description="Display user avatars and access auth state with hooks"
      category="User"
    >
      {/* UserAvatar Demo */}
      <section className="p-6 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">UserAvatar Component</h2>
        <p className="text-muted-foreground mb-6">Display user avatars in different sizes</p>
        
        <div className="flex items-end gap-8 mb-6">
          <div className="flex flex-col items-center gap-2">
            <UserAvatar size="sm" />
            <code className="text-xs bg-muted px-2 py-1 rounded">sm</code>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <UserAvatar size="default" />
            <code className="text-xs bg-muted px-2 py-1 rounded">default</code>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <UserAvatar size="lg" />
            <code className="text-xs bg-muted px-2 py-1 rounded">lg</code>
          </div>

          <div className="flex flex-col items-center gap-2">
            <UserAvatar size="xl" />
            <code className="text-xs bg-muted px-2 py-1 rounded">xl</code>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <pre className="text-sm">
{`import { UserAvatar } from "@daveyplate/better-auth-ui";

<UserAvatar size="sm" />
<UserAvatar size="default" />
<UserAvatar size="lg" />
<UserAvatar size="xl" />`}
          </pre>
        </div>
      </section>

      {/* useAuthenticate Hook Demo */}
      <section className="p-6 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">useAuthenticate() Hook</h2>
        <p className="text-muted-foreground mb-6">Access authentication state in client components</p>
        
        <div className="p-4 bg-muted rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Current User Data:</h3>
          <pre className="text-sm overflow-auto">
            {JSON.stringify({ 
              name: user?.name,
              email: user?.email,
              id: user?.id,
              isPending 
            }, null, 2)}
          </pre>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <pre className="text-sm">
{`"use client";

import { useAuthenticate } from "@daveyplate/better-auth-ui";

export function MyComponent() {
  const { user, isPending } = useAuthenticate();
  
  if (isPending) return <div>Loading...</div>;
  if (!user) return <div>Not signed in</div>;
  
  return <h1>Welcome, {user.name}!</h1>;
}`}
          </pre>
        </div>
      </section>
    </DemoLayout>
  );
}
