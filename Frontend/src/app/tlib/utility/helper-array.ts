import { TSafeAny } from "../dto";

// @dynamic
export class THelperArray {
    public static joinNumber(arr: Array<number>): string {
        if(this.hasListValue(arr)) {
            return arr.join(",");
        }
        return "";
    }
    public static joinString(arr: Array<string>): string {
        if(this.hasListValue(arr)) {
            return arr.join("],[");
        }
        return "";
    }
    public static hasListValue(value: any): boolean {
        return !(value === undefined || value === null || value.length == 0);
    }
    public static isArray(a:TSafeAny) {
        a = Object.prototype.toString.call(a);
        return "[object Array]" === a || "[object Array Iterator]" === a
    }
    public static arrayMin(a:TSafeAny) {
        for (var c = a.length, k = a[0]; c--;) a[c] < k && (k = a[c]);
        return k;
    }
    public static arrayMax(a:TSafeAny) {
        for (var c = a.length, k = a[0]; c--;) a[c] > k && (k = a[c]);
        return k;
    }
    /**
     * gộp mảng 2 vào mảng 1
     * @param array1 
     * @param array2 
     */
    public static concat(array1:Array<TSafeAny>, array2:Array<TSafeAny>) {
        array1.push.apply(array1, array2)
    }
}