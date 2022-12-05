import { Accepts, Dfa } from "../utils/ts/regex-dfa";

export type HexChar = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "a" | "b" | "c" | "d" | "e" | "f";

interface Hash4Dfa extends Dfa {
    startState : "0",
    acceptStates : "8",
    transitions : {
        "0": Record<HexChar, "1"> & Record<string, "fail">,
        "1": Record<HexChar, "2"> & Record<string, "fail">,
        "2": Record<HexChar, "3"> & Record<string, "fail">,
        "3": Record<HexChar, "4"> & Record<string, "fail">,
        "4": Record<HexChar, "5"> & Record<string, "fail">,
        "5": Record<HexChar, "6"> & Record<string, "fail">,
        "6": Record<HexChar, "7"> & Record<string, "fail">,
        "7": Record<HexChar, "8"> & Record<string, "fail">,
        "8": Record<string, "fail">,
        "fail": Record<string, "fail">,
    }
}
export type Hash4Only<hash extends string> = Accepts<Hash4Dfa,hash> extends true ? hash : {__ts_type_err__ : `${hash} is not a 4 bytes hash`} & never;

interface Hash8Dfa extends Dfa {
    startState : "0",
    acceptStates : "16",
    transitions : {
        "0": Record<HexChar, "1"> & Record<string, "fail">,
        "1": Record<HexChar, "2"> & Record<string, "fail">,
        "2": Record<HexChar, "3"> & Record<string, "fail">,
        "3": Record<HexChar, "4"> & Record<string, "fail">,
        "4": Record<HexChar, "5"> & Record<string, "fail">,
        "5": Record<HexChar, "6"> & Record<string, "fail">,
        "6": Record<HexChar, "7"> & Record<string, "fail">,
        "7": Record<HexChar, "8"> & Record<string, "fail">,
        "8": Record<HexChar, "9"> & Record<string, "fail">,
        "9": Record<HexChar, "10"> & Record<string, "fail">,
        "10": Record<HexChar, "11"> & Record<string, "fail">,
        "11": Record<HexChar, "12"> & Record<string, "fail">,
        "12": Record<HexChar, "13"> & Record<string, "fail">,
        "13": Record<HexChar, "14"> & Record<string, "fail">,
        "14": Record<HexChar, "15"> & Record<string, "fail">,
        "15": Record<HexChar, "16"> & Record<string, "fail">,
        "16": Record<string, "fail">,
        "fail": Record<string, "fail">,
    }
}
export type Hash8Only<hash extends string> = Accepts<Hash8Dfa,hash> extends true ? hash : {__ts_type_err__ : `${hash} is not a 8 bytes hash`} & never;

interface Hash16Dfa extends Dfa {
    startState : "0",
    acceptStates : "32",
    transitions : {
        "0": Record<HexChar, "1"> & Record<string, "fail">,
        "1": Record<HexChar, "2"> & Record<string, "fail">,
        "2": Record<HexChar, "3"> & Record<string, "fail">,
        "3": Record<HexChar, "4"> & Record<string, "fail">,
        "4": Record<HexChar, "5"> & Record<string, "fail">,
        "5": Record<HexChar, "6"> & Record<string, "fail">,
        "6": Record<HexChar, "7"> & Record<string, "fail">,
        "7": Record<HexChar, "8"> & Record<string, "fail">,
        "8": Record<HexChar, "9"> & Record<string, "fail">,
        "9": Record<HexChar, "10"> & Record<string, "fail">,
        "10": Record<HexChar, "11"> & Record<string, "fail">,
        "11": Record<HexChar, "12"> & Record<string, "fail">,
        "12": Record<HexChar, "13"> & Record<string, "fail">,
        "13": Record<HexChar, "14"> & Record<string, "fail">,
        "14": Record<HexChar, "15"> & Record<string, "fail">,
        "15": Record<HexChar, "16"> & Record<string, "fail">,
        "16": Record<HexChar, "17"> & Record<string, "fail">,
        "17": Record<HexChar, "18"> & Record<string, "fail">,
        "18": Record<HexChar, "19"> & Record<string, "fail">,
        "19": Record<HexChar, "20"> & Record<string, "fail">,
        "20": Record<HexChar, "21"> & Record<string, "fail">,
        "21": Record<HexChar, "22"> & Record<string, "fail">,
        "22": Record<HexChar, "23"> & Record<string, "fail">,
        "23": Record<HexChar, "24"> & Record<string, "fail">,
        "24": Record<HexChar, "25"> & Record<string, "fail">,
        "25": Record<HexChar, "26"> & Record<string, "fail">,
        "26": Record<HexChar, "27"> & Record<string, "fail">,
        "27": Record<HexChar, "28"> & Record<string, "fail">,
        "28": Record<HexChar, "29"> & Record<string, "fail">,
        "29": Record<HexChar, "30"> & Record<string, "fail">,
        "30": Record<HexChar, "31"> & Record<string, "fail">,
        "31": Record<HexChar, "32"> & Record<string, "fail">,
        "32": Record<string, "fail">,
        "fail": Record<string, "fail">,
    }
}
export type Hash16Only<hash extends string> = Accepts<Hash16Dfa,hash> extends true ? hash : {__ts_type_err__ : `${hash} is not a 16 bytes hash`} & never;

