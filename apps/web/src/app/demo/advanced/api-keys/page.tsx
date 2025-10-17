"use client";

import { ApiKeysCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function ApiKeysCardDemo() {
  return (
    <DemoLayout
      title="ApiKeysCard"
      description="Manage API keys for programmatic access"
      category="Advanced"
      requiresPlugin
      pluginName="apiKey"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Default</h3>
          <ApiKeysCard />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Loading State</h3>
          <ApiKeysCard isPending />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Disabled</h3>
          <ApiKeysCard disabled />
        </div>
      </div>
    </DemoLayout>
  );
}
