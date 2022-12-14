import PType from "../../PType";
import PBool, { pBool } from "../../PTypes/PBool";
import { TermFn } from "../../PTypes/PFn/PFn";
import pmatch from "../../PTypes/PStruct/pmatch";
import punsafeConvertType from "../../Syntax/punsafeConvertType";
import { phoist, plam } from "../../Syntax/syntax";
import { bool, int } from "../../Term/Type/base";
import PMaybe, { PMaybeT } from "./PMaybe";

const pisJust: TermFn<[PMaybeT<PType>], PBool> = phoist(
    plam( PMaybe.type, bool )
    // @ts-ignore Type instantiation is excessively deep and possibly infinite
    ( maybeTerm =>
        pmatch(
            // workaround to  internal `pmatch` check
            punsafeConvertType(
                maybeTerm,
                PMaybe(int).type
            )
        )
        .onJust   ( (_: any) => pBool( true  ) )
        // @ts-ignore
        .onNothing( (_: any) => pBool( false ) )
    )
) as any;

export default pisJust;