interface Hash32Dfa extends Dfa {
    startState : "0",
    acceptStates : "64",
    transitions : {
        "0": Record<HexChar, "1"> & Record<string, "fail">,
        "1": Record<HexChar, "2"> & Record<string, "fail">,
        "2": Record<HexChar, "3"> & Record<string, "fail">,
        "3": Record<HexChar, "4"> & Record<string, "fail">,
        "4": Record<HexChar, "5"> & Record<string, "fail">,
        "5": Record<HexChar, "6"> & Record<string, "fail">,
        "6": Record<HexChar, "7"> & Record<string, "fail">,
        "7": Record<HexChar, "8"> & Record<string, "fail">,
        "8": Record<HexChar, "9"> & Record<string, "fail">,
        "9": Record<HexChar, "10"> & Record<string, "fail">,
        "10": Record<HexChar, "11"> & Record<string, "fail">,
        "11": Record<HexChar, "12"> & Record<string, "fail">,
        "12": Record<HexChar, "13"> & Record<string, "fail">,
        "13": Record<HexChar, "14"> & Record<string, "fail">,
        "14": Record<HexChar, "15"> & Record<string, "fail">,
        "15": Record<HexChar, "16"> & Record<string, "fail">,
        "16": Record<HexChar, "17"> & Record<string, "fail">,
        "17": Record<HexChar, "18"> & Record<string, "fail">,
        "18": Record<HexChar, "19"> & Record<string, "fail">,
        "19": Record<HexChar, "20"> & Record<string, "fail">,
        "20": Record<HexChar, "21"> & Record<string, "fail">,
        "21": Record<HexChar, "22"> & Record<string, "fail">,
        "22": Record<HexChar, "23"> & Record<string, "fail">,
        "23": Record<HexChar, "24"> & Record<string, "fail">,
        "24": Record<HexChar, "25"> & Record<string, "fail">,
        "25": Record<HexChar, "26"> & Record<string, "fail">,
        "26": Record<HexChar, "27"> & Record<string, "fail">,
        "27": Record<HexChar, "28"> & Record<string, "fail">,
        "28": Record<HexChar, "29"> & Record<string, "fail">,
        "29": Record<HexChar, "30"> & Record<string, "fail">,
        "30": Record<HexChar, "31"> & Record<string, "fail">,
        "31": Record<HexChar, "32"> & Record<string, "fail">,
        "32": Record<HexChar, "33"> & Record<string, "fail">,
        "33": Record<HexChar, "34"> & Record<string, "fail">,
        "34": Record<HexChar, "35"> & Record<string, "fail">,
        "35": Record<HexChar, "36"> & Record<string, "fail">,
        "36": Record<HexChar, "37"> & Record<string, "fail">,
        "37": Record<HexChar, "38"> & Record<string, "fail">,
        "38": Record<HexChar, "39"> & Record<string, "fail">,
        "39": Record<HexChar, "40"> & Record<string, "fail">,
        "40": Record<HexChar, "41"> & Record<string, "fail">,
        "41": Record<HexChar, "42"> & Record<string, "fail">,
        "42": Record<HexChar, "43"> & Record<string, "fail">,
        "43": Record<HexChar, "44"> & Record<string, "fail">,
        "44": Record<HexChar, "45"> & Record<string, "fail">,
        "45": Record<HexChar, "46"> & Record<string, "fail">,
        "46": Record<HexChar, "47"> & Record<string, "fail">,
        "47": Record<HexChar, "48"> & Record<string, "fail">,
        "48": Record<HexChar, "49"> & Record<string, "fail">,
        "49": Record<HexChar, "50"> & Record<string, "fail">,
        "50": Record<HexChar, "51"> & Record<string, "fail">,
        "51": Record<HexChar, "52"> & Record<string, "fail">,
        "52": Record<HexChar, "53"> & Record<string, "fail">,
        "53": Record<HexChar, "54"> & Record<string, "fail">,
        "54": Record<HexChar, "55"> & Record<string, "fail">,
        "55": Record<HexChar, "56"> & Record<string, "fail">,
        "56": Record<HexChar, "57"> & Record<string, "fail">,
        "57": Record<HexChar, "58"> & Record<string, "fail">,
        "58": Record<HexChar, "59"> & Record<string, "fail">,
        "59": Record<HexChar, "60"> & Record<string, "fail">,
        "60": Record<HexChar, "61"> & Record<string, "fail">,
        "61": Record<HexChar, "62"> & Record<string, "fail">,
        "62": Record<HexChar, "63"> & Record<string, "fail">,
        "63": Record<HexChar, "64"> & Record<string, "fail">,
        "64": Record<string, "fail">,
        "fail": Record<string, "fail">,
    }
}
export type Hash32<hash extends string> = Accepts<Hash32Dfa,hash> extends true ? hash : {__ts_type_err__ : `${hash} is not a 32 bytes hash`} & never;

