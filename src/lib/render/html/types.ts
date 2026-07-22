import type { Component } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import { type HTMLRenderState, type TransformOrigin } from 'motion-dom';
import type { MotionProps } from '$lib/motion/types.js';
import type { HTMLElements } from './supported-elements.ts';

export type { HTMLRenderState, TransformOrigin };

/**
 * @public
 */
export type ForwardRefComponent<T, P> = Component<P & { ref?: T }>;

type AttributesWithoutMotionProps<Attributes> = {
	[K in Exclude<keyof Attributes, keyof MotionProps>]?: Attributes[K];
};

/**
 * @public
 */
export type HTMLMotionProps<Tag extends keyof HTMLElements> = AttributesWithoutMotionProps<
	SvelteHTMLElements[Tag]
> &
	MotionProps;

/**
 * Motion-optimised versions of React's HTML components.
 *
 * @public
 */
export type HTMLMotionComponents = {
	[K in keyof HTMLElements]: ForwardRefComponent<HTMLElements[K], HTMLMotionProps<K>>;
};
