export const directions = [
  { id: "01", name: "Field Manual", description: "A practical handbook: paper tones, serif reading, forest-green links, and a quiet contents rail." },
  { id: "02", name: "Working Drawing", description: "An engineering drawing: precise alignment, blue notation, and a model that leads the explanation." },
  { id: "03", name: "Quiet Instrument", description: "A dark reference environment: matte green, legible type, compact spacing, and persistent navigation." },
  { id: "04", name: "Plain Statement", description: "A clear public statement: strong condensed typography, oxblood emphasis, and open, direct composition." },
  { id: "05", name: "Open Notebook", description: "A collection of worked explanations: cool paper, serif narratives, ink-blue relationships, and marginal indexing." },
] as const;

export type Direction = (typeof directions)[number]["id"];
