
import { MachineConfig } from "../config/machineconfig";
import { PresentationLayerService } from "./presentationlayer.service";
import { UtilsService } from './utils.service';

export class ApplicationLayerService{
    private readonly presentationLayerService: PresentationLayerService;
    constructor(public machineConfig: MachineConfig){
        this.presentationLayerService = new PresentationLayerService(this.machineConfig);
    }
    public async GetInfo(): Promise<MachineConfig>{
        const outputFilePath = `"${this.machineConfig.SESSIONPATH}\\mach_00.inf"`;
        const request = this.presentationLayerService.CosntructCommand('GETINFO',
        [outputFilePath]);

        const requestFilePath = `${this.machineConfig.SESSIONPATH}\\${request.key}`;
        await UtilsService.DeleteFile(requestFilePath);

        if (await UtilsService.WriteFile(requestFilePath, request.value))
        {
             return this.machineConfig; 
        }
         

        return Promise.reject(new Error('fail'));
    }
            
}