interface Hash28Dfa extends Dfa {
    startState : "0",
    acceptStates : "56",
    transitions : {
        "0": Record<HexChar, "1"> & Record<string, "fail">,
        "1": Record<HexChar, "2"> & Record<string, "fail">,
        "2": Record<HexChar, "3"> & Record<string, "fail">,
        "3": Record<HexChar, "4"> & Record<string, "fail">,
        "4": Record<HexChar, "5"> & Record<string, "fail">,
        "5": Record<HexChar, "6"> & Record<string, "fail">,
        "6": Record<HexChar, "7"> & Record<string, "fail">,
        "7": Record<HexChar, "8"> & Record<string, "fail">,
        "8": Record<HexChar, "9"> & Record<string, "fail">,
        "9": Record<HexChar, "10"> & Record<string, "fail">,
        "10": Record<HexChar, "11"> & Record<string, "fail">,
        "11": Record<HexChar, "12"> & Record<string, "fail">,
        "12": Record<HexChar, "13"> & Record<string, "fail">,
        "13": Record<HexChar, "14"> & Record<string, "fail">,
        "14": Record<HexChar, "15"> & Record<string, "fail">,
        "15": Record<HexChar, "16"> & Record<string, "fail">,
        "16": Record<HexChar, "17"> & Record<string, "fail">,
        "17": Record<HexChar, "18"> & Record<string, "fail">,
        "18": Record<HexChar, "19"> & Record<string, "fail">,
        "19": Record<HexChar, "20"> & Record<string, "fail">,
        "20": Record<HexChar, "21"> & Record<string, "fail">,
        "21": Record<HexChar, "22"> & Record<string, "fail">,
        "22": Record<HexChar, "23"> & Record<string, "fail">,
        "23": Record<HexChar, "24"> & Record<string, "fail">,
        "24": Record<HexChar, "25"> & Record<string, "fail">,
        "25": Record<HexChar, "26"> & Record<string, "fail">,
        "26": Record<HexChar, "27"> & Record<string, "fail">,
        "27": Record<HexChar, "28"> & Record<string, "fail">,
        "28": Record<HexChar, "29"> & Record<string, "fail">,
        "29": Record<HexChar, "30"> & Record<string, "fail">,
        "30": Record<HexChar, "31"> & Record<string, "fail">,
        "31": Record<HexChar, "32"> & Record<string, "fail">,
        "32": Record<HexChar, "33"> & Record<string, "fail">,
        "33": Record<HexChar, "34"> & Record<string, "fail">,
        "34": Record<HexChar, "35"> & Record<string, "fail">,
        "35": Record<HexChar, "36"> & Record<string, "fail">,
        "36": Record<HexChar, "37"> & Record<string, "fail">,
        "37": Record<HexChar, "38"> & Record<string, "fail">,
        "38": Record<HexChar, "39"> & Record<string, "fail">,
        "39": Record<HexChar, "40"> & Record<string, "fail">,
        "40": Record<HexChar, "41"> & Record<string, "fail">,
        "41": Record<HexChar, "42"> & Record<string, "fail">,
        "42": Record<HexChar, "43"> & Record<string, "fail">,
        "43": Record<HexChar, "44"> & Record<string, "fail">,
        "44": Record<HexChar, "45"> & Record<string, "fail">,
        "45": Record<HexChar, "46"> & Record<string, "fail">,
        "46": Record<HexChar, "47"> & Record<string, "fail">,
        "47": Record<HexChar, "48"> & Record<string, "fail">,
        "48": Record<HexChar, "49"> & Record<string, "fail">,
        "49": Record<HexChar, "50"> & Record<string, "fail">,
        "50": Record<HexChar, "51"> & Record<string, "fail">,
        "51": Record<HexChar, "52"> & Record<string, "fail">,
        "52": Record<HexChar, "53"> & Record<string, "fail">,
        "53": Record<HexChar, "54"> & Record<string, "fail">,
        "54": Record<HexChar, "55"> & Record<string, "fail">,
        "55": Record<HexChar, "56"> & Record<string, "fail">,
        "56": Record<string, "fail">,
        "fail": Record<string, "fail">,
    }
}
export type Hash28Only<hash extends string, Or = {__ts_type_err__ : `${hash} is not a 28 bytes hash`} & never > = Accepts<Hash28Dfa,hash> extends true ? hash : Or;