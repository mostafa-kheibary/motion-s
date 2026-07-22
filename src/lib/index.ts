import type { HTMLMotionComponents } from './render/html/types.ts';
import Renderer from './Renderer.svelte';

export const motion = new Proxy({} as unknown as HTMLMotionComponents, {
	get(target, prop) {
		if (typeof prop === 'symbol') throw new Error('component name cannot be a symbol');
		const cb: typeof Renderer = (internals, props) =>
			Renderer(internals, { ...props, element: prop });
		return cb;
	}
});
