import { Component } from '@angular/core';
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
@Component({
  selector: 'app-dia-log-add-ques',
  imports: [
    FormsModule,
    MatDialogTitle,
     MatDialogContent,
     MatDialogActions,
     ActivityComponent,
     MatTabsModule,
     CommonModule],
  templateUrl: './dia-log-add-ques.component.html',
  styleUrl: './dia-log-add-ques.component.scss'
})
export class DiaLogAddQuesComponent implements AfterViewInit
{

  @ViewChild(ActivityComponent) active!: ActivityComponent;
   //readonly dialog_ref = inject(MatDialogRef<DiaLogAddQuesComponent>);
   //readonly data = inject(MAT_DIALOG_DATA);
  inputquizName!:string;
  inputquizDesc!:string;
  tabIndex:string = "0";
  buttonName:string = "下一步";
  buttonName_1:string = "取消";
  subject = new Subject<ActivityComponent>();
  active_obs = this.subject.asObservable();
   tabs = document.querySelectorAll('.tab');
   contents = document.querySelectorAll('.tab-content');
   selectedIndex: number = 2;
   constructor( public ref: DynamicDialogRef,
                public config: DynamicDialogConfig){}
 ngAfterViewInit(): void
 {

 }
 ngOnInit() {
  setTimeout(() => this.selectedIndex = 1, 100)
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
    console.log(this.inputquizName);
    console.log(this.inputquizDesc);
  }
  on_click(value:number):void
  {
    this.tabIndex = String(Number(this.tabIndex) + value);
    console.log(this.tabIndex);
    this.checkPage();
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
      }
      if(Number(this.tabIndex) < 0)
      {

        this.on_not_click();
      }
    }
  }
