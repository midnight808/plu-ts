// export * from "./PFn";
export * from "./PLam";

import type Term from "../../Term";
import type { Tail } from "../../../../utils/ts";
import type PType from "../../PType"
import type { UtilityTermOf } from "../../stdlib/UtilityTerms/addUtilityForType";
import type { PappArg } from "../../Syntax/pappArg";
import type PLam from "./PLam"

///@ts-check
export type PFn<Inputs extends [ PType, ...PType[] ], Output extends PType > = 
    Inputs extends [ infer PInstance extends PType ] ?
        PLam< PInstance, Output > :
    Inputs extends [ infer PInstance extends PType, ...infer PInstances extends [ PType, ...PType[] ] ] ?
        PLam< PInstance, PFn< PInstances, Output> >:
        never


// @ts-check
export type  PLamIn< PLamInstance extends PLam< PType, PType > > = PLamInstance extends PLam< infer PIn, any >  ? PIn  : never;
// @ts-check
export type PLamOut< PLamInstance extends PLam< PType, PType > > = PLamInstance extends PLam< any, infer POut > ? POut : never;

// @ts-check
export type TermFn<Ins extends [ PType, ...PType[] ] , Out extends PType> =
    Out extends PLam<infer A extends PType, infer B extends PType> ? TermFn<[ Ins[0], ...Tail<Ins> , A ], B> :
    Ins extends [ infer PInstance extends PType ] ? Term<PLam<PInstance, Out>> & { $: ( input: PappArg<PInstance> ) => UtilityTermOf<Out> } :
    Ins extends [ infer PInstance extends PType, ...infer RestIns extends [ PType, ...PType[] ] ] ?
        Term<PLam<PInstance,PFn<RestIns, Out>>>
        & { $: ( input: PappArg< PInstance > ) => TermFn<RestIns, Out> } :
    never

// @ts-check
export type UnTermLambda< LamTerm extends Term<PLam<PType, PType>> > =
    LamTerm extends Term<PLam<infer In extends PType, infer Out extends PType >> ? PLam< In, Out > :
    never;