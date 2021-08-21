import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { first, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    temp!: AngularFireList<any>;

   constructor( private db: AngularFireDatabase) { }

   /**
     * Get All tickers from firebase
     */
    getMessages(): Observable<any> {
      this.temp = this.db.list('DHT11SensorDatawithTime');
      //return this.temp.valueChanges().;
      const user$ = this.temp
  .valueChanges()
  .pipe(
    map(users => {
      const user = users[users.length-1];
      console.log(user);
      return user;
    })
  );

return user$;
    }
    // public getLastToken(): Observable<any>{
    //   return 'ss';
    //   // const ref = this.db.ref('DHT11SensorDatawithTime');
    //   // ref.orderByChild('weight').limitToLast(2).on('child_added', (snapshot: any) => {
    //   //   console.log(snapshot.key);
    //   // });
    // }

}
