import { MachineConfig } from './../config/machineconfig';
import { IPCServerService } from './../services/ipcserver.service';

test('My IPCServerService', async () => {
    const machineConfig: MachineConfig = new MachineConfig("machine1",'\\\\EGY-TAMIN-NB2\\temp',3,'127.0.0.1');
    const iPCServerService: IPCServerService = new IPCServerService(machineConfig);
    const p = await iPCServerService.GetInfo();
  expect(p).toBe(machineConfig);
});