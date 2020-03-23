import { VNode } from 'preact';

type RenderFn = (...args: any[]) => VNode;
type CondFn = (arg: boolean) => ReturnType<RenderFn> | null;

export const renderIfTrue = (renderFn: RenderFn): CondFn => (cond: boolean) =>
    cond ? renderFn() : null;
