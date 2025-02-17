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
  // readonly dialog_ref = inject(MatDialogRef<DiaLogAddQuesComponent>);
  // readonly data = inject(MAT_DIALOG_DATA);
  inputquizName!:string;
  inputquizDesc!:string;
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
  on_click():void
  {

  }
  on_loding_click(bool: boolean): void {
    if (!bool)
    {
      this.on_not_click();
    }
  }
}
