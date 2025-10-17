"use client";

import { AcceptInvitationCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function AcceptInvitationDemo() {
  return (
    <DemoLayout
      title="AcceptInvitationCard"
      description="Accept or reject organization invitations with validation and error handling"
      category="Organizations"
      requiresPlugin
      pluginName="organization"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Default</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Requires invitationId query parameter: ?invitationId=inv_123456
          </p>
          <AcceptInvitationCard />
        </div>
      </div>
    </DemoLayout>
  );
}
