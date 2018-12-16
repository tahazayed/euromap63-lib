import * as fs from 'fs';
import { MachineConfig } from "../config/machineconfig";
import { PresentationLayerService } from "./presentationlayer.service";

export class ApplicationLayerService{
    private readonly presentationLayerService: PresentationLayerService;
    constructor(public machineConfig: MachineConfig){
        this.presentationLayerService = new PresentationLayerService(this.machineConfig);
    }
    public GetInfo(): MachineConfig{
        const request = this.presentationLayerService.CosntructCommand('GETINFO',
        [`${this.machineConfig.SESSIONPATH}\\mach_00.inf`]);

        fs.writeFileSync(request.key,
            request.value,
            {encoding:'ascii',
            flag:'wx'});

        return this.machineConfig;
    }
}