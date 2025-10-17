import { AccountsCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function AccountsDemo() {
  return (
    <DemoLayout
      title="AccountsCard"
      description="View linked accounts"
      category="Security"
    >
      <AccountsCard />
    </DemoLayout>
  );
}
