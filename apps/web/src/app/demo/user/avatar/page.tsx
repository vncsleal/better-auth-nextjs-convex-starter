"use client";

import { UserAvatar } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function UserAvatarDemo() {
  return (
    <DemoLayout
      title="UserAvatar"
      description="Display user avatars"
      category="User"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Sizes</h3>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <UserAvatar size="sm" />
              <p className="text-xs text-muted-foreground mt-2">sm</p>
            </div>
            <div className="text-center">
              <UserAvatar />
              <p className="text-xs text-muted-foreground mt-2">default</p>
            </div>
            <div className="text-center">
              <UserAvatar size="lg" />
              <p className="text-xs text-muted-foreground mt-2">lg</p>
            </div>
            <div className="text-center">
              <UserAvatar size="xl" />
              <p className="text-xs text-muted-foreground mt-2">xl</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">With User</h3>
          <div className="flex items-center gap-4">
            <UserAvatar user={{ name: "John Doe", email: "john@example.com" }} />
            <UserAvatar user={{ name: "Jane Smith", email: "jane@example.com", image: "https://avatar.vercel.sh/jane" }} size="lg" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Loading State</h3>
          <div className="flex items-center gap-4">
            <UserAvatar isPending />
            <UserAvatar isPending size="lg" />
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}
