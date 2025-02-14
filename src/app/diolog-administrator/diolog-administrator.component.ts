import { ServiceComponent } from './../service/service.component';
import { ActivityComponent } from "./../activity/activity.component"
import { AfterViewInit, Component,inject, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogTitle, MatDialogContent, MatDialogActions,
MatDialogRef, MAT_DIALOG_DATA,
MatDialog} from '@angular/material/dialog';
import { from, Subject } from 'rxjs';
@Component({
  selector: 'app-diolog-administrator',
  imports: [FormsModule, MatDialogTitle, MatDialogContent, MatDialogActions, ActivityComponent],
  templateUrl: './diolog-administrator.component.html',
  standalone: true,
  styleUrl: './diolog-administrator.component.scss'
})
export class DiologAdministratorComponent implements AfterViewInit
{
  constructor(private Service:ServiceComponent) { }
  readonly dialog_ref = inject(MatDialogRef<DiologAdministratorComponent>);

  readonly data = inject(MAT_DIALOG_DATA);
  @ViewChild(ActivityComponent) active!: ActivityComponent;
  account_number:string ="zzxc123" ;
  password_number:string ="123456" ;

  account_number_user!:string ;
  password_number_user!:string ;
  subject = new Subject<ActivityComponent>();
  active_obs = this.subject.asObservable();
 ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
   this.active.administrator();
 }
  on_not_click():void
  {
    let retirn_data = ['status','not_click'];
    this.dialog_ref.close(retirn_data);
  }

  on_loding_click(bool : boolean):void
  {

    if(bool)
    {
       if(this.account_number_user == this.account_number)
       {
         if(this.password_number_user == this.password_number)
          {
            this.on_not_click();
            alert("登入成功");
            this.active.administrator();

          }
          else
          {
            alert("密碼錯誤");
          }
       }
       else
       {
        alert("無這個管理者帳號");
       }
    }
    else
    {
      this.on_not_click();
    }
  }
}
