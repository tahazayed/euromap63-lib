
import { IPCEncoderService } from './services/ipcencoder.service';

import { EuroMap63Config } from './config/eurpmap63config';
import { IPCServerService } from './services/ipcserver.service';

export class Euromap63Module extends IPCServerService{
    constructor(public euroMap63Config: EuroMap63Config){
        super(new IPCEncoderService(),
              euroMap63Config);
        
    }
};
