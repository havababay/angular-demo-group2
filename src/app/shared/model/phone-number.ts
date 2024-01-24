import { PhoneType } from "./phone-type";

export class PhoneNumber {
    constructor(
        public data : string,
        public type : PhoneType
    ){}
}