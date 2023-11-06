import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";

export class BaseDatasource implements DataSource<any>{
    entitySubject=new BehaviorSubject<any[]>([])

    connect(collectionViewer: CollectionViewer): Observable<readonly any[]> {
        return this.entitySubject.asObservable();

       
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.entitySubject.complete();
        
    }

}





