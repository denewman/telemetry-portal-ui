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
  showGraph:boolean = false;
  showbtn:boolean = false;


  showTable(){
    this.show = true;
    this.showGraph = false;
  }

  showPlot(){
     this.show = false;
    this.showGraph = true;
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
    if (this.showGraph == true){
      this.showGraph = !this.showGraph;
    }
    this.showbtn = true;
    //console.log("data" + this.getData);
    //console.log("err" + this.errorMsg);
  }



}