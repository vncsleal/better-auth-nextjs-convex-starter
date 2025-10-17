import { UpdateUsernameCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function UpdateUsernameDemo() {
  return (
    <DemoLayout
      title="UpdateUsernameCard"
      description="Update username"
      category="Account Settings"
      requiresPlugin={true}
      pluginName="username"
    >
      <UpdateUsernameCard />
    </DemoLayout>
  );
}
