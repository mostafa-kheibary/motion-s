'use client';

import type { Component } from 'svelte';
import { buildSVGAttrs, isSVGTag } from 'motion-dom';
import type { MotionProps } from '../../motion/types.js';
import { copyRawValuesOnly } from '../html/use-props.js';
import type { ResolvedValues } from '../types.js';
import { createSvgRenderState } from './utils/create-render-state.js';

export function useSVGProps(
	props: MotionProps,
	visualState: ResolvedValues,
	_isStatic: boolean,
	Component: string | Component
) {
	const visualProps = useMemo(() => {
		const state = createSvgRenderState();

		buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);

		return {
			...state.attrs,
			style: { ...state.style }
		};
	}, [visualState]);

	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style as any, props);
		visualProps.style = { ...rawStyles, ...visualProps.style };
	}

	return visualProps;
}
