import { Component, input } from '@angular/core';
import { ServiceComponent } from './../service/service.component';
import { ActivityComponent } from "./../activity/activity.component"
import { AfterViewInit,inject, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogTitle, MatDialogContent, MatDialogActions,
MatDialogRef, MAT_DIALOG_DATA,
MatDialog} from '@angular/material/dialog';
import { from, Subject } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {  DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
import { CommonModule } from '@angular/common';
import { ApiService } from '../Http_Severice_API/Api';
@Component({
  selector: 'app-dia-log-add-ques',
  imports: [
    FormsModule,
    MatDialogTitle,
     MatDialogContent,
     MatDialogActions,
     ActivityComponent,
     MatTabsModule,
     CommonModule,],
  templateUrl: './dia-log-add-ques.component.html',
  styleUrl: './dia-log-add-ques.component.scss'
})
export class DiaLogAddQuesComponent  implements AfterViewInit
{

  @ViewChild(ActivityComponent) active!: ActivityComponent;
   //readonly dialog_ref = inject(MatDialogRef<DiaLogAddQuesComponent>);
   //readonly data = inject(MAT_DIALOG_DATA);
   //新增資料---------------------------------------

  inputquizName:string = "";
  StartDate!:Date;
  endDate!:Date;
  minStartDate!:string;
  inputquesName:string[] = [];
  inputquesType:string[] = [];
   //j!: number;
  inputquesoption:string[] = [""];
  inputquizDesc!:string;
  inputquesId:number[] = [];
  inputquespublished:boolean[]=[false,];
  inputques:number[] = [];
  checkok!:boolean;
  inputdate  =
  {
    "name":"",
    "description":"問卷說明",
    "startDate":"2025-02-17",
    "endDate":"2025-02-20",
    "published":true,
    "questionList":
    [
        {
         "quesId":1,
         "quesName":"問題名稱1",
         "type":"Single",
         "required":true,
         "options":"",
        },
    ]
  }
  inputQuesAll=
  [
    {
      "quesIds":1,
      "quesName":"" ,
      "quespublished":false,
      "quesType": "",
      "inputquesoption":[""],
    }
  ]
  inputQuesAlldate:any = [];
  //--------------------------------------------
  tabIndex:string = "0";
  buttonName:string = "下一步";
  buttonName_1:string = "取消";
  subject = new Subject<ActivityComponent>();
  active_obs = this.subject.asObservable();
   tabs = document.querySelectorAll('.tab');
   contents = document.querySelectorAll('.tab-content');
   selectedIndex: number = 2;
   constructor( public ref: DynamicDialogRef,
                public config: DynamicDialogConfig
                ,private http:ApiService
              ,private severice:ServiceComponent){}
 ngAfterViewInit(): void
 {

 }
 ngOnInit() {
  //this.StartDate.min = new Date();
  //setTimeout(() => this.selectedIndex = 1, 100)
  //this.minStartDate = new Date().toLocaleTimeString();
  //this.severice.chick = false;
  if(new Date().getMonth()+1>=10)
  {
    this.minStartDate = new Date().getFullYear().toString()+"-"+(new Date().getMonth()+1).toString()+"-"+new Date().getDate().toString();
  }
  else
  {
    this.minStartDate = new Date().getFullYear().toString()+"-"+"0"+(new Date().getMonth()+1).toString()+"-"+new Date().getDate().toString();
  }

  //this.minStartDate = this.minStartDate.replaceAll("/", "-");
  console.log(new Date().getMonth()+1);
  console.log(this.minStartDate);
}
  on_not_click():void
  {
    let retirn_data = ['status','not_click'];
    this.ref.close();
    //this.dialog_ref.close(retirn_data);
  }

  // on_loding_click():void
  // {
    // this.ref.close({ status: 'not_click' });
  // }
  testTEXT():void
  {
    for(let i=0;i<this.inputQuesAll.length;i++)
    {
      this.inputQuesAll[i].quesName = this.inputquesName[i];
      this.inputQuesAll[i].quesType = this.inputquesType[i];
      this.inputQuesAll[i].quespublished = this.inputquespublished[i];
    }
    console.log(this.inputQuesAll);
    console.log(this.inputQuesAll);
    console.log(this.StartDate);
    console.log(this.endDate);
  }
  on_click(value:number):void
  {
    console.log(this.checkok);
    this.tabIndex = String(Number(this.tabIndex) + value);
    console.log(this.tabIndex);
    if(Number(this.tabIndex)>=2)
    {
      this.tabIndex = "2";
    }
    //this.checkPage();
    if((Number(this.tabIndex)<0))
    {
      this.on_not_click();
      return;
    }
      if(this.inputquizName === null ||this.inputquizName.trim() === ""||!this.StartDate||!this.endDate||! this.inputdate.published)
        {
          alert("確認問卷資料");
          this.tabIndex = "0";
          this.checkPage();
          return;
        }
        else
        {
          this.inputdate.name = this.inputquizName;
          this.inputdate.startDate = this.StartDate.toString();
          this.inputdate.endDate = this.endDate.toString();
          this.inputdate.published = true;
          this.inputdate.description = this.inputquizDesc;
          for(let i=0;i<this.inputQuesAll.length;i++)
            {
              this.inputdate.questionList[i].quesId = this.inputQuesAll[i].quesIds;
              this.inputdate.questionList[i].quesName = this.inputQuesAll[i].quesName;
              this.inputdate.questionList[i].type = this.inputQuesAll[i].quesType;
              this.inputdate.questionList[i].required = this.inputQuesAll[i].quespublished;
             //this.inputdate.questionList[i].options = this.inputQuesAll[i].inputquesoption;
              //console.log(this.inputQuesAll[i].inputquesoption.length);
              if(this.tabIndex == "2")
              {

                if(this.inputQuesAll[i].quesType != "Text")
                  {
                    if(!this.inputQuesAll[i].quesIds ||!this.inputQuesAll[i].quesName||!this.inputQuesAll[i].quesType)
                      {
                        alert("確認問題資料");
                        this.tabIndex = "1";
                        this.checkPage();
                        return;
                      }
                      for(let j=0;j<this.inputQuesAll[i].inputquesoption.length;j++)
                      {
                        if(this.inputQuesAll[i].inputquesoption[j].trim() === ""||this.inputQuesAll[i].inputquesoption[j].length<1||this.inputQuesAll[i].inputquesoption[j].trim() === "/^,+$/")
                        {
                          alert("確認問題資料");
                          this.tabIndex = "1";
                          this.checkPage();
                          return;
                        }
                      }
                      this.inputdate.questionList.forEach(
                        element => {
                          this.inputdate.questionList[i].options = this.inputQuesAll[i].inputquesoption+",";
                          console.log(this.inputdate.questionList[i].options);
                      });
                  }
                  else
                  {
                    this.inputdate.questionList[i].options = "";
                  }
                  console.log(this.tabIndex);
                  if(!this.inputQuesAll[i].quesIds ||!this.inputQuesAll[i].quesName||!this.inputQuesAll[i].quesType)
                    {
                      alert("確認問題資料");
                      this.tabIndex = "1";
                      this.checkPage();
                      return;
                    }
              }
              else
              {
                this.severice.chick = false;
              }
        }
        if(this.tabIndex == "2")
        {
          if( !this.severice.chick)
            {
              this.severice.chick = true;
              this.checkok = true;
              console.log(this.severice.chick);
              alert("按完成送出");
              return;
            }
        }
      }
      if (this.severice.chick)
        {
          //this.inputQuesAlldate.push(this.inputdate);
          //this.tabIndex = "2";
          this.http.postAPI("http://localhost:8080/quiz/create",this.inputdate).subscribe(
            (response:any) =>
            {

              console.log(response);
              this.severice.chick = false;

             // this.active.search_data();
              this.on_not_click();

            })
        }

    }
  on_loding_click(event:number): void
   {
    this.tabIndex = String(event);
    console.log(this.tabIndex);
    this.checkPage();
    //let nowPage:number = Number(this.tabIndex);
  }
  checkPage():void
  {
    // this.severice.chick = false;
    // this.checkok = false;
     if(Number(this.tabIndex) !=0)
    {
      this.buttonName = "下一步";
      this.buttonName_1 = "上一步";
    }
    if(Number(this.tabIndex) > 1)
      {
        this.buttonName = "完成";
        this.tabIndex = "2";
        console.log(this.tabIndex);

      }
      if(Number(this.tabIndex) == 0)
      {
        this.buttonName_1 = "取消";
        this.buttonName = "下一步";
      }
      if(Number(this.tabIndex) < 0)
      {

        this.on_not_click();
      }
    }
    Add_input_ques():void
    {
      this.inputQuesAll.push(
        {
          "quesIds":this.inputQuesAll.length+1,
          "quesName":"",
          "quesType":"",
          "quespublished":false,
          "inputquesoption":[""],
        }
      )
      this.inputdate.questionList.push(
        {
          "quesId":this.inputQuesAll.length+1,
          "quesName":"",
          "type":"",
          "required":false,
          "options":"",
        }
      )
    }
    Add_input_ques_option(value:number):void
    {
      this.inputQuesAll[value].inputquesoption.push("");
    }
    delete_input_ques_option(value:number,index:number):void
    {
      this.inputQuesAll[value].inputquesoption.splice(index,1);
    }
    delete_input_ques(value:number):void
    {

      console.log(value);
      console.log(this.inputQuesAll);
      this.inputQuesAll.splice(value,1);
      this.inputquesName.splice(value, 1);
      this.inputquesType.splice(value, 1);
      this.inputquespublished.splice(value, 1);
      //this.inputQuesAll.pop();
      for(let i=0;i<this.inputQuesAll.length;i++)
        {
          this.inputQuesAll[i].quesIds = i;
          this.inputQuesAll[i].quesName = this.inputquesName[i];
          this.inputQuesAll[i].quesType = this.inputquesType[i];
          this.inputQuesAll[i].quespublished = this.inputquespublished[i];
          console.log(this.inputQuesAll[i].quesName);
          console.log(this.inputquesName[i]);
        }

    }
  }
