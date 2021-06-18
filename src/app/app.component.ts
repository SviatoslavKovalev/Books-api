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
pageNum: number = 1
 constructor(private http: HttpClient){

 }
 search(){
   this.http.get("https://cors.bridged.cc/https://api.itbook.store/1.0/search/" + this.userName +'/' + this.pageNum)
   .subscribe((response)=>{
     this.response = response ? response : []
     console.log(this.response)
   })
 }
 addBooks(){
  this.pageNum = this.pageNum + 1
  this.http.get("https://cors.bridged.cc/https://api.itbook.store/1.0/search/" + this.userName +'/' + this.pageNum)
  .subscribe((response)=>{
    this.response.books.push(response.books)
    console.log(this.response)
  })
 }
}
