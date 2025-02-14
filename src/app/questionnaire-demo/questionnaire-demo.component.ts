import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from '../service/service.component';
import { Router,RouterLink,RouterLinkActive ,RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-questionnaire-demo',
  imports: [FormsModule],
  templateUrl: './questionnaire-demo.component.html',
  styleUrl: './questionnaire-demo.component.scss'
})
export class QuestionnaireDemoComponent
{
  constructor(private router:Router ,private service:ServiceComponent) {}
  is_other = false;
  ques_tutle:string = "問卷標題"
  ques_tutle_content:string = "問卷說明問卷描述"
  user_data =
  [

    {
      name:null,
      phone:null,
      email:null,
      people:null,
    }
  ]
  button_click=[false,false,false,false]
  chose!:string
  meal!:string
  cons_LOG()
  {
    for(let i=0;i<this.button_click.length;i++)
    {
      console.log(this.button_click[i]);
    }
  }
  click_button(str:string,index:number)
  {
    if(index==0)
    {
      console.log(str);
      this.chose=str;
    }
    else if(index==1)
    {
      this.meal=str;
      console.log(str);
    }
  }
  question_responses ()
  {
      alert("有必選還未填");
  }

  preview(is_send_out:boolean)
  {
    for(let i=0;i<this.user_data.length;i++)
    {
      console.log(this.user_data[i]);
    }
    if(!this.user_data[0].name||!this.user_data[0].phone||!this.chose||!this.meal)
    {
      this.question_responses ();
    }
    else
    {
      if(is_send_out)
      {
        this.router.navigate(['/app-first']);
      }
    else
      {
        for(let i=0;i<this.user_data.length;i++)
        {
          this.service.User_data_.push(this.user_data[i]);
          console.log(this.service.User_data_);
        }
        for(let i=0;i<this.button_click.length;i++)
        {
          this.service.button_click_[i]=this.button_click[i];
        }
        this.service.chose_ =this.chose;
        this.service.meal_ =this.meal;
        this.service.ques_tutle_ =this.ques_tutle;
        this.service.ques_tutle_content =this.ques_tutle_content;
        this.router.navigate(['/app-test-page']);
      }
    }

    console.log("preview");
  }
  other_value()
  {
    if(this.user_data[0].people=="其他" || this.is_other)
      {
        console.log(this.user_data[0].people);
        this.is_other  = true;
      }
      else if (this.user_data[0].people=="1"||this.user_data[0].people=="2"||this.user_data[0].people=="3"||this.user_data[0].people=="4")
      {
        console.log(this.user_data[0].people);
        this.is_other  = false;
      }
  }
}
