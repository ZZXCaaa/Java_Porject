
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServiceComponent
{
  User_data_ :any[] = [];
  button_click_=[false,false,false,false]
  chose_!:string
  meal_!:string
  ques_tutle_!:string
  ques_tutle_content!:string
  chick:boolean = false;

  value = new Subject<any>;


}

