'use client';

import { createContext } from 'svelte';
import type { VisualElement } from 'motion-dom';

export interface MotionContextProps<Instance = unknown> {
	visualElement?: VisualElement<Instance>;
	initial?: false | string | string[];
	animate?: string | string[];
}

export const MotionContext = createContext<MotionContextProps>();

// // initial value
// {}
