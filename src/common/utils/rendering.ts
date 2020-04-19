import { VNode } from 'preact';

type RenderFn = (...args: any[]) => VNode | VNode[];
type RenderOutcome = ReturnType<RenderFn> | null;
type CondFn = (arg: boolean) => RenderOutcome;

export const renderIfTrue = (renderFn: RenderFn): CondFn => (
    cond: boolean
): RenderOutcome => (cond ? renderFn() : null);
