import { Component } from '@angular/core';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent
{
  tutorial_! : string;
  tutle_content! : string;
  user_data:any =
   [
   {
    name:null,
    phone:null,
    email:null,
    people:null,
   }
  ];
  chose_! : string;
  button_click_ =[false,false,false,false];
  meal_! : string;
  constructor(private service: ServiceComponent) { }
   ngOnInit(): void
   {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

      console.log(this.service.ques_tutle_);
      console.log(this.service.ques_tutle_content);
      console.log(this.service.User_data_);
      console.log(this.service.chose_);
      console.log(this.service.button_click_);
      console.log(this.service.meal_);



    this.tutorial_ = this.service.ques_tutle_;
    this.tutle_content = this.service.ques_tutle_content;
    for (let i = 0; i < this.service.User_data_.length; i++)
    {

      this.user_data[i] = this.service.User_data_[i];
      console.log(this.user_data[i]);
    }
    this.chose_ = this.service.chose_;
    for (let i = 0; i < this.service.button_click_.length; i++)
    {
      this.button_click_[i] = this.service.button_click_[i];
    }
    this.meal_ = this.service.meal_;
    for (let i = 0; i < this.service.User_data_.length; i++)
    {

    }

  }


}
