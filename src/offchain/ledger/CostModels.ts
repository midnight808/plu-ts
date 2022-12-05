import { CanBeUInteger } from "../../types/ints/Integer";

export interface CostModels {
    PlutusV1?: CostModelPlutusV1 | CostModelPlutusV1Array
    PlutusV2?: CostModelPlutusV2 | CostModelPlutusV2Array
}

export default CostModels;

export interface CostModelPlutusV1 {
    "mapData-memory-arguments": CanBeUInteger,
    "lessThanInteger-memory-arguments": CanBeUInteger,
    "sha3_256-cpu-arguments-slope": CanBeUInteger,
    "bData-cpu-arguments": CanBeUInteger,
    "equalsByteString-cpu-arguments-intercept": CanBeUInteger,
    "equalsString-cpu-arguments-constant": CanBeUInteger,
    "modInteger-memory-arguments-slope": CanBeUInteger,
    "equalsInteger-memory-arguments": CanBeUInteger,
    "trace-cpu-arguments": CanBeUInteger,
    "iData-cpu-arguments": CanBeUInteger,
    "equalsByteString-memory-arguments": CanBeUInteger,
    "unIData-memory-arguments": CanBeUInteger,
    "consByteString-memory-arguments-intercept": CanBeUInteger,
    "cekLamCost-exBudgetCPU": CanBeUInteger,
    "indexByteString-cpu-arguments": CanBeUInteger,
    "cekStartupCost-exBudgetMemory": CanBeUInteger,
    "listData-memory-arguments": CanBeUInteger,
    "divideInteger-cpu-arguments-constant": CanBeUInteger,
    "lessThanInteger-cpu-arguments-intercept": CanBeUInteger,
    "verifySignature-cpu-arguments-slope": CanBeUInteger,
    "appendString-memory-arguments-intercept": CanBeUInteger,
    "equalsString-cpu-arguments-slope": CanBeUInteger,
    "blake2b-cpu-arguments-intercept": CanBeUInteger,
    "encodeUtf8-cpu-arguments-slope": CanBeUInteger,
    "mapData-cpu-arguments": CanBeUInteger,
    "equalsByteString-cpu-arguments-slope": CanBeUInteger,
    "multiplyInteger-cpu-arguments-intercept": CanBeUInteger,
    "cekStartupCost-exBudgetCPU": CanBeUInteger,
    "sndPair-memory-arguments": CanBeUInteger,
    "sha3_256-cpu-arguments-intercept": CanBeUInteger,
    "addInteger-cpu-arguments-slope": CanBeUInteger,
    "constrData-memory-arguments": CanBeUInteger,
    "divideInteger-memory-arguments-intercept": CanBeUInteger,
    "cekForceCost-exBudgetCPU": CanBeUInteger,
    "equalsByteString-cpu-arguments-constant": CanBeUInteger,
    "modInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "sliceByteString-memory-arguments-slope": CanBeUInteger,
    "equalsString-memory-arguments": CanBeUInteger,
    "cekLamCost-exBudgetMemory": CanBeUInteger,
    "lessThanEqualsInteger-cpu-arguments-intercept": CanBeUInteger,
    "quotientInteger-memory-arguments-minimum": CanBeUInteger,
    "consByteString-cpu-arguments-intercept": CanBeUInteger,
    "appendByteString-memory-arguments-slope": CanBeUInteger,
    "lessThanByteString-cpu-arguments-slope": CanBeUInteger,
    "lessThanByteString-memory-arguments": CanBeUInteger,
    "multiplyInteger-cpu-arguments-slope": CanBeUInteger,
    "cekVarCost-exBudgetCPU": CanBeUInteger,
    "cekDelayCost-exBudgetMemory": CanBeUInteger,
    "blake2b-cpu-arguments-slope": CanBeUInteger,
    "mkNilData-cpu-arguments": CanBeUInteger,
    "appendByteString-cpu-arguments-slope": CanBeUInteger,
    "appendString-memory-arguments-slope": CanBeUInteger,
    "lessThanInteger-cpu-arguments-slope": CanBeUInteger,
    "chooseUnit-memory-arguments": CanBeUInteger,
    "divideInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "decodeUtf8-cpu-arguments-slope": CanBeUInteger,
    "chooseData-cpu-arguments": CanBeUInteger,
    "verifySignature-cpu-arguments-intercept": CanBeUInteger,
    "modInteger-memory-arguments-minimum": CanBeUInteger,
    "lessThanEqualsByteString-memory-arguments": CanBeUInteger,
    "quotientInteger-cpu-arguments-constant": CanBeUInteger,
    "consByteString-memory-arguments-slope": CanBeUInteger,
    "tailList-memory-arguments": CanBeUInteger,
    "divideInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "decodeUtf8-cpu-arguments-intercept": CanBeUInteger,
    "lessThanEqualsInteger-memory-arguments": CanBeUInteger,
    "appendByteString-cpu-arguments-intercept": CanBeUInteger,
    "unMapData-memory-arguments": CanBeUInteger,
    "chooseList-cpu-arguments": CanBeUInteger,
    "divideInteger-memory-arguments-minimum": CanBeUInteger,
    "unListData-memory-arguments": CanBeUInteger,
    "remainderInteger-cpu-arguments-constant": CanBeUInteger,
    "addInteger-memory-arguments-slope": CanBeUInteger,
    "sha3_256-memory-arguments": CanBeUInteger,
    "lessThanByteString-cpu-arguments-intercept": CanBeUInteger,
    "modInteger-cpu-arguments-constant": CanBeUInteger,
    "lessThanEqualsInteger-cpu-arguments-slope": CanBeUInteger,
    "appendByteString-memory-arguments-intercept": CanBeUInteger,
    "listData-cpu-arguments": CanBeUInteger,
    "ifThenElse-memory-arguments": CanBeUInteger,
    "cekApplyCost-exBudgetMemory": CanBeUInteger,
    "sliceByteString-memory-arguments-intercept": CanBeUInteger,
    "unIData-cpu-arguments": CanBeUInteger,
    "modInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "equalsData-cpu-arguments-intercept": CanBeUInteger,
    "mkNilPairData-memory-arguments": CanBeUInteger,
    "cekConstCost-exBudgetCPU": CanBeUInteger,
    "indexByteString-memory-arguments": CanBeUInteger,
    "blake2b-memory-arguments": CanBeUInteger,
    "lessThanEqualsByteString-cpu-arguments-slope": CanBeUInteger,
    "cekDelayCost-exBudgetCPU": CanBeUInteger,
    "multiplyInteger-memory-arguments-slope": CanBeUInteger,
    "remainderInteger-memory-arguments-slope": CanBeUInteger,
    "subtractInteger-cpu-arguments-slope": CanBeUInteger,
    "iData-memory-arguments": CanBeUInteger,
    "cekBuiltinCost-exBudgetCPU": CanBeUInteger,
    "mkNilData-memory-arguments": CanBeUInteger,
    "cekForceCost-exBudgetMemory": CanBeUInteger,
    "trace-memory-arguments": CanBeUInteger,
    "encodeUtf8-cpu-arguments-intercept": CanBeUInteger,
    "sha2_256-cpu-arguments-intercept": CanBeUInteger,
    "headList-memory-arguments": CanBeUInteger,
    "unBData-cpu-arguments": CanBeUInteger,
    "remainderInteger-memory-arguments-minimum": CanBeUInteger,
    "unMapData-cpu-arguments": CanBeUInteger,
    "sha2_256-cpu-arguments-slope": CanBeUInteger,
    "modInteger-memory-arguments-intercept": CanBeUInteger,
    "ifThenElse-cpu-arguments": CanBeUInteger,
    "tailList-cpu-arguments": CanBeUInteger,
    "multiplyInteger-memory-arguments-intercept": CanBeUInteger,
    "remainderInteger-memory-arguments-intercept": CanBeUInteger,
    "consByteString-cpu-arguments-slope": CanBeUInteger,
    "lengthOfByteString-memory-arguments": CanBeUInteger,
    "fstPair-memory-arguments": CanBeUInteger,
    "mkPairData-cpu-arguments": CanBeUInteger,
    "appendString-cpu-arguments-intercept": CanBeUInteger,
    "verifySignature-memory-arguments": CanBeUInteger,
    "sliceByteString-cpu-arguments-intercept": CanBeUInteger,
    "equalsData-cpu-arguments-slope": CanBeUInteger,
    "lessThanEqualsByteString-cpu-arguments-intercept": CanBeUInteger,
    "chooseList-memory-arguments": CanBeUInteger,
    "nullList-memory-arguments": CanBeUInteger,
    "unListData-cpu-arguments": CanBeUInteger,
    "equalsData-memory-arguments": CanBeUInteger,
    "quotientInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "sha2_256-memory-arguments": CanBeUInteger,
    "quotientInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "encodeUtf8-memory-arguments-intercept": CanBeUInteger,
    "quotientInteger-memory-arguments-slope": CanBeUInteger,
    "unConstrData-cpu-arguments": CanBeUInteger,
    "sliceByteString-cpu-arguments-slope": CanBeUInteger,
    "cekBuiltinCost-exBudgetMemory": CanBeUInteger,
    "equalsInteger-cpu-arguments-slope": CanBeUInteger,
    "subtractInteger-memory-arguments-slope": CanBeUInteger,
    "mkCons-cpu-arguments": CanBeUInteger,
    "chooseUnit-cpu-arguments": CanBeUInteger,
    "chooseData-memory-arguments": CanBeUInteger,
    "bData-memory-arguments": CanBeUInteger,
    "appendString-cpu-arguments-slope": CanBeUInteger,
    "decodeUtf8-memory-arguments-slope": CanBeUInteger,
    "fstPair-cpu-arguments": CanBeUInteger,
    "unConstrData-memory-arguments": CanBeUInteger,
    "sndPair-cpu-arguments": CanBeUInteger,
    "addInteger-memory-arguments-intercept": CanBeUInteger,
    "cekConstCost-exBudgetMemory": CanBeUInteger,
    "remainderInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "equalsString-cpu-arguments-intercept": CanBeUInteger,
    "mkCons-memory-arguments": CanBeUInteger,
    "mkPairData-memory-arguments": CanBeUInteger,
    "lengthOfByteString-cpu-arguments": CanBeUInteger,
    "remainderInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "cekApplyCost-exBudgetCPU": CanBeUInteger,
    "constrData-cpu-arguments": CanBeUInteger,
    "nullList-cpu-arguments": CanBeUInteger,
    "headList-cpu-arguments": CanBeUInteger,
    "decodeUtf8-memory-arguments-intercept": CanBeUInteger,
    "subtractInteger-cpu-arguments-intercept": CanBeUInteger,
    "subtractInteger-memory-arguments-intercept": CanBeUInteger,
    "encodeUtf8-memory-arguments-slope": CanBeUInteger,
    "equalsInteger-cpu-arguments-intercept": CanBeUInteger,
    "quotientInteger-memory-arguments-intercept": CanBeUInteger,
    "cekVarCost-exBudgetMemory": CanBeUInteger,
    "unBData-memory-arguments": CanBeUInteger,
    "addInteger-cpu-arguments-intercept": CanBeUInteger,
    "mkNilPairData-cpu-arguments": CanBeUInteger,
    "divideInteger-memory-arguments-slope": CanBeUInteger
};

