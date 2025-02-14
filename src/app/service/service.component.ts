
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceComponent
{
  User_data_ :any[] = [];
  button_click_=[false,false,false,false]
  chose_!:string
  meal_!:string
  ques_tutle_!:string
  ques_tutle_content!:string
}
