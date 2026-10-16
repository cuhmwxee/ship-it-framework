// Shared public page content, preserved verbatim from the production pages.
// Used by production and the full-site visual prototypes.

export const framework = {
  introduction: [
    "The framework is built on four concepts: Input, Development, Validation, and Ship.",
    "Read the model first, then use the concept sections for definition and detail.",
  ],
  assumptions: [
    "Software changes continuously.",
    "A change would normally inherit the team's delivery process.",
    "Not every change needs every step that process describes.",
    "Teams do not necessarily need a new methodology.",
  ],
  concepts: [
    {
      title: "Input",
      body: [
        "Every change starts somewhere.",
        "An incident report, a product idea, a dependency update, or an automated system can all become Input.",
        "Input can come from any source in your delivery system.",
      ],
    },
    {
      title: "Development",
      body: [
        "Development transforms an input into a change.",
        "That work may involve people, AI systems, automation or entire teams.",
        "How Development happens depends on the change and the team.",
      ],
    },
    {
      title: "Validation",
      body: [
        "Validation provides enough confidence to decide whether a particular change is ready to Ship.",
        "That confidence comes from relevant evidence that the change solves the intended problem and is suitable for its intended environment.",
        "Validation may involve tests, reviews, monitoring, experimentation or human judgment.",
        "If Validation fails, it creates new Input and the workflow continues.",
      ],
    },
    {
      title: "Ship",
      body: [
        "Shipping is the moment a change becomes available.",
        "Deployment and release are sometimes the same step, and sometimes separate.",
        "Ship It! focuses on the outcome rather than the mechanism.",
      ],
    },
  ],
  relatedPages: [
    { href: "/in-practice", label: "In practice", description: "explains how the model fits with your existing way of working." },
    { href: "/examples", label: "Examples", description: "shows the concepts in practice." },
    { href: "/faq", label: "FAQ", description: "answers common questions." },
  ],
} as const;

export const manifesto = {
  title: "Manifesto",
  intro: [
    "Software delivery keeps changing.",
    "A change would normally inherit the team's delivery process. Ship It! challenges whether that change needs all of it.",
    "Without a shared language for those needs, delivery decisions can become inconsistent.",
    "Ship It! exists to provide a shared language for those decisions.",
  ],
  principles: [
    "Not every software change needs every step it would normally inherit. A change may still need all of them.",
    "A change's size alone does not determine what it needs before it ships.",
    "Delivery decisions should be intentional.",
    "Keep your existing way of working.",
  ],
  closing: "Keep your process. Improve your delivery decisions through a shared language.",
} as const;

export const example = {
  title: "A dependency update, examined through Ship It!",
  label: "Illustrative scenario",
  body: [
    "A team needs to update Pino from 9.13.0 to 9.13.1. One dependency version changes, no application code is modified, and the existing checks can be run against the change.",
    "The change enters the team's usual delivery path. There is a ticket, security review, architecture review, change approval, release-manager handoff, and a wait for the next deployment window.",
    "The team stops and asks a simple question:",
    "Does this change really need all of that?",
    "Under Ship It!, the team looks at the change itself rather than its category. What does this particular change need before it ships?",
    "The ticket remains part of the process: it is the Input that describes and tracks the change. The team considers this particular update and the evidence from the existing checks. It finds that those checks provide enough confidence that this change is ready to ship, and that additional review and approval steps do not meaningfully contribute to what it needs.",
    "So the team skips those steps for this change. It still develops and validates the update. The skipped steps remain part of the process for other changes that need them.",
    "The decision rests on relevant evidence that this update is ready to ship. Removing an inherited step must not remove evidence needed for that decision or bypass a required control.",
    "This is not a rule for dependency updates. Another change may need every practice it would normally inherit.",
  ],
  takeaway:
    "The team questioned what this update needed from its usual delivery process. It omitted steps that did not contribute while preserving the evidence needed for Validation.",
} as const;

export const practice = [
  {
    id: "scrum-kanban",
    title: "How does Ship It! fit with Scrum or Kanban?",
    lead: "Ship It! works within the process a team already uses.",
    paragraphs: [
      "A team can keep its existing backlog, board, ceremonies, Definition of Done, or other process practices. Input, Development, Validation, and Ship are not proposed Jira columns, board states, or Scrum ceremonies. They describe the delivery path of an individual change within that environment.",
      "For example, a bug discovered during a sprint gives a team a reason to change the software. The team develops a fix, checks that it addresses the bug without breaking related behavior, and makes the validated change available through its usual release process. Its existing practices organize that work.",
      "The same reasoning applies to work flowing through a Kanban system. A backlog item may contain several changes, and validation may happen throughout development. There is no one-to-one mapping between the four concepts and the team's process artifacts.",
    ],
  },
  {
    id: "ai-assisted-development",
    title: "How does Ship It! fit with AI-assisted development?",
    lead: "AI can make changes faster. It doesn't make unnecessary steps necessary — or necessary validation unnecessary.",
    paragraphs: [
      "AI can change how Development happens and how quickly a team produces changes. It does not remove the need to understand the Input: what problem is being solved, and what would count as a useful result?",
      "An assistant might generate a bug fix quickly. The reported failure still needs to be understood, and the fix still needs appropriate Validation before Ship. For example, reproducing the failure and testing the affected behavior can provide evidence that the generated change solves the problem.",
      "Faster Development can make surrounding delivery work more visible. That visibility does not make the work unnecessary. The question remains what this change needs before it ships.",
    ],
  },
  {
    id: "vibe-coding",
    title: "How does Ship It! fit with vibe coding?",
    lead: "How a change is produced does not determine what it needs before it ships.",
    paragraphs: [
      "In a conversational workflow, someone may describe a desired result, try the generated software, and ask for adjustments. Ship It! uses the same concepts whether the change is written manually, with a coding assistant, through an agent, or through vibe coding.",
      "Input may become clearer through that conversation, and Development may involve many quick iterations. Trying the result can reveal new Input. There is still a decision about whether Validation provides enough confidence to Ship.",
      "For a disposable prototype or a change to customer access controls, Validation needs relevant evidence that the change solves the intended problem and is suitable for its intended environment. How quickly or by what method the code was produced does not establish that evidence.",
    ],
  },
] as const;

