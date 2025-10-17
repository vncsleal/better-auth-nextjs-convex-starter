import { SecuritySettingsCards } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function SecuritySettingsCardsDemo() {
  return (
    <DemoLayout
      title="SecuritySettingsCards"
      description="All security settings combined"
      category="Combined Views"
    >
      <SecuritySettingsCards />
    </DemoLayout>
  );
}
