import { isControllingVariants, isVariantLabel } from 'motion-dom';
import type { MotionProps } from '../../motion/types.js';
import type { MotionContextProps } from './index.ts';

export function getCurrentTreeVariants(
	props: MotionProps,
	context: MotionContextProps
): MotionContextProps {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? (initial as any) : undefined,
			animate: isVariantLabel(animate) ? animate : undefined
		};
	}
	return props.inherit !== false ? context : {};
}
