import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.css']
})
export class NewVisitComponent implements OnInit {
  dateOfBirth: string = "";
  fileData: any;
  url: string ="http://eblank.dev1.msoft.su/api/v1/brands";


 
  myUrl: string  = 'http://eblank.dev1.msoft.su/api/v1/auth/login';
  constructor(private myHttp: HttpClient) { }

  ngOnInit() {

   
  }
}
