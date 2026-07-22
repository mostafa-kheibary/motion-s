import type { Axis, Box } from 'motion-utils';
import type { HTMLElements } from '../../render/html/supported-elements.js';

export interface ReorderContextProps<T> {
	axis: 'x' | 'y';
	registerItem: (item: T, layout: Box) => void;
	updateOrder: (item: T, offset: number, velocity: number) => void;
	groupRef: Element | null;
}

export interface ItemData<T> {
	value: T;
	layout: Axis;
}

// Reorder component type helpers
export type ReorderElementTag = keyof HTMLElements;

// Default elements for each component
export type DefaultGroupElement = 'ul';
export type DefaultItemElement = 'li';
