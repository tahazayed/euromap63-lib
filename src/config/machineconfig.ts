export class MachineConfig {
    constructor(public NAME: string,
                public SESSIONPATH: string,
                public MAXSESSIONS: number = 3,
                public IPADDRESS: string){};
    }