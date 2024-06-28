// In @repo/chemistry-data/types.ts or similar fil
export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export interface Element {
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  category: ElementCategory; // Add this line
}
