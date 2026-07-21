// Transposed verbatim from stage 02's copy.md. Do not edit copy here — edit
// copy.md and re-run this transposition; this file is not the source of truth.

export const meta = {
  home: {
    title: 'ThunderHouse AI — Managed AI Operations',
    description:
      'ThunderHouse AI helps businesses find where AI creates real value, then builds and manages the systems that make it work.',
  },
  approach: {
    title: 'Our Approach — ThunderHouse AI',
    description:
      'How ThunderHouse AI thinks about AI adoption: start with the business, build governed systems, keep people in control.',
  },
  contact: {
    title: 'Contact — ThunderHouse AI',
    description: 'Get in touch with ThunderHouse AI to find out where AI can help your business.',
  },
} as const;

export const navLabels = {
  approach: 'Approach',
  contact: 'Contact',
} as const;

export const pillarsToggleLabel = 'Our Pillars';

export const hero = {
  headline: 'Find where AI actually helps your business.',
  subhead:
    'We start with your operations — the goals, the workflows, the people — before we talk about AI at all. What we build after that is yours to run, not ours to maintain forever.',
  philosophy:
    'AI is not the strategy — solving business problems is. Use AI where it makes sense, people where they matter most.',
} as const;

export const pillarsIntro =
  "Four pillars, one path: from finding where AI helps to keeping it accountable once it's live.";

export type Pillar = {
  name: string;
  keywords: readonly [string, string, string];
  paragraph: string;
};

export const pillars: readonly Pillar[] = [
  {
    name: 'Value Discovery',
    keywords: ['Curious', 'Rigorous', 'Grounded'],
    paragraph:
      "Before we talk about AI, we talk about your business — the goals you're chasing, the workflows that slow you down, the people who make the calls. That's where Value Discovery starts: not with a tool, but with a clear map of where AI can actually move the needle. Everything downstream is built on what we find here.",
  },
  {
    name: 'Practical Implementation',
    keywords: ['Practical', 'Fitted', 'Adopted'],
    paragraph:
      "A solution nobody uses isn't a solution. We design around how your team actually works today, not how a slide deck says they should. Implementation means training, documentation, and real adoption — not a handoff and a wave. If your people won't use it, we haven't finished.",
  },
  {
    name: 'Managed AI Operations',
    keywords: ['Governed', 'Monitored', 'Accountable'],
    paragraph:
      "We don't disappear after launch. Managed AI Operations means we keep running what we built: watching performance, tightening governance, and fixing what breaks. Your AI systems stay accountable to the outcome they were built for, on an ongoing basis, not as a one-time project.",
  },
  {
    name: 'People in Control',
    keywords: ['Deliberate', 'Answerable', 'Trusted'],
    paragraph:
      "AI handles what's repeatable; your people handle what requires judgment. We design the split deliberately, so automation earns trust instead of demanding it. Every system we build stays answerable to a person and tied to a business outcome you can point to — not a metric for its own sake.",
  },
] as const;

export const approachTeaser = {
  text: 'Curious how we actually work? Our approach starts with your business, not our tools.',
  linkLabel: 'Read the approach',
} as const;

export const homeContactCta = {
  headline: 'Ready to find out where AI helps you?',
  body:
    "Bring us the operations that feel slow, unclear, or held together by habit. We'll tell you honestly where AI helps and where it doesn't.",
  buttonLabel: 'Start the conversation',
} as const;

export const manifesto = {
  paragraphs: [
    "Most businesses already know they should be using AI. What's missing isn't ambition — it's a starting point. We begin by understanding your business: the goals you're chasing, the workflows that slow you down, the people who make the calls, and the systems already holding it together. AI comes into the conversation only after that picture is clear.",
    'We are not here to add another tool to your stack. We build and manage governed, AI-assisted operating systems that turn scattered knowledge, manual processes, and everyday business conversations into coordinated action. Every system ties back to a business outcome, not a feature list.',
    "AI works where it moves the business forward; people stay in charge where judgment matters most. We design that division deliberately, case by case, rather than defaulting to automation because it's available. The goal is never AI for its own sake — it's a business problem, solved.",
  ],
  buttonLabel: 'Talk with us',
} as const;

export const contact = {
  headline: "Let's find out where AI helps you.",
  body:
    "Tell us where things are slow, unclear, or held together by habit. We'll tell you honestly whether AI is the right next step.",
  primaryLabel: 'Book a call',
  secondaryLabel: 'or message us on WhatsApp',
} as const;

export const footer = {
  copyright: '© ThunderHouse AI. All rights reserved.',
} as const;
