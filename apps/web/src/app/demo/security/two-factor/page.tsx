import { TwoFactorCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function TwoFactorDemo() {
  return (
    <DemoLayout
      title="TwoFactorCard"
      description="Enable two-factor authentication"
      category="Security"
      requiresPlugin={true}
      pluginName="twoFactor"
    >
      <TwoFactorCard />
    </DemoLayout>
  );
}
