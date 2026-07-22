import { scrapeSVGMotionValuesFromProps } from 'motion-dom';
import { makeUseVisualState } from '../../motion/utils/use-visual-state.js';
import { createSvgRenderState } from './utils/create-render-state.js';

export const useSVGVisualState = makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeSVGMotionValuesFromProps,
	createRenderState: createSvgRenderState
});
