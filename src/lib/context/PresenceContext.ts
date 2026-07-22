import { createContext } from 'svelte';
import type { PresenceContextProps } from 'motion-dom';

export type { PresenceContextProps };

/**
 * @public
 */
export const PresenceContext = createContext<PresenceContextProps | null>();
