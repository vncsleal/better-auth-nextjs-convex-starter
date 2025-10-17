"use client";

import { 
  UpdateAvatarCard,
  UpdateNameCard,
  ChangeEmailCard,
  ChangePasswordCard,
  SessionsCard,
  ProvidersCard,
  DeleteAccountCard
} from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function AllSettingsDemo() {
  return (
    <DemoLayout
      title="All Settings Combined"
      description="All account and security settings in one view"
      category="Combined Views"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <UpdateAvatarCard />
            <UpdateNameCard />
            <ChangeEmailCard />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <div className="space-y-4">
            <ChangePasswordCard />
            <SessionsCard />
            <ProvidersCard />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-destructive">Danger Zone</h2>
          <DeleteAccountCard />
        </div>
      </div>
    </DemoLayout>
  );
}
