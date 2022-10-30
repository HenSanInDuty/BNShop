import { environment } from "src/environments/environment";

export class THelperLog {
    public static SYS(app: string, msg: string): void {
        if(environment.showLogSystem == true) {
            console.log(app + ": " + msg);
        }
    }

    public static COMP(compentName: string, msg: string): void {
        if(environment.showLogComponent == true) {
            console.log(compentName + ": " + msg);
        }
    }
}