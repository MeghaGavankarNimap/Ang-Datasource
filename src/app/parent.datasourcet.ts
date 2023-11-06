import { BaseDatasource } from "./base.datasource";
import { UserService } from "./user.service";

export class parentDatasource extends  BaseDatasource{
    constructor(private service:UserService){
        super();
    }

    getData(){
      this.service.showData().subscribe((res:any)=>{
        console.log(res)
        this.entitySubject.next(res)
      })

    }

}