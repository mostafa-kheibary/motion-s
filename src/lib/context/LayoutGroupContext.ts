import { createContext } from 'svelte';
import type { NodeGroup } from 'motion-dom';

export interface LayoutGroupContextProps {
	id?: string;
	group?: NodeGroup;
	forceRender?: VoidFunction;
}

export const LayoutGroupContext = createContext<LayoutGroupContextProps>();

// // initial value
// {}
