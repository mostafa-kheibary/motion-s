// import type { HTMLElements } from "$lib/render/html/supported-elements.js"

// export function createMotionComponent<
//     Props,
//     TagName extends keyof HTMLElements | string = "div"
// >(
//     Component: TagName | string | React.ComponentType<Props>,
//     { forwardMotionProps = false, type }: MotionComponentOptions = {},
//     preloadedFeatures?: FeaturePackages,
//     createVisualElement?: CreateVisualElement<Props, TagName>
// ) {
//     preloadedFeatures && loadFeatures(preloadedFeatures)

//     /**
//      * Determine whether to use SVG or HTML rendering based on:
//      * 1. Explicit `type` option (highest priority)
//      * 2. Auto-detection via `isSVGComponent`
//      */
//     const isSVG = type ? type === "svg" : isSVGComponent(Component)
//     const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState

//     function MotionDOMComponent(
//         props: MotionComponentProps<Props>,
//         externalRef?: React.Ref<HTMLElement | SVGElement>
//     ) {
//         /**
//          * If we need to measure the element we load this functionality in a
//          * separate class component in order to gain access to getSnapshotBeforeUpdate.
//          */
//         let MeasureLayout: undefined | React.ComponentType<MotionProps>

//         const configAndProps = {
//             ...useContext(MotionConfigContext),
//             ...props,
//             layoutId: useLayoutId(props),
//         }

//         const { isStatic } = configAndProps

//         const context = useCreateMotionContext<HTMLElement | SVGElement>(props)

//         const visualState = useVisualState(props, isStatic)

//         if (!isStatic && typeof window !== "undefined") {
//             useStrictMode(configAndProps, preloadedFeatures)

//             const layoutProjection = getProjectionFunctionality(configAndProps)
//             MeasureLayout = layoutProjection.MeasureLayout

//             /**
//              * Create a VisualElement for this component. A VisualElement provides a common
//              * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
//              * providing a way of rendering to these APIs outside of the React render loop
//              * for more performant animations and interactions
//              */
//             context.visualElement = useVisualElement(
//                 Component,
//                 visualState,
//                 configAndProps,
//                 createVisualElement,
//                 layoutProjection.ProjectionNode,
//                 isSVG
//             )
//         }

//         /**
//          * The mount order and hierarchy is specific to ensure our element ref
//          * is hydrated by the time features fire their effects.
//          */
//         return (
//             <MotionContext.Provider value={context}>
//                 {MeasureLayout && context.visualElement ? (
//                     <MeasureLayout
//                         visualElement={context.visualElement}
//                         {...configAndProps}
//                     />
//                 ) : null}
//                 {useRender<Props, TagName>(
//                     Component,
//                     props,
//                     useMotionRef<
//                         HTMLElement | SVGElement,
//                         HTMLRenderState | SVGRenderState
//                     >(visualState, context.visualElement, externalRef),
//                     visualState,
//                     isStatic,
//                     forwardMotionProps,
//                     isSVG
//                 )}
//             </MotionContext.Provider>
//         )
//     }

//     MotionDOMComponent.displayName = `motion.${
//         typeof Component === "string"
//             ? Component
//             : `create(${Component.displayName ?? Component.name ?? ""})`
//     }`

//     const ForwardRefMotionComponent = forwardRef(MotionDOMComponent as any)
//     ;(ForwardRefMotionComponent as any)[motionComponentSymbol] = Component

//     return ForwardRefMotionComponent as MotionComponent<TagName, Props>
// }
