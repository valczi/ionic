import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Kirby } from 'src/app/models/kirby.model';
@Injectable({
  providedIn: 'root'
})
export class KirbyService {
  kirbyRef: AngularFirestoreCollection<Kirby>;
  private dbPath = 'kirby';



  constructor(
    private db: AngularFirestore
  ) {
    this.kirbyRef = db.collection(this.dbPath);
  }

  getAllKirbys(): any {
    return this.kirbyRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
      })))
    );
  }

  saveNewKirby(kirby: Kirby): any {
    return new Observable(obs => {
      this.kirbyRef.add({...kirby}).then(() => {
        obs.next();
      });
    });
  }


  get(id: any): any {
    return new Observable(obs => {
      this.kirbyRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(kirby: Kirby) {
    return new Observable(obs => {
      this.kirbyRef.doc(kirby.id).update(kirby);
      obs.next();
    });
  }

  deleteKirby(id: any){
    this.db.doc(`kirby/${id}`).delete();
  }

}
