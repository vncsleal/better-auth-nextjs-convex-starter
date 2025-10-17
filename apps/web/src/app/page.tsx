"use client";

import { useState } from "react";
import Link from "next/link";

interface Component {
  name: string;
  description: string;
  route: string;
  category: string;
  status: "ready" | "requires-plugin";
}

const components: Component[] = [
  // User Components
  { name: "UserAvatar", description: "Display user avatars in multiple sizes", route: "/demo/user/avatar", category: "User", status: "ready" },
  { name: "UserButton", description: "User dropdown menu with account actions", route: "/demo/user/button", category: "User", status: "ready" },
  
  // Account Settings
  { name: "UpdateAvatarCard", description: "Upload and change profile picture", route: "/demo/account/avatar", category: "Account Settings", status: "ready" },
  { name: "UpdateNameCard", description: "Update display name", route: "/demo/account/name", category: "Account Settings", status: "ready" },
  { name: "UpdateUsernameCard", description: "Update username", route: "/demo/account/username", category: "Account Settings", status: "requires-plugin" },
  { name: "ChangeEmailCard", description: "Change email address", route: "/demo/account/email", category: "Account Settings", status: "ready" },
  { name: "UpdateFieldCard", description: "Update custom profile fields", route: "/demo/account/custom-fields", category: "Account Settings", status: "ready" },
  
  // Security
  { name: "ChangePasswordCard", description: "Change account password", route: "/demo/security/password", category: "Security", status: "ready" },
  { name: "SessionsCard", description: "View and manage active sessions", route: "/demo/security/sessions", category: "Security", status: "ready" },
  { name: "ProvidersCard", description: "Link/unlink OAuth providers", route: "/demo/security/providers", category: "Security", status: "ready" },
  { name: "TwoFactorCard", description: "Enable two-factor authentication", route: "/demo/security/two-factor", category: "Security", status: "requires-plugin" },
  { name: "PasskeysCard", description: "Manage passkeys/WebAuthn", route: "/demo/security/passkeys", category: "Security", status: "ready" },
  { name: "AccountsCard", description: "View linked accounts", route: "/demo/security/accounts", category: "Security", status: "ready" },
  { name: "DeleteAccountCard", description: "Permanently delete account", route: "/demo/security/delete", category: "Security", status: "ready" },
  
  // Organizations
  { name: "OrganizationSwitcher", description: "Switch between organizations", route: "/demo/organization/switcher", category: "Organizations", status: "ready" },
  { name: "OrganizationSettingsCards", description: "Organization settings", route: "/demo/organization/settings", category: "Organizations", status: "ready" },
  { name: "OrganizationMembersCard", description: "Manage members and invitations", route: "/demo/organization/members", category: "Organizations", status: "ready" },
  { name: "AcceptInvitationCard", description: "Accept organization invitation", route: "/demo/organization/invitation", category: "Organizations", status: "ready" },
  
  // Combined Views
  { name: "AccountSettingsCards", description: "All account settings combined", route: "/demo/combined/account", category: "Combined Views", status: "ready" },
  { name: "SecuritySettingsCards", description: "All security settings combined", route: "/demo/combined/security", category: "Combined Views", status: "ready" },
  { name: "All Settings", description: "Account + Security combined view", route: "/demo/combined/all", category: "Combined Views", status: "ready" },
  
  // Advanced
  { name: "ApiKeysCard", description: "Manage API keys", route: "/demo/advanced/api-keys", category: "Advanced", status: "requires-plugin" },
  
  // Hooks
  { name: "useAuthenticate", description: "Hook to access auth state", route: "/demo/hooks/use-authenticate", category: "Hooks", status: "ready" },
];

const categories = [
  { name: "All", count: components.length },
  { name: "User", count: components.filter(c => c.category === "User").length },
  { name: "Account Settings", count: components.filter(c => c.category === "Account Settings").length },
  { name: "Security", count: components.filter(c => c.category === "Security").length },
  { name: "Organizations", count: components.filter(c => c.category === "Organizations").length },
  { name: "Combined Views", count: components.filter(c => c.category === "Combined Views").length },
  { name: "Advanced", count: components.filter(c => c.category === "Advanced").length },
  { name: "Hooks", count: components.filter(c => c.category === "Hooks").length },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = components.filter(component => {
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="container max-w-7xl py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">Better Auth UI Components</h1>
        <p className="text-lg text-muted-foreground">
          All {components.length} components
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 text-base border rounded-lg"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-4 py-2 text-sm border rounded-lg ${
              selectedCategory === category.name 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'bg-background hover:bg-muted'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-muted-foreground text-center">
        Showing {filteredComponents.length} of {components.length}
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredComponents.map((component) => (
          <Link
            key={component.name}
            href={component.route}
            className="block p-6 border rounded-lg hover:bg-muted hover:border-foreground/20 transition-colors"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <h3 className="text-lg font-semibold flex-1">
                  {component.name}
                </h3>
                {component.status === "requires-plugin" && (
                  <span className="text-xs px-2.5 py-1 border rounded-md text-muted-foreground bg-muted whitespace-nowrap">
                    Plugin
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {component.description}
              </p>
              <div className="text-xs text-muted-foreground pt-2 border-t">
                {component.category}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredComponents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground mb-4">No components found</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-4 py-2 border rounded-lg hover:bg-muted"
          >
            Reset Filters
          </button>
        </div>
      )}
    </main>
  );
}
