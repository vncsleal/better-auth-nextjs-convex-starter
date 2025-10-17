import { UpdateAvatarCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function UpdateAvatarDemo() {
  return (
    <DemoLayout
      title="UpdateAvatarCard"
      description="Upload and change profile picture"
      category="Account Settings"
    >
      <UpdateAvatarCard />
    </DemoLayout>
  );
}
