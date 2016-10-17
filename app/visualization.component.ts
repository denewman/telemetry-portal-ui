import { Component,Output, ViewChild, EventEmitter} from '@angular/core';
import {HttpService} from './http.service';


@Component({
  selector: 'visualization',
  templateUrl: '../templates/visualization.component.tpl.html',
  styleUrls: ['../css/visualization.component.css'],
  providers: [HttpService]
})
export class VisualizationComponent { 
  getData:string;
  postData:string;
  constructor(private httpService:HttpService){}
  errorMsg:string;
  image:string;
  show: boolean = false;


  onTestGet(){
    this.show = !this.show;

    this.httpService.dataVisualization()
       .subscribe(
        data=>this.image = JSON.stringify(data),
        error=>this.errorMsg = error,
        ()=>console.log("done")
    );
    //console.log("data" + this.getData);
    //console.log("err" + this.errorMsg);
  }

  submit(queryName: string) {
    if (!queryName) { return; }
    this.httpService.addQuery(queryName)
      .subscribe(
        data=>this.getData=JSON.stringify(data),
        error=>this.errorMsg = error,
        ()=>console.log("done")
            );

    if (this.show == true){
      this.show = !this.show;
    }
    //console.log("data" + this.getData);
    //console.log("err" + this.errorMsg);
  }



}