
import { TSafeAny } from "../dto";
import { THelperArray } from "./helper-array";
// @dynamic
export class THelperObject {
    /**
      * Kiểm tra đối tượng có giá trị hay ko
      * @param value 
      * 
      */
    public static hasValue(value: any): boolean {
        return !(value === undefined || value === null);
    }
    /**
   * sao chép đối tượng
   * @param obj 
   * 
   */
    public static cloneObject(obj: any) {
        if (this.hasValue(obj)) {
            return JSON.parse(JSON.stringify(obj))
        } else {
            return obj;
        }
    }
    public static copyObject(taget:TSafeAny, source:TSafeAny) {
        taget = Object.assign(taget, source);
    }    

    public static isObject(k:TSafeAny, c:TSafeAny): boolean {
        return !!k && "object" === typeof k && (!c || !THelperArray.isArray(k))
    }

    /** Coerces a data-bound value (typically a string) to a boolean. */
    public static coerceBooleanProperty(value: any): boolean {
        return value != null && `${value}` !== 'false';
    }
    /**
     * kiểm tra đối tượng là function
     * @param fun 
     * return true/false
     */
    public static isFunction(fun: any): boolean {
        return typeof (fun) === 'function';
    }
}