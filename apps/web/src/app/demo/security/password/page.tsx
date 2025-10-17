"use client";

import { ChangePasswordCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function ChangePasswordDemo() {
  return (
    <DemoLayout
      title="ChangePasswordCard"
      description="Update password securely, revokes other sessions on change"
      category="Security"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Default</h3>
          <ChangePasswordCard />
        </div>

        <div>
          <h3 className="font-semibold mb-4">With Social Account (Set Password)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            When user has no password (social login only), shows &ldquo;Set Password&rdquo; button
          </p>
          <ChangePasswordCard
            accounts={[{ providerId: "google" }]}
          />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Loading State</h3>
          <ChangePasswordCard isPending />
        </div>
      </div>
    </DemoLayout>
  );
}
