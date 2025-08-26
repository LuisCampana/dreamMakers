export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  solution: string;
  metrics: string[];
  image: string;
  numberPosition?: {
    right?: number | { mobile: number; desktop: number };
    left?: number | { mobile: number; desktop: number };
    top?: number | { mobile: number; desktop: number };
    bottom?: number | { mobile: number; desktop: number };
  };
}
