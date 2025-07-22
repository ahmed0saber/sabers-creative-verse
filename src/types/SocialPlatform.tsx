import { ReactNode } from "react";

interface SocialPlatform {
  name: string;
  icon: ReactNode;
  url: string;
  description: string;
  followers?: string;
  handle: string;
  color: string;
  bgGradient: string;
}

export type { SocialPlatform };