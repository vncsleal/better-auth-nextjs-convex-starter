import { ProvidersCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function ProvidersDemo() {
  return (
    <DemoLayout
      title="ProvidersCard"
      description="Link/unlink OAuth providers"
      category="Security"
    >
      <ProvidersCard />
    </DemoLayout>
  );
}
