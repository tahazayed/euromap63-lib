import { MachineConfig } from './config/machineconfig';
import { IPCServerService } from './services/ipcserver.service';


export class Euromap63Module extends IPCServerService{
    constructor(public machineConfig: MachineConfig){
        super(machineConfig);
    }
};
