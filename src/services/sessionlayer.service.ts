import { MachineConfig } from "../config/machineconfig";

export class SessionLayerService{
private sessionNumber: number = -1;
     constructor(public machineConfig: MachineConfig){

    }
    public IncrementSessionNumber(): void{
        if(this.sessionNumber<this.machineConfig.MAXSESSIONS-1)
        {
            this.sessionNumber++;
        }
        else
        {
            this.sessionNumber = 0;
        }
    }
    public GetSessionNumber(): number{
        return this.sessionNumber;
    }
    
    public GetSessionCommandIdentifier(): string{
        return this.PadNumberWithZeros(this.sessionNumber, 8);
    }

    public GetSessionFileName(): string{

        return `SESS${this.PadNumberWithZeros(this.sessionNumber, 4)}.REQ`;
    }
    private PadNumberWithZeros(num: number,size: number): string{
        let s = num + "";
        while (s.length < size) { 
            s = "0" + s; 
        }
        return s;
    }

}