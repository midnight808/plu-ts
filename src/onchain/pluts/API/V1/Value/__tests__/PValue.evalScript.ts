import evalScript from "../../../../../CEK";
import { pList } from "../../../../PTypes/PList";
import PValue from "../PValue";

describe("evalScript( PValue )", () => {

    test("empty value constructed correctly", () => {
        evalScript(
            PValue.from( pList( PValue.type[1].type[1] )([]) as any )
        )
    });

})