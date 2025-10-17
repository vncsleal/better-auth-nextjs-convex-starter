import { DemoLayout } from "@/components/demo-layout";
import { 
  ChangePasswordCard,
  SessionsCard,
  ProvidersCard,
  DeleteAccountCard 
} from "@daveyplate/better-auth-ui";

export default function SecurityDemo() {
  return (
    <DemoLayout
      title="Security Settings Cards"
      description="Manage password, sessions, OAuth providers, and account security"
      category="Security"
    >
      <div className="space-y-6">
        <ChangePasswordCard />
        <SessionsCard />
        <ProvidersCard />
        
        <div className="pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4 text-destructive">Danger Zone</h3>
          <DeleteAccountCard />
        </div>
      </div>

      {/* Code Example */}
      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="font-semibold mb-3">Code Example</h3>
        <pre className="text-sm overflow-auto">
{`import { 
  ChangePasswordCard,
  SessionsCard,
  ProvidersCard,
  DeleteAccountCard 
} from "@daveyplate/better-auth-ui";

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <ChangePasswordCard />
      <SessionsCard />
      <ProvidersCard />
      
      <div className="pt-8 border-t">
        <DeleteAccountCard />
      </div>
    </div>
  );
}`}
        </pre>
      </div>
    </DemoLayout>
  );
}
