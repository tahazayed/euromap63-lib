import { Constants } from "../common/constants";
import { MachineConfig } from "../config/machineconfig";
import { IKeyValuePair } from './../common/keypairvalue.interface';
import { SessionLayerService } from './sessionlayer.service';

export class PresentationLayerService{
    private readonly sessionLayerService: SessionLayerService;
    constructor(public machineConfig: MachineConfig){
        this.sessionLayerService = new SessionLayerService(this.machineConfig);
    }

    public CosntructCommand(commandName: string,
        params: string[]): IKeyValuePair {
            this.sessionLayerService.IncrementSessionNumber();
            let command = this.sessionLayerService.GetSessionCommandIdentifier();
            command += Constants.Space;
            command += commandName;
            command += Constants.Space;
            if(params.length > 0){
                command += params.join(Constants.LD);
            }
            command += Constants.EOC;
            command += Constants.CR;

        return {
            key: 
            this.sessionLayerService.GetSessionFileName(),
            value: command
        };
    }
}