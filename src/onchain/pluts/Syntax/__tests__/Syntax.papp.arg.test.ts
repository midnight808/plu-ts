import { bs, fn, int, lam, list, padd, pair, papp, pBool, PBool, pByteString, PByteString, pfn, pInt, PInt, plam, PLam, pList, pmakeUnit, pnil, pPair, PrimType, pStr, PType, PUnit, str, Term, tyVar } from "../..";
import ByteString from "../../../../types/HexString/ByteString";
import Pair from "../../../../types/structs/Pair";
import evalScript from "../../../CEK";
import TermInt from "../../stdlib/UtilityTerms/TermInt";
import pappArgToTerm, { PappArg } from "../pappArg";

function expectScriptToEq( received: Term<PType>, expected: Term<PType> ): void
{
    expect(
        evalScript(
            received
        )
    ).toEqual(
        evalScript(
            expected
        )
    );
}

describe("pappArgToTerm", () => {

    test("only values; must extend any", () => {

        const anyPappArg = ( whatever: any ) => pappArgToTerm( whatever );
        expectScriptToEq(
            anyPappArg( 1 ),
            pInt( 1 )
        );
        
        expectScriptToEq(
            anyPappArg( true ),
            pBool( true )
        );
        
        expectScriptToEq(
            anyPappArg( false ),
            pBool( false )
        );
        
        expectScriptToEq(
            anyPappArg( "deadbeef" ), // hex even length
            pByteString( "deadbeef" )
        );
        
        expectScriptToEq(
            anyPappArg( "caffe" ), // hex odd length
            pStr( "caffe" )
        );
        
        expectScriptToEq(
            anyPappArg( "word" ), // NON-hex any length
            pStr( "word" )
        );
        
        expectScriptToEq(
            anyPappArg( undefined ),
            pmakeUnit()
        );

        expectScriptToEq(
            anyPappArg( null ),
            pmakeUnit()
        );

        expect(
            () => pappArgToTerm( {} as any )
        ).toThrow()

        expect(
            () =>
            // tecnically valid but without
            // a specified `plu-ts` type `pappArgToTerm`
            // can't build `pfn` correctly
            anyPappArg(
                (n: TermInt) => n.add( pInt( 2 ) )
            )
        ).toThrow()

    });

    test("int", () => {

        const pappArgInt = ( n: any ) => pappArgToTerm( n , int );

        expectScriptToEq(
            pappArgInt( 1 ),
            pInt( 1 )
        );

        expectScriptToEq(
            pappArgInt( BigInt(1) ),
            pInt( 1 )
        );

        expect(
            () => pappArgInt( true )
        ).toThrow()

        expect(
            () =>
                // not the correct type
                pappArgInt(
                    (n: TermInt) => n.add( pInt( 2 ) )
                )
        ).toThrow()

    });

    test("bs", () => {

        const pappArgBs = ( n: any ) => pappArgToTerm( n , bs );

        expectScriptToEq(
            pappArgBs( "hello" ), // from ascii
            pByteString( Buffer.from( "hello", "ascii" ) )
        );

        expectScriptToEq(
            pappArgBs( "deadbeef" ), // from hex
            pByteString( Buffer.from( "deadbeef", "hex" ) )
        );

        expectScriptToEq(
            pappArgBs( Buffer.from( "deadbeef", "ascii" ) ), // from ascii even if it is hex
            pByteString( Buffer.from( "deadbeef", "ascii" ) )
        );

        expectScriptToEq(
            pappArgBs( "dead  beef" ), // from ascii because spaces are not hex
            pByteString( Buffer.from( "dead  beef", "ascii" ) )
        );

        expect(
            () => pappArgBs( 1 )
        ).toThrow()

        expect(
            () => pappArgBs( true )
        ).toThrow()

        expect(
            () =>
                // not the correct type
                pappArgBs(
                    (n: TermInt) => n.add( pInt( 2 ) )
                )
        ).toThrow()

    });

    test("fn", () => {

        expectScriptToEq(
            pappArgToTerm(
                n => n.add( pInt(2) ),
                lam( int, int )
            ),
            plam( int, int )
            ( n => n.add( pInt(2) ))
        );

        expectScriptToEq(
            pappArgToTerm(
                padd,
                fn([ int, int ], int)
            ),
            padd
        );

        expectScriptToEq(
            pappArgToTerm(
                ((a: TermInt, b: TermInt) => padd.$( a ).$( b )) as any,
                fn([ int, int ], int)
            ),
            pfn([ int, int ], int)
            ( (a,b) => padd.$( a ).$( b ) )
        );

        // thi function is
        // totally unnecessary in th real world
        //
        // however it covers the test for real world cases
        expectScriptToEq(
            pappArgToTerm(
                ( (a: TermInt) => plam( int, int )( b =>  padd.$( a ).$( b )) ) as any,
                fn([ int, int ], int)
            ),
            plam( int, lam( int, int) )
            ( a => plam( int, int )(
                b => padd.$( a ).$( b )
            ))
        );

    });

    test("list", () => {

        expectScriptToEq(
            pappArgToTerm<[ PrimType.List, [ PrimType.Int ] ]>(
                [1,2,3]
            ),
            pList( int )( [1,2,3].map( pInt ) )
        );

        expectScriptToEq(
            pappArgToTerm(
                [1,2,3],
                list( int )
            ),
            pList( int )( [1,2,3].map( pInt ) )
        );

        expect(
            () => pappArgToTerm<[ PrimType.List, [ PrimType.Int ] ]>( [1,2,"hello" as any] )
        ).toThrow()

        expect(
            () => pappArgToTerm<[ PrimType.List, [ PrimType.Int ] ]>( [] )
        ).toThrow()

        expectScriptToEq(
            pappArgToTerm( [], list( int ) ),
            pnil( int )
        );

        expect(
            () => pappArgToTerm<[ PrimType.List, any ]>( [], list( tyVar() ) )
        ).toThrow()

        expect(
            () => pappArgToTerm<[ PrimType.List, [ PrimType.Str ] ]>( ["hello"] )
        ).toThrow() // ambigous type

        expect(
            () => pappArgToTerm<[ PrimType.List, [ PrimType.Str ] ]>( ["hello","world"] )
        ).toThrow() // ambigous type

        expectScriptToEq(
            pappArgToTerm(
                ["hello","world"],
                list( str )
            ),
            pList( str )( ["hello","world"].map( pStr ) )
        );

        expectScriptToEq(
            pappArgToTerm(
                ["hello","world"],
                list( bs )
            ),
            pList( bs )( ["hello","world"].map( str =>  pByteString( Buffer.from( str, "ascii" ) ) ) )
        );

    });

    test("pair", () => {

        expectScriptToEq(
            pappArgToTerm(
                ["hello","world"],
                pair( bs, bs )
            ),
            pPair( bs, bs )(
                pByteString( ByteString.fromAscii("hello") ),
                pByteString( ByteString.fromAscii("world") )
            )
        );

        expectScriptToEq(
            pappArgToTerm(
                [1,2],
                pair( int, int )
            ),
            pPair( int, int )(
                pInt( 1 ),
                pInt( 2 )
            )
        );

        expectScriptToEq(
            pappArgToTerm(
                [1,"hello"],
                pair( int, bs )
            ),
            pPair( int, bs )(
                pInt( 1 ),
                pByteString( ByteString.fromAscii("hello") )

            )
        );

        expectScriptToEq(
            pappArgToTerm(
                { fst: 1, snd: "hello" },
                pair( int, bs )
            ),
            pPair( int, bs )(
                pInt( 1 ),
                pByteString( ByteString.fromAscii("hello") )
            )
        );

        expectScriptToEq(
            pappArgToTerm(
                new Pair( 1, "hello" ),
                pair( int, bs )
            ),
            pPair( int, bs )(
                pInt( 1 ),
                pByteString(  ByteString.fromAscii("hello") )
            )
        );

    });

});