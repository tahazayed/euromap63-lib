import * as fs from 'fs-extra';

export class UtilsService{

    public static async  DeleteFile(filePath: string): Promise<void>{
      await  fs.unlink(filePath).catch((reason: any) => {
        if (reason){
            // tslint:disable-next-line:no-console
            // console.log(reason);
        };
    });

    }

    public static async  WriteFile(filePath: string, content: string): Promise<boolean>{
        try{ 
        await fs.writeFile(filePath,
            content,
            {encoding:'ascii',
            flag:'w'}).then(() => {
               return false;
            }).catch((reason: any) => {
                if (reason){
                    throw new Error(reason);
                };

            });
           
        }
        catch(err)
        {
            return false;
        }
        return true;
      }
}