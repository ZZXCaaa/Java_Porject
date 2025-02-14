import { Component } from '@angular/core';
import { Router,RouterLink,RouterLinkActive ,RouterOutlet} from "@angular/router";
import { delay } from 'rxjs';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent
{
  //=========定義import===================
  constructor(private router:Router){}
  pages:number = 4;
  //=======登入=============(還未連接資料庫)
  async longin()
  {
    console.log("登入成功");

    setTimeout(() =>
      {this.go()}, 1000);
  }
  go ()
  {
    this.router.navigate(["/app-main-page"]);
  }
}
