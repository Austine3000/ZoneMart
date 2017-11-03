import * as types from './type';


export function saveRecord(results) {
    return { type: types.RECORD_RESULT, results};
}