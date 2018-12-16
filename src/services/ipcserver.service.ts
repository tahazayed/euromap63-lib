import { EuroMap63Config } from "../config/eurpmap63config";
import { IPCEncoderService } from "./ipcencoder.service";

export class IPCServerService{
    constructor(private readonly ipcEncoder: IPCEncoderService,
                public euroMap63Config: EuroMap63Config){};
}