"use client";

import { OrganizationSwitcher } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";
import { Button } from "@/components/ui/button";

export default function OrganizationSwitcherDemo() {
  return (
    <DemoLayout
      title="OrganizationSwitcher"
      description="Switch between organizations and personal account"
      category="Organizations"
      requiresPlugin
      pluginName="organization"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Basic</h3>
          <OrganizationSwitcher />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Sizes</h3>
          <div className="flex items-center gap-6">
            <div>
              <OrganizationSwitcher size="icon" />
              <p className="text-xs text-muted-foreground mt-2">icon</p>
            </div>
            <div>
              <OrganizationSwitcher size="sm" />
              <p className="text-xs text-muted-foreground mt-2">sm</p>
            </div>
            <div>
              <OrganizationSwitcher size="default" />
              <p className="text-xs text-muted-foreground mt-2">default</p>
            </div>
            <div>
              <OrganizationSwitcher size="lg" />
              <p className="text-xs text-muted-foreground mt-2">lg</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Alignment</h3>
          <div className="flex items-center gap-6">
            <div>
              <OrganizationSwitcher align="start" />
              <p className="text-xs text-muted-foreground mt-2">start</p>
            </div>
            <div>
              <OrganizationSwitcher align="center" />
              <p className="text-xs text-muted-foreground mt-2">center</p>
            </div>
            <div>
              <OrganizationSwitcher align="end" />
              <p className="text-xs text-muted-foreground mt-2">end</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Side Position</h3>
          <div className="flex items-center gap-6">
            <div>
              <OrganizationSwitcher side="top" />
              <p className="text-xs text-muted-foreground mt-2">top</p>
            </div>
            <div>
              <OrganizationSwitcher side="bottom" />
              <p className="text-xs text-muted-foreground mt-2">bottom</p>
            </div>
            <div>
              <OrganizationSwitcher side="left" />
              <p className="text-xs text-muted-foreground mt-2">left</p>
            </div>
            <div>
              <OrganizationSwitcher side="right" />
              <p className="text-xs text-muted-foreground mt-2">right</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Hide Personal Account</h3>
          <p className="text-sm text-muted-foreground mb-4">Only shows organizations, enforces organization context</p>
          <OrganizationSwitcher hidePersonal />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Custom Trigger</h3>
          <OrganizationSwitcher
            trigger={
              <Button variant="outline">
                Switch Organization
              </Button>
            }
          />
        </div>
      </div>
    </DemoLayout>
  );
}
