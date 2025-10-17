import { DemoLayout } from "@/components/demo-layout";

export default function CustomFieldsDemo() {
  return (
    <DemoLayout
      title="UpdateFieldCard"
      description="Update custom profile fields (company, phone, bio)"
      category="Account Settings"
    >
      <div className="space-y-4 text-muted-foreground">
        <p>This component allows users to update custom fields configured in the schema.</p>
        <p>Custom fields available: company, phone, bio</p>
      </div>
    </DemoLayout>
  );
}
