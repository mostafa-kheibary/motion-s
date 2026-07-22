'use client';

import type { Component } from 'svelte';
import { isMotionValue } from 'motion-dom';
import type { MotionProps } from '../../motion/types.js';
import type { VisualState } from '../../motion/utils/use-visual-state.js';
import type { HTMLRenderState } from '../html/types.js';
import { useHTMLProps } from '../html/use-props.js';
import type { SVGRenderState } from '../svg/types.js';
import { useSVGProps } from '../svg/use-props.js';
import type { DOMMotionComponents } from './types.js';
import { filterProps } from './utils/filter-props.js';
import { isSVGComponent } from './utils/is-svg-component.js';

export function useRender<
	Props extends {} = {},
	TagName extends keyof DOMMotionComponents | string = 'div'
>(
	Component: TagName | string | Component<Props>,
	props: MotionProps,
	ref: HTMLElement | SVGElement,
	{ latestValues }: VisualState<HTMLElement | SVGElement, HTMLRenderState | SVGRenderState>,
	isStatic: boolean,
	forwardMotionProps: boolean = false,
	isSVG?: boolean
) {
	const useVisualProps = (isSVG ?? isSVGComponent(Component)) ? useSVGProps : useHTMLProps;

	const visualProps = useVisualProps(props as any, latestValues, isStatic, Component as any);
	const filteredProps = filterProps(props, typeof Component === 'string', forwardMotionProps);
	const elementProps = { ...filteredProps, ...visualProps, ref };

	/**
	 * If component has been handed a motion value as its child,
	 * memoise its initial value and render that. Subsequent updates
	 * will be handled by the onChange handler
	 */
	const { children } = props;
	const renderedChildren = useMemo(
		() => (isMotionValue(children) ? children.get() : children),
		[children]
	);

	return () =>
		createElement<any>(Component, {
			...elementProps,
			children: renderedChildren
		});
}
