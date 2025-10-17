import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth } from "better-auth";
import { 
  organization, 
  twoFactor, 
  username,
  apiKey 
} from "better-auth/plugins";
import authSchema from "./betterAuth/schema";

const siteUrl = process.env.SITE_URL!;

export const authComponent = createClient<DataModel, typeof authSchema>(
  components.betterAuth,
  {
    local: {
      schema: authSchema,
    },
  }
);

export const createAuth = (
  ctx: GenericCtx<DataModel>,
  { optionsOnly } = { optionsOnly: false },
) => {
  return betterAuth({
    logger: {
      disabled: optionsOnly,
    },
    baseURL: siteUrl,
    database: authComponent.adapter(ctx),
    user: {
      additionalFields: {
        company: {
          type: "string",
          required: false,
        },
        phone: {
          type: "string",
          required: false,
        },
        bio: {
          type: "string",
          required: false,
        },
      },
    },
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
      sendResetPassword: async ({ user, url }) => {
        // In development, log the reset link to console
        // In production, you would send this via email service
        console.log(`Password reset link for ${user.email}: ${url}`);
      },
    },
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
    },
    plugins: [
      convex(),
      organization({
        sendInvitationEmail: async (data) => {
          // In development, log the invitation link to console
          // In production, you would send this via email service
          console.log(`Organization invitation for ${data.email}`);
          console.log(`Organization: ${data.organization.name}`);
          console.log(`Invitation link: ${siteUrl}/auth/accept-invitation?invitationId=${data.invitation.id}`);
        },
      }),
      twoFactor({
        issuer: siteUrl,
      }),
      username(),
      apiKey(),
    ],
  });
};

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return authComponent.getAuthUser(ctx);
  },
});