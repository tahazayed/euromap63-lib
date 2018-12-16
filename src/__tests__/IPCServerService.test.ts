import { MachineConfig } from './../config/machineconfig';
import { IPCServerService } from './../services/ipcserver.service';

test('My IPCServerService', () => {
    const machineConfig: MachineConfig = new MachineConfig("machine1",'\\\\EGY-TAMIN-NB2\\temp',3,'127.0.0.1');
    const iPCServerService: IPCServerService = new IPCServerService(machineConfig);
  expect(iPCServerService.GetInfo()).toBe(machineConfig);
});