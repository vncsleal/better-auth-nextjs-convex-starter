"use client";

import Link from "next/link";

interface DemoLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  category: string;
  requiresPlugin?: boolean;
  pluginName?: string;
}

export function DemoLayout({
  children,
  title,
  description,
  category,
  requiresPlugin = false,
  pluginName,
}: DemoLayoutProps) {
  return (
    <div className="container max-w-5xl mx-auto py-12 px-6">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          <span className="text-xs px-3 py-1.5 border rounded-lg text-muted-foreground bg-muted">
            {category}
          </span>
        </div>
        <p className="text-lg text-muted-foreground">{description}</p>
        
        {requiresPlugin && (
          <div className="mt-6 p-4 border rounded-lg bg-muted">
            <p className="text-sm">
              ⚠️ Requires the <code className="px-2 py-1 bg-background rounded">{pluginName}</code> plugin
            </p>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}
