"use client";

import { OrganizationSettingsCards } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function OrganizationSettingsDemo() {
  return (
    <DemoLayout
      title="OrganizationSettingsCards"
      description="Manage organization logo, name, slug, and deletion"
      category="Organizations"
      requiresPlugin
      pluginName="organization"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Default</h3>
          <OrganizationSettingsCards />
        </div>
      </div>
    </DemoLayout>
  );
}
