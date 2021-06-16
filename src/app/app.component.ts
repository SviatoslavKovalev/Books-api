import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 userName: string = ''
 response: any

 constructor(private http: HttpClient){

 }
 search(){
   this.http.get("https://cors.bridged.cc/https://api.itbook.store/1.0/search/" + this.userName)
   .subscribe((response)=>{
     this.response = response
     console.log(this.response)
   })
 }
}
