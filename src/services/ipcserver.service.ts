import { MachineConfig } from "../config/MachineConfig";
import { ApplicationLayerService } from "./applicationlayer.service";

export class IPCServerService{
    public readonly applicationLayerService: ApplicationLayerService;
    constructor(public machineConfig: MachineConfig){
        this.applicationLayerService = new ApplicationLayerService(machineConfig);
    };
    
    public async GetInfo(): Promise<MachineConfig>{
        return await this.applicationLayerService.GetInfo();
    }   
}