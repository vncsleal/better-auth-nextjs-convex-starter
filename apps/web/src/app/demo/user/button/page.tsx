import { UserButton } from "@daveyplate/better-auth-ui";
import { DemoLayout } from "@/components/demo-layout";

export default function UserButtonDemo() {
  return (
    <DemoLayout
      title="UserButton"
      description="Dropdown menu with user account information and session management actions"
      category="User"
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Sizes</h3>
          <div className="flex items-center gap-6">
            <div>
              <UserButton size="icon" />
              <p className="text-xs text-muted-foreground mt-2">icon</p>
            </div>
            <div>
              <UserButton size="sm" />
              <p className="text-xs text-muted-foreground mt-2">sm</p>
            </div>
            <div>
              <UserButton size="default" />
              <p className="text-xs text-muted-foreground mt-2">default</p>
            </div>
            <div>
              <UserButton size="lg" />
              <p className="text-xs text-muted-foreground mt-2">lg</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Alignment</h3>
          <div className="flex items-center gap-6">
            <div>
              <UserButton align="start" />
              <p className="text-xs text-muted-foreground mt-2">start</p>
            </div>
            <div>
              <UserButton align="center" />
              <p className="text-xs text-muted-foreground mt-2">center</p>
            </div>
            <div>
              <UserButton align="end" />
              <p className="text-xs text-muted-foreground mt-2">end</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Side Position</h3>
          <div className="flex items-center gap-6">
            <div>
              <UserButton side="top" />
              <p className="text-xs text-muted-foreground mt-2">top</p>
            </div>
            <div>
              <UserButton side="bottom" />
              <p className="text-xs text-muted-foreground mt-2">bottom</p>
            </div>
            <div>
              <UserButton side="left" />
              <p className="text-xs text-muted-foreground mt-2">left</p>
            </div>
            <div>
              <UserButton side="right" />
              <p className="text-xs text-muted-foreground mt-2">right</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Disable Default Links</h3>
          <UserButton disableDefaultLinks size="lg" />
        </div>
      </div>
    </DemoLayout>
  );
}
