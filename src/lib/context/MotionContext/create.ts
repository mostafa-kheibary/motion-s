import type { MotionProps } from '../../motion/types.js';
import { MotionContext, type MotionContextProps } from './index.ts';
import { getCurrentTreeVariants } from './utils.ts';

export function useCreateMotionContext<Instance>(props: MotionProps): MotionContextProps<Instance> {
	const { initial, animate } = $derived(getCurrentTreeVariants(props, MotionContext[0]()));

	return useMemo(
		() => ({ initial, animate }),
		[variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]
	);
}

function variantLabelsAsDependency(prop: undefined | string | string[] | boolean) {
	return Array.isArray(prop) ? prop.join(' ') : prop;
}
