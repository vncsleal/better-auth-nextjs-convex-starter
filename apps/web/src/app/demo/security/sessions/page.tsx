import { SessionsCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function SessionsDemo() {
  return (
    <DemoLayout
      title="SessionsCard"
      description="View and manage active sessions"
      category="Security"
    >
      <SessionsCard />
    </DemoLayout>
  );
}
