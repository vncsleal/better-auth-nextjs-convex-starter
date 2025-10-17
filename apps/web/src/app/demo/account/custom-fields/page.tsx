"use client";

import { UpdateFieldCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function CustomFieldsDemo() {
  return (
    <DemoLayout
      title="UpdateFieldCard"
      description="Update custom profile fields (company, phone, bio)"
      category="Account Settings"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Text Field</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update custom text fields like bio, company, or phone number
          </p>
          <UpdateFieldCard
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself"
            description="A short description about you"
          />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Boolean Field</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update boolean preferences like newsletter subscriptions
          </p>
          <UpdateFieldCard
            name="newsletter"
            label="Subscribe to newsletter"
            type="boolean"
            description="Receive updates about new features"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
