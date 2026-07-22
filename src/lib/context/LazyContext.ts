import { createContext } from 'svelte';
import type { CreateVisualElement } from '../render/types.js';

export interface LazyContextProps {
	renderer?: CreateVisualElement;
	strict: boolean;
}

export const LazyContext = createContext<LazyContextProps>();

// // initial value
// { strict: false }
