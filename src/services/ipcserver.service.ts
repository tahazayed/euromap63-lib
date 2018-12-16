import { MachineConfig } from "../config/MachineConfig";
import { ApplicationLayerService } from "./applicationlayer.service";

export class IPCServerService{
    public readonly applicationLayerService: ApplicationLayerService;
    constructor(public machineConfig: MachineConfig){
        this.applicationLayerService = new ApplicationLayerService(machineConfig);
    };
    
    public GetInfo(): MachineConfig{
        return this.applicationLayerService.GetInfo();
    }   
}