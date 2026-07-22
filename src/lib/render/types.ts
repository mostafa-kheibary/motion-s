import type { Component } from 'svelte';
import type { AnyResolvedKeyframe, MotionValue, ResolvedValues } from 'motion-dom';
import {
	type LayoutLifecycles,
	type UseRenderState,
	type VisualElement,
	type VisualElementEventCallbacks
} from 'motion-dom';
import type { ReducedMotionConfig } from '../context/MotionConfigContext.js';
import type { PresenceContextProps } from '../context/PresenceContext.js';
import type { MotionProps } from '../motion/types.ts';
import type { VisualState } from '../motion/utils/use-visual-state.js';
import type { DOMMotionComponents } from './dom/types.js';

export type { LayoutLifecycles, UseRenderState, VisualElementEventCallbacks };

export type ScrapeMotionValuesFromProps = (
	props: MotionProps,
	prevProps: MotionProps,
	visualElement?: VisualElement
) => {
	[key: string]: MotionValue | AnyResolvedKeyframe;
};

export interface VisualElementOptions<Instance, RenderState = any> {
	visualState: VisualState<Instance, RenderState>;
	parent?: VisualElement<unknown>;
	variantParent?: VisualElement<unknown>;
	presenceContext: PresenceContextProps | null;
	props: MotionProps;
	blockInitialAnimation?: boolean;
	reducedMotionConfig?: ReducedMotionConfig;
	/**
	 * If true, all animations will be skipped and values will be set instantly.
	 * Useful for E2E tests and visual regression testing.
	 */
	skipAnimations?: boolean;
	/**
	 * Explicit override for SVG detection. When true, uses SVG rendering;
	 * when false, uses HTML rendering. If undefined, auto-detects.
	 */
	isSVG?: boolean;
}

// Re-export ResolvedValues from motion-dom for backward compatibility
export type { ResolvedValues };

export type CreateVisualElement<
	Props extends Record<string, any> = {},
	TagName extends keyof DOMMotionComponents | string = 'div'
> = (
	Component: TagName | string | Component<Props>,
	options: VisualElementOptions<HTMLElement | SVGElement>
) => VisualElement<HTMLElement | SVGElement>;
