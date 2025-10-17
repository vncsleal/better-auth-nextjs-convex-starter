import { DeleteAccountCard } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function DeleteAccountDemo() {
  return (
    <DemoLayout
      title="DeleteAccountCard"
      description="Permanently delete account"
      category="Security"
    >
      <DeleteAccountCard />
    </DemoLayout>
  );
}
