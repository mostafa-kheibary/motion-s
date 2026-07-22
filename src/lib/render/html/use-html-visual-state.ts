import { scrapeHTMLMotionValuesFromProps } from 'motion-dom';
import { makeUseVisualState } from '../../motion/utils/use-visual-state.js';
import { createHtmlRenderState } from './utils/create-render-state.js';

export const useHTMLVisualState = makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeHTMLMotionValuesFromProps,
	createRenderState: createHtmlRenderState
});
