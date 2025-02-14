import { Component } from '@angular/core';
import { Router,RouterLink,RouterLinkActive ,RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent
{
  constructor(private router:Router){}
  open_Papage(page_Number:number):void
  {
    //跳轉頁面
    switch(page_Number)
    {
      case 1:
        this.router.navigate(["/app-activity"]);
        break;
      case 2:
        this.router.navigate(["/app-initiate"]);
        break;
      case 3:
        this.router.navigate(["/app-feedback"]);
        break;

        default:
          break;
     }
  }
}
