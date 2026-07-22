'use client';

import { createContext } from 'svelte';
import type { ReorderContextProps } from '../components/Reorder/types.js';

export const ReorderContext = createContext<ReorderContextProps<any> | null>();
