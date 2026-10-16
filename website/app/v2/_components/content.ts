// A prototype-only snapshot of the current homepage. Production content and
// components are deliberately untouched. Keep wording identical across designs.
export const homepage = {
  title: "Ship It!",
  answer: "Ship It! is a lightweight software delivery framework for teams that already have a process.",
  hook: "Not every software change needs the same delivery process.",
  detail: "Ship It! helps you decide what each change needs before it ships, without replacing the practices that already work.",
  context: "A change would normally inherit the team's delivery process: planning, coordination, review, validation, and release. Ship It! challenges whether this particular change needs all of it before it ships.",
  changing: "Software changes are becoming smaller, more frequent and increasingly AI-assisted. Teams can produce changes faster than many delivery processes were designed to handle.",
  ai: "Faster Development with AI does not change which delivery steps, including Validation, a particular change needs.",
  question: "What does this particular change need before it ships?",
  model: "Ship It! describes the minimum workflow required to move a software change from Input to Ship, using four concepts: Input, Development, Validation, and Ship.",
  contribution: "The question is whether a step contributes to what this particular change needs before it ships.",
  changesTitle: "What changes in practice?",
  changes: [
    "Start by understanding why the change is needed, then develop and validate the solution. Ship when relevant evidence provides enough confidence that the change is ready.",
    "Question the practices this change would normally inherit. A change may need every one of them. Omitting a practice must not remove evidence needed to provide enough confidence to Ship.",
    "A change's size alone does not determine what it needs before it ships.",
  ],
  obligations: "Ship It! does not override your obligations.",
  processTitle: "Does this replace our process?",
  process: [
    "No.",
    "Teams can keep Scrum, Kanban, continuous delivery, pull requests, automated testing, release management, and their own delivery practices. Ship It! is not another comprehensive process layered on top of them.",
    "It describes the shared workflow underneath them: the work required for this change to become shippable. Use the framework to consider what this change needs to reach production with appropriate validation.",
  ],
  closing: "Start with the change. Decide what it needs before it ships.",
  closingDetail: "Keep your process. Improve your delivery decisions.",
  footer: "The minimal software delivery framework.",
};

export const story = {
  title: "A familiar delivery story",
  label: "Illustrative scenario",
  paragraphs: [
    "The dependency update was Pino 9.13.0 to 9.13.1. The team changed a version, ran the existing checks, and made no application-code changes. It entered the team's usual delivery path.",
    "The team stopped and asked: what does this particular change need before it ships?",
    "The existing checks provided enough evidence to give the team confidence that the change was ready to ship. Additional review and approval steps did not meaningfully contribute to what this change needed, so the team skipped them.",
    "Those steps remained part of the process for changes that needed them. This was a decision about this update, not a general rule for dependency updates.",
  ],
};

export const destinations = [
  { href: "/framework", title: "Framework", description: "Learn the four core concepts and how they describe delivery from Input to Ship." },
  { href: "/manifesto", title: "Manifesto", description: "Read why Ship It! challenges the process a change would normally inherit." },
  { href: "/examples", title: "Examples", description: "See how a dependency update moves through the workflow." },
  { href: "/in-practice", title: "In practice", description: "See how Ship It! fits with your existing process and development practices." },
  { href: "/faq", title: "FAQ", description: "Find concise answers to common questions about scope and usage." },
  { href: "/about", title: "About", description: "Learn more about the project." },
];
