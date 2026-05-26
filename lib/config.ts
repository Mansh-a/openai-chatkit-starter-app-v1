import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  // Native OpenAI ChatKit Configurations
  title: "Crocadilo Support",
  
  color: {
    // Hue 145 locks the background color canvas theme entirely to Sage Mint Green
    grayscale: {
      hue: 145, 
      tint: 5,
      shade: theme === "dark" ? -1 : -4,
    },
    // Changes primary interaction buttons & highlights to Crocadilo Dark Emerald
    accent: {
      primary: "#0B251E", 
      level: 1,
    },
  },
  radius: "medium", 
});
