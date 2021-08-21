import { Component } from '@angular/core';
import { last, take, tap } from 'rxjs/operators';

import { ApiService } from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result: any ;

  constructor(private apiService: ApiService){

  }
  ngOnInit() {
    this.apiService.getMessages().pipe(tap()).subscribe(res => {
     if( res.Humidity && res.Temperature!== undefined){
        this.result = res;
        console.log('data response', res);
      }

    });


  }
}
