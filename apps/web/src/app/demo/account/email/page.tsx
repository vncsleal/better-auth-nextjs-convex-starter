"use client";

import { ChangeEmailCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function ChangeEmailDemo() {
  return (
    <DemoLayout
      title="ChangeEmailCard"
      description="Change email address with verification workflow"
      category="Account Settings"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Default</h3>
          <ChangeEmailCard />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Disabled State</h3>
          <ChangeEmailCard disabled />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Loading State</h3>
          <ChangeEmailCard isPending />
        </div>
      </div>
    </DemoLayout>
  );
}