// 166 CanBeUInteger
export type CostModelPlutusV1Array = [
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
]

export interface CostModelPlutusV2 {
    "addInteger-cpu-arguments-intercept": CanBeUInteger,
    "addInteger-cpu-arguments-slope": CanBeUInteger,
    "addInteger-memory-arguments-intercept": CanBeUInteger,
    "addInteger-memory-arguments-slope": CanBeUInteger,
    "appendByteString-cpu-arguments-intercept": CanBeUInteger,
    "appendByteString-cpu-arguments-slope": CanBeUInteger,
    "appendByteString-memory-arguments-intercept": CanBeUInteger,
    "appendByteString-memory-arguments-slope": CanBeUInteger,
    "appendString-cpu-arguments-intercept": CanBeUInteger,
    "appendString-cpu-arguments-slope": CanBeUInteger,
    "appendString-memory-arguments-intercept": CanBeUInteger,
    "appendString-memory-arguments-slope": CanBeUInteger,
    "bData-cpu-arguments": CanBeUInteger,
    "bData-memory-arguments": CanBeUInteger,
    "blake2b_256-cpu-arguments-intercept": CanBeUInteger,
    "blake2b_256-cpu-arguments-slope": CanBeUInteger,
    "blake2b_256-memory-arguments": CanBeUInteger,
    "cekApplyCost-exBudgetCPU": CanBeUInteger,
    "cekApplyCost-exBudgetMemory": CanBeUInteger,
    "cekBuiltinCost-exBudgetCPU": CanBeUInteger,
    "cekBuiltinCost-exBudgetMemory": CanBeUInteger,
    "cekConstCost-exBudgetCPU": CanBeUInteger,
    "cekConstCost-exBudgetMemory": CanBeUInteger,
    "cekDelayCost-exBudgetCPU": CanBeUInteger,
    "cekDelayCost-exBudgetMemory": CanBeUInteger,
    "cekForceCost-exBudgetCPU": CanBeUInteger,
    "cekForceCost-exBudgetMemory": CanBeUInteger,
    "cekLamCost-exBudgetCPU": CanBeUInteger,
    "cekLamCost-exBudgetMemory": CanBeUInteger,
    "cekStartupCost-exBudgetCPU": CanBeUInteger,
    "cekStartupCost-exBudgetMemory": CanBeUInteger,
    "cekVarCost-exBudgetCPU": CanBeUInteger,
    "cekVarCost-exBudgetMemory": CanBeUInteger,
    "chooseData-cpu-arguments": CanBeUInteger,
    "chooseData-memory-arguments": CanBeUInteger,
    "chooseList-cpu-arguments": CanBeUInteger,
    "chooseList-memory-arguments": CanBeUInteger,
    "chooseUnit-cpu-arguments": CanBeUInteger,
    "chooseUnit-memory-arguments": CanBeUInteger,
    "consByteString-cpu-arguments-intercept": CanBeUInteger,
    "consByteString-cpu-arguments-slope": CanBeUInteger,
    "consByteString-memory-arguments-intercept": CanBeUInteger,
    "consByteString-memory-arguments-slope": CanBeUInteger,
    "constrData-cpu-arguments": CanBeUInteger,
    "constrData-memory-arguments": CanBeUInteger,
    "decodeUtf8-cpu-arguments-intercept": CanBeUInteger,
    "decodeUtf8-cpu-arguments-slope": CanBeUInteger,
    "decodeUtf8-memory-arguments-intercept": CanBeUInteger,
    "decodeUtf8-memory-arguments-slope": CanBeUInteger,
    "divideInteger-cpu-arguments-constant": CanBeUInteger,
    "divideInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "divideInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "divideInteger-memory-arguments-intercept": CanBeUInteger,
    "divideInteger-memory-arguments-minimum": CanBeUInteger,
    "divideInteger-memory-arguments-slope": CanBeUInteger,
    "encodeUtf8-cpu-arguments-intercept": CanBeUInteger,
    "encodeUtf8-cpu-arguments-slope": CanBeUInteger,
    "encodeUtf8-memory-arguments-intercept": CanBeUInteger,
    "encodeUtf8-memory-arguments-slope": CanBeUInteger,
    "equalsByteString-cpu-arguments-constant": CanBeUInteger,
    "equalsByteString-cpu-arguments-intercept": CanBeUInteger,
    "equalsByteString-cpu-arguments-slope": CanBeUInteger,
    "equalsByteString-memory-arguments": CanBeUInteger,
    "equalsData-cpu-arguments-intercept": CanBeUInteger,
    "equalsData-cpu-arguments-slope": CanBeUInteger,
    "equalsData-memory-arguments": CanBeUInteger,
    "equalsInteger-cpu-arguments-intercept": CanBeUInteger,
    "equalsInteger-cpu-arguments-slope": CanBeUInteger,
    "equalsInteger-memory-arguments": CanBeUInteger,
    "equalsString-cpu-arguments-constant": CanBeUInteger,
    "equalsString-cpu-arguments-intercept": CanBeUInteger,
    "equalsString-cpu-arguments-slope": CanBeUInteger,
    "equalsString-memory-arguments": CanBeUInteger,
    "fstPair-cpu-arguments": CanBeUInteger,
    "fstPair-memory-arguments": CanBeUInteger,
    "headList-cpu-arguments": CanBeUInteger,
    "headList-memory-arguments": CanBeUInteger,
    "iData-cpu-arguments": CanBeUInteger,
    "iData-memory-arguments": CanBeUInteger,
    "ifThenElse-cpu-arguments": CanBeUInteger,
    "ifThenElse-memory-arguments": CanBeUInteger,
    "indexByteString-cpu-arguments": CanBeUInteger,
    "indexByteString-memory-arguments": CanBeUInteger,
    "lengthOfByteString-cpu-arguments": CanBeUInteger,
    "lengthOfByteString-memory-arguments": CanBeUInteger,
    "lessThanByteString-cpu-arguments-intercept": CanBeUInteger,
    "lessThanByteString-cpu-arguments-slope": CanBeUInteger,
    "lessThanByteString-memory-arguments": CanBeUInteger,
    "lessThanEqualsByteString-cpu-arguments-intercept": CanBeUInteger,
    "lessThanEqualsByteString-cpu-arguments-slope": CanBeUInteger,
    "lessThanEqualsByteString-memory-arguments": CanBeUInteger,
    "lessThanEqualsInteger-cpu-arguments-intercept": CanBeUInteger,
    "lessThanEqualsInteger-cpu-arguments-slope": CanBeUInteger,
    "lessThanEqualsInteger-memory-arguments": CanBeUInteger,
    "lessThanInteger-cpu-arguments-intercept": CanBeUInteger,
    "lessThanInteger-cpu-arguments-slope": CanBeUInteger,
    "lessThanInteger-memory-arguments": CanBeUInteger,
    "listData-cpu-arguments": CanBeUInteger,
    "listData-memory-arguments": CanBeUInteger,
    "mapData-cpu-arguments": CanBeUInteger,
    "mapData-memory-arguments": CanBeUInteger,
    "mkCons-cpu-arguments": CanBeUInteger,
    "mkCons-memory-arguments": CanBeUInteger,
    "mkNilData-cpu-arguments": CanBeUInteger,
    "mkNilData-memory-arguments": CanBeUInteger,
    "mkNilPairData-cpu-arguments": CanBeUInteger,
    "mkNilPairData-memory-arguments": CanBeUInteger,
    "mkPairData-cpu-arguments": CanBeUInteger,
    "mkPairData-memory-arguments": CanBeUInteger,
    "modInteger-cpu-arguments-constant": CanBeUInteger,
    "modInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "modInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "modInteger-memory-arguments-intercept": CanBeUInteger,
    "modInteger-memory-arguments-minimum": CanBeUInteger,
    "modInteger-memory-arguments-slope": CanBeUInteger,
    "multiplyInteger-cpu-arguments-intercept": CanBeUInteger,
    "multiplyInteger-cpu-arguments-slope": CanBeUInteger,
    "multiplyInteger-memory-arguments-intercept": CanBeUInteger,
    "multiplyInteger-memory-arguments-slope": CanBeUInteger,
    "nullList-cpu-arguments": CanBeUInteger,
    "nullList-memory-arguments": CanBeUInteger,
    "quotientInteger-cpu-arguments-constant": CanBeUInteger,
    "quotientInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "quotientInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "quotientInteger-memory-arguments-intercept": CanBeUInteger,
    "quotientInteger-memory-arguments-minimum": CanBeUInteger,
    "quotientInteger-memory-arguments-slope": CanBeUInteger,
    "remainderInteger-cpu-arguments-constant": CanBeUInteger,
    "remainderInteger-cpu-arguments-model-arguments-intercept": CanBeUInteger,
    "remainderInteger-cpu-arguments-model-arguments-slope": CanBeUInteger,
    "remainderInteger-memory-arguments-intercept": CanBeUInteger,
    "remainderInteger-memory-arguments-minimum": CanBeUInteger,
    "remainderInteger-memory-arguments-slope": CanBeUInteger,
    "serialiseData-cpu-arguments-intercept": CanBeUInteger,
    "serialiseData-cpu-arguments-slope": CanBeUInteger,
    "serialiseData-memory-arguments-intercept": CanBeUInteger,
    "serialiseData-memory-arguments-slope": CanBeUInteger,
    "sha2_256-cpu-arguments-intercept": CanBeUInteger,
    "sha2_256-cpu-arguments-slope": CanBeUInteger,
    "sha2_256-memory-arguments": CanBeUInteger,
    "sha3_256-cpu-arguments-intercept": CanBeUInteger,
    "sha3_256-cpu-arguments-slope": CanBeUInteger,
    "sha3_256-memory-arguments": CanBeUInteger,
    "sliceByteString-cpu-arguments-intercept": CanBeUInteger,
    "sliceByteString-cpu-arguments-slope": CanBeUInteger,
    "sliceByteString-memory-arguments-intercept": CanBeUInteger,
    "sliceByteString-memory-arguments-slope": CanBeUInteger,
    "sndPair-cpu-arguments": CanBeUInteger,
    "sndPair-memory-arguments": CanBeUInteger,
    "subtractInteger-cpu-arguments-intercept": CanBeUInteger,
    "subtractInteger-cpu-arguments-slope": CanBeUInteger,
    "subtractInteger-memory-arguments-intercept": CanBeUInteger,
    "subtractInteger-memory-arguments-slope": CanBeUInteger,
    "tailList-cpu-arguments": CanBeUInteger,
    "tailList-memory-arguments": CanBeUInteger,
    "trace-cpu-arguments": CanBeUInteger,
    "trace-memory-arguments": CanBeUInteger,
    "unBData-cpu-arguments": CanBeUInteger,
    "unBData-memory-arguments": CanBeUInteger,
    "unConstrData-cpu-arguments": CanBeUInteger,
    "unConstrData-memory-arguments": CanBeUInteger,
    "unIData-cpu-arguments": CanBeUInteger,
    "unIData-memory-arguments": CanBeUInteger,
    "unListData-cpu-arguments": CanBeUInteger,
    "unListData-memory-arguments": CanBeUInteger,
    "unMapData-cpu-arguments": CanBeUInteger,
    "unMapData-memory-arguments": CanBeUInteger,
    "verifyEcdsaSecp256k1Signature-cpu-arguments": CanBeUInteger,
    "verifyEcdsaSecp256k1Signature-memory-arguments": CanBeUInteger,
    "verifyEd25519Signature-cpu-arguments-intercept": CanBeUInteger,
    "verifyEd25519Signature-cpu-arguments-slope": CanBeUInteger,
    "verifyEd25519Signature-memory-arguments": CanBeUInteger,
    "verifySchnorrSecp256k1Signature-cpu-arguments-intercept": CanBeUInteger,
    "verifySchnorrSecp256k1Signature-cpu-arguments-slope": CanBeUInteger,
    "verifySchnorrSecp256k1Signature-memory-arguments": CanBeUInteger
}

// 177 CanBeUInteger
export type CostModelPlutusV2Array = [
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger,
    CanBeUInteger
]