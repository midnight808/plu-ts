import Cbor from "..";
import CborObj, { cborObjFromRaw } from "../../CborObj";


function identityTestFor( cObj: CborObj ): void
{
    expect(
        Cbor.parse(
            Cbor.encode(
                cObj
            )
        )
    ).toEqual( cObj );
}

describe( "Cbor.parse( Cbor.encode( cObj ) ) === cObj", () => {

    test("uint", () => {
        
        identityTestFor(
            cborObjFromRaw({
                uint: BigInt( 0 )
            })
        );
        
        identityTestFor(
            cborObjFromRaw({
                uint: BigInt( 2 )
            })
        );
    
        identityTestFor(
            cborObjFromRaw({
                uint: BigInt( Number.MAX_SAFE_INTEGER )
            })
        );
    })
    
    test("neg", () => {
        
        identityTestFor(
            cborObjFromRaw({
                neg: BigInt( -1 )
            })
        );
        
        identityTestFor(
            cborObjFromRaw({
                neg: -BigInt( Number.MAX_SAFE_INTEGER )
            })
        );
    })

    test("text", () => {

        identityTestFor(
            cborObjFromRaw({
                text: ""
            })
        );

        identityTestFor(
            cborObjFromRaw({
                text: "hello world"
            })
        );

        identityTestFor(
            cborObjFromRaw({
                text: "🔥"
            })
        );

    });
    
    test("bytes", () => {

        identityTestFor(
            cborObjFromRaw({
                bytes: Buffer.from( [] )
            })
        );

        identityTestFor(
            cborObjFromRaw({
                bytes: Buffer.from( "major type different but still utf8" )
            })
        );

    });
    
    test("array", () => {

        identityTestFor(
            cborObjFromRaw({
                array: []
            })
        );

        identityTestFor(
            cborObjFromRaw({
                array: [
                    { uint: BigInt( 1 ) }
                ]
            })
        );

        identityTestFor(
            cborObjFromRaw({
                array: [
                    { uint: BigInt( 1 ) },
                    { uint: BigInt( 1 << 8 ) },
                    { uint: BigInt( 1 << 32 ) },
                    { uint: BigInt( 1 << 53 ) },
                    { uint: BigInt( 1 ) }
                ]
            })
        );

    });

    test("maps", () => {

        identityTestFor(
            cborObjFromRaw({
                map: []
            })
        );

        identityTestFor(
            cborObjFromRaw({
                map: [
                    {
                        k: { text: "hello" },
                        v: { text: "world" }
                    }
                ]
            })
        );

        identityTestFor(
            cborObjFromRaw({
                map: [
                    {
                        k: { text: "hello" },
                        v: {
                            array: [
                                { text: "world" }
                            ]
                        }
                    }
                ]
            })
        );
        
    });

    test("tags", () => {

        identityTestFor(
            cborObjFromRaw({
                tag: 6,
                data: { array: [] }
            })
        );

    });

    test("simple", () => {

        identityTestFor(
            cborObjFromRaw({
                simple: 2.5
            })
        );

        identityTestFor(
            cborObjFromRaw({
                simple: 2.4
            })
        );

        identityTestFor(
            cborObjFromRaw({
                simple: false
            })
        );

        identityTestFor(
            cborObjFromRaw({
                simple: true
            })
        );

        identityTestFor(
            cborObjFromRaw({
                simple: undefined
            })
        );

        identityTestFor(
            cborObjFromRaw({
                simple: null
            })
        );
        
    });

})