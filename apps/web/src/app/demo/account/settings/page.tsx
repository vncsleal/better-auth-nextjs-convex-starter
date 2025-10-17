import { DemoLayout } from "@/components/demo-layout";
import { UpdateAvatarCard, UpdateNameCard, ChangeEmailCard } from "@daveyplate/better-auth-ui";

export default function AccountSettingsDemo() {
  return (
    <DemoLayout
      title="Account Settings Cards"
      description="Individual cards for managing account information"
      category="Account Settings"
    >
      <div className="space-y-6">
        <UpdateAvatarCard />
        <UpdateNameCard />
        <ChangeEmailCard />
      </div>

      {/* Code Example */}
      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="font-semibold mb-3">Code Example</h3>
        <pre className="text-sm overflow-auto">
{`import { 
  UpdateAvatarCard,
  UpdateNameCard,
  ChangeEmailCard 
} from "@daveyplate/better-auth-ui";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <UpdateAvatarCard />
      <UpdateNameCard />
      <ChangeEmailCard />
    </div>
  );
}`}
        </pre>
      </div>
    </DemoLayout>
  );
}