export const faq = {
  title: "FAQ",
  items: [
    {
      question: "What is Ship It!?",
      answer: [
        "Ship It! is a minimal software delivery framework.",
        "It describes the minimum workflow required to move a software change from Input to Ship.",
      ],
    },
    {
      question: "Who is Ship It! for?",
      answer: [
        "Ship It! is for developers and teams who feel software delivery has become more complicated than necessary.",
        "It is especially useful when the delivery process feels heavier than the change itself.",
      ],
    },
    {
      question: "Is Ship It! a software development methodology?",
      answer: [
        "No.",
        "It defines a minimal delivery workflow.",
        "Planning, estimation, ceremonies, team structure, and roles remain your team's choice.",
      ],
    },
    {
      question: "Can Ship It! be used with Scrum or Kanban?",
      answer: [
        "Yes.",
        "Ship It! works with your existing way of working.",
      ],
    },
    {
      question: "What is Input?",
      answer: [
        "Input is the reason why a change exists.",
        "It can come from developers, users, monitoring, business requirements or automation.",
      ],
    },
    {
      question: "What is Development?",
      answer: [
        "Development is the activity that creates or modifies the change.",
        "It can be done by individuals, teams or automated systems.",
      ],
    },
    {
      question: "What is Validation?",
      answer: [
        "Validation provides enough confidence to decide whether a particular change is ready to Ship.",
        "That confidence comes from relevant evidence that the change solves the intended problem and is suitable for its intended environment.",
        "Validation may involve people, automation or both.",
      ],
    },
    {
      question: "What is Ship?",
      answer: [
        "Ship makes the validated change available.",
        "How that happens depends on the team, the product and the change itself.",
      ],
    },
    {
      question: "What happens when Validation fails?",
      answer: [
        "Validation does not end the workflow.",
        "Failed validation creates new Input.",
      ],
    },
    {
      question: "Is Ship It! an AI framework?",
      answer: [
        "No.",
        "Ship It! is technology-agnostic.",
        "AI can participate in Development or Validation, but it does not redefine the framework.",
      ],
    },
    {
      question: "Does Ship It! require any specific tools or technologies?",
      answer: [
        "No.",
        "Use whatever works for your team.",
      ],
    },    {
      question: "Why doesn't Ship It! prescribe how teams should work day to day?",
      answer: [
        "Ship It! intentionally avoids prescribing day-to-day working practices. It does not define meetings, ceremonies, planning cadences, or team routines. Those are local decisions that depend on the team, organization, and context. Ship It! provides a shared language for reasoning about software delivery while allowing teams to keep the practices that already work well for them.",
      ],
    },
    {
      question: "Why is the framework so small?",
      answer: [
        "Because every new concept increases complexity.",
        "It intentionally defines only the minimum workflow required to deliver validated software.",
      ],
    },
    {
      question: "Will the framework grow over time?",
      answer: [
        "Only when new ideas make the framework simpler, clearer or easier to apply.",
      ],
    },
    {
      question: "Where does Ship It! come from?",
      answer: [
        "It emerged from practical software delivery experience.",
        "It was created by observing how software is actually delivered.",
      ],
    },
    {
      question: "I want to contact you.",
      answer: ["Email: captain <at> shipitframe.work."],
    },
  ],
} as const;

export const about = {
  title: "About",
  paragraphs: [
    "Ship It! grew from a simple observation: software delivery is becoming increasingly diverse, but the fundamental workflow remains the same.",
    "Teams use different methodologies, tools, release strategies, and levels of automation. Some deploy continuously; others release monthly. Some rely heavily on AI-assisted development, while others follow more traditional workflows. Despite these differences, each change begins with an input and is developed and validated to determine whether it is ready to ship.",
    "Many frameworks focus on how teams should work. Ship It! takes a different approach. It defines the minimum workflow shared by every software change, providing a common language for reasoning about software delivery without prescribing specific practices or tools.",
    "The project was inspired in part by Dave Thomas' work on software delivery. Like many ideas in software engineering, similar patterns emerge independently when different people try to simplify the same problem. Ship It! represents one interpretation of those shared principles, developed through practical software delivery experience.",
    "It is not intended to replace Scrum, Kanban, Shape Up, or other methodologies. Instead, it complements them by describing the delivery path of a software change—from Input toward Ship.",
      ],
} as const;
