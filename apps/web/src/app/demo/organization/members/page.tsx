"use client";

import { OrganizationMembersCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function OrganizationMembersCardDemo() {
  return (
    <DemoLayout
      title="OrganizationMembersCard"
      description="Manage organization members, roles, and invitations"
      category="Organizations"
      requiresPlugin
      pluginName="organization"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Default</h3>
          <OrganizationMembersCard />
        </div>
      </div>
    </DemoLayout>
  );
}
