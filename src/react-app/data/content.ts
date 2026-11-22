import type { ContentItem } from "@/types/content";

export const articles: ContentItem[] = [
  { title: "The New Geometry of Search", description: "How retrieval, reasoning, and human judgment are converging into a new discovery layer.", category: "Search", date: "Nov 18, 2026", readTime: "8 min", featured: true },
  { title: "Building a Personal Research System", description: "A practical framework for turning scattered information into connected knowledge.", category: "Research", date: "Nov 12, 2026", readTime: "6 min", featured: true },
  { title: "Beyond the Single Chat Window", description: "Why AI tools are moving toward projects, context, and long-running work.", category: "AI Research", date: "Nov 06, 2026", readTime: "10 min", featured: true },
  { title: "Signals in a World of Noise", description: "Techniques for finding meaningful patterns when every source publishes continuously.", category: "Strategy", date: "Oct 29, 2026", readTime: "5 min" },
];

export const prompts: ContentItem[] = [
  { title: "Research Brief Builder", description: "Turn a broad question into a scoped brief with sources, hypotheses, and open questions.", category: "Research", tags: ["Analysis", "Synthesis"] },
  { title: "Source Critic", description: "Challenge claims, identify assumptions, and map evidence quality before accepting a conclusion.", category: "Critical Thinking", tags: ["Evidence", "Review"] },
  { title: "Decision Matrix", description: "Structure a decision with criteria, tradeoffs, uncertainty, and a clear recommendation.", category: "Strategy", tags: ["Planning", "Analysis"] },
];

export const tools: ContentItem[] = [
  { title: "Perplexity", description: "AI-native search with cited answers for source-backed exploration.", category: "Discovery", tags: ["Search", "Citations"] },
  { title: "NotebookLM", description: "A research workspace that grounds answers in your documents.", category: "Research", tags: ["Documents", "Synthesis"] },
  { title: "Obsidian", description: "A flexible knowledge base for connected notes and personal research.", category: "Knowledge", tags: ["Local-first", "Notes"] },
];

export const archiveHighlights: ContentItem[] = [
  { title: "AI Search Field Guide", description: "A map of the tools and interfaces changing how people find answers.", category: "Field guide", date: "2026", readTime: "12 min" },
  { title: "Personal Knowledge Stack", description: "Patterns for building a durable system for research and connected thinking.", category: "Research", date: "2026", readTime: "9 min" },
  { title: "Source Quality Handbook", description: "A concise framework for evaluating evidence in fast-moving domains.", category: "Handbook", date: "2025", readTime: "7 min" },
];

export const resourceCollections: ContentItem[] = [
  { title: "AI Research Toolkit", description: "A considered collection of reading, search, and synthesis tools for modern research.", category: "Toolkit", tags: ["AI", "Research"] },
  { title: "Cybersecurity Essentials", description: "Trusted explainers and practical resources for everyday security awareness.", category: "Collection", tags: ["Security", "Awareness"] },
  { title: "Knowledge Discovery", description: "Methods and platforms for finding signal in a noisy information landscape.", category: "Reading list", tags: ["Discovery", "Curation"] },
];

export const searchableContent = [
  ...articles,
  ...prompts,
  ...tools,
  ...archiveHighlights,
  ...resourceCollections,
];
