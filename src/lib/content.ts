export const NAV_LINKS = [
  { label: "About", href: "#capabilities" },
  { label: "Features", href: "#features" },
  { label: "Fees & limits", href: "#fees" },
  { label: "Get started", href: "#get-started" },
] as const;

export const HERO = {
  headline: ["Virtual Card for", "global online payments"],
  subtitle:
    "Open a virtual card in minutes, top up your balance and pay online with USD, EUR and GEL.",
  highlights: [
    {
      title: "Online purchases and subscriptions",
      body: "Pay for digital services, apps and everyday online purchases.",
      icon: "card",
    },
    {
      title: "Apple Pay and Google Pay",
      body: "Add your card to a mobile wallet where available.",
      icon: "Identity",
    },
    {
      title: "Stablecoins friendly",
      body: "Top up by a wide range of options.",
      icon: "coin",
    },
    {
      title: "Instant issue",
      body: "Issue your card in minutes after registration and verification.",
      icon: "bolt",
    },
  ],
} as const;

export const DOWNLOAD_CTAS = [
  { label: "Download for iOS", store: "ios" as const, href: "#download" },
  { label: "Download for Android", store: "android" as const, href: "#download" },
  { label: "Telegram App", store: "telegram" as const, href: "#download" },
];

export const FEATURES = {
  title: ["One virtual card.", "Multiple ways to pay."],
  pills: [
    "Virtual Mastercard",
    "GEL, USD, EUR",
    "Apple Pay & Google Pay",
    "Fast onboarding",
    "Clear fees & limits",
    "Top up fees USDT",
  ],
};

export type Capability = {
  index: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
};

export const CAPABILITIES: Capability[] = [
  {
    index: ".01",
    title: "Pay for subscriptions",
    caption: "Apps, tools, streaming and online services",
    image: "/figma/card-subscriptions.webp",
    alt: "Woman holding a phone with the AllMoneyCard app showing balance and cards",
  },
  {
    index: ".02",
    title: "Add funds and start paying online",
    caption: "Top up from AllMoneyCard or USDT",
    image: "/figma/card-topup.webp",
    alt: "Top up your card balance from AllMoneyCard or with USDT in EUR, GEL, USD",
  },
  {
    index: ".03",
    title: "Travel with your card",
    caption: "Hotels, flights and bookings",
    image: "/figma/card-travel.webp",
    alt: "Pay for hotels, flights and bookings while travelling",
  },
  {
    index: ".04",
    title: "Use it anywhere",
    caption: "Telegram Mini App, iOS and Android",
    image: "/figma/card-anywhere.webp",
    alt: "Use AllMoneyCard on Telegram, iOS and Android",
  },
];

export const PHONE_SCREENS = [
  { src: "/figma/phone-screen-1.webp", alt: "AllMoneyCard app home screen" },
  { src: "/figma/phone-screen-2.webp", alt: "AllMoneyCard card management screen" },
  { src: "/figma/phone-screen-3.webp", alt: "AllMoneyCard transactions screen" },
];

export const MANAGE = {
  title: "Manage your card in one app",
  pills: [
    "Instant virtual card",
    "Secure online payments",
    "Apple Pay & Google Pay",
    "USD, EUR and GEL",
    "Transaction history",
    "Freeze / unfreeze card",
    "Spending limits",
    "Notifications",
    "Fees & limits in the app",
  ],
};

export const FEES = {
  title: "Fees and limits",
  subtitle:
    "Key fees and limits are shown before you issue your card and are always available in the app.",
  issuance: { label: "Card issuance fee", value: "5.99$", note: "Virtual Mastercard" },
  feesColumn: {
    title: "Card fees",
    rows: [
      { label: "Monthly service fee", value: "10.00$" },
      { label: "Top up from another AllMoney account", value: "Shown in app" },
      { label: "Top up from other providers", value: "Sender-side fees may apply" },
      { label: "Top up by stablecoins", value: "X$" },
      { label: "Currency conversion", value: "Shown before payment" },
      { label: "International payments", value: "Shown in app" },
    ],
  },
  limitsColumn: {
    title: "Card limits",
    rows: [
      { label: "Single transaction limit", value: "10.00$" },
      { label: "Daily spending limit", value: "X$" },
      { label: "Monthly spending limit", value: "X$" },
      { label: "Card balance limit", value: "X$" },
      { label: "Top-up limits", value: "1" },
    ],
  },
};

export const STEPS = [
  {
    step: "Step 1",
    title: "Choose your app",
    body: "Open AllMoneyCard in Telegram, iOS or Android",
    icon: "/figma/step-2.webp", 
  },
  {
    step: "Step 2",
    title: "Create your account",
    body: "Sign up with your phone number and email",
   icon: "/figma/step-1.webp",

  },
  {
    step: "Step 3",
    title: "Verify your identity",
    body: "Complete a quick verification process in the app",
    icon: "/figma/step-3.webp",
  },
  {
    step: "Step 4",
    title: "Issue virtual card",
    body: "Get your card and view its details securely",
    icon: "/figma/step-4.webp",
  },
  {
    step: "Step 5",
    title: "Top up and pay",
    body: "Add funds and start paying online or with a mobile wallet",
    icon: "/figma/step-5.webp",
  },
];

export const CTA = {
  title: "Start using AllMoneyCard",
  subtitle:
    "Open AllMoneyCard in Telegram or download the app to issue your virtual card and start paying online.",
};

export const FOOTER_LINKS = [
  { label: "About", href: "#capabilities" },
  { label: "Features", href: "#features" },
  { label: "Fees & limits", href: "#fees" },
  { label: "Get started", href: "#get-started" },
];
