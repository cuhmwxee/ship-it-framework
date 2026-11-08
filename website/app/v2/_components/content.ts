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
    "A developer corrects an internal application’s error message that names an outdated configuration setting, reproduces the error, verifies the new wording, and runs the existing checks.",
    "The responsible people consider the usual review, QA handoff, approval, and deployment window, including their value for knowledge sharing and coordination. The verification provides sufficient confidence for Validation; they record the results for the team and confirm that no additional approval or coordinated deployment is required.",
    "They decide to Ship now because the remaining handoffs and wait would contribute little to this correction. This decision respects existing obligations and applies to this change alone, not to small changes or text corrections in general.",

  ],
};

export const destinations = [
  { href: "/framework", title: "Framework", description: "Learn the four core concepts and how they describe delivery from Input to Ship." },
  { href: "/principles", title: "Principles", description: "Read why Ship It! challenges the process a change would normally inherit." },
  { href: "/examples", title: "Examples", description: "See how a configuration message correction moves through the workflow." },
  { href: "/in-practice", title: "In practice", description: "See how Ship It! fits with your existing process and development practices." },
  { href: "/faq", title: "FAQ", description: "Find concise answers to common questions about scope and usage." },
  { href: "/about", title: "About", description: "Learn more about the project." },
];
