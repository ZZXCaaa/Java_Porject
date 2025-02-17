import { Component, inject } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DiologAdministratorComponent } from '../diolog-administrator/diolog-administrator.component';
import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Http_Severice_API/Api';
import { DiaLogAddQuesComponent } from '../dia-log-add-ques/dia-log-add-ques.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-activity',
  standalone: true,
  imports:
  [
    MatTableModule,
    MatPaginatorModule ,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgClass,
  ],
  providers: [DialogService],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',

})
export class ActivityComponent
{

  constructor(private router:Router ,private http:ApiService,public dialogService: DialogService){ };
  readonly dialog  =inject(MatDialog);
  administrator_str :string = "會員";
  administrator_bool :boolean = false;
  number_track :number = 0;
  sc_name !:string
  ref: DynamicDialogRef | undefined;
  mouse_enter_bool :boolean = false;
  activeData =
  [
    {
      pos : '高雄鳳山',
      name : '釣魚',
      state: '進行中',
      date : '2024/5/10',
    },
  ]
  for_src =
  [
    {
      pos : '高雄鳳山',
      name : '釣魚',
      date : '2024/5/10',
      state: '進行中',
    },
  ];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.for_activeData(0);
    this.http.getApi("http://localhost:8080/quiz/get_all_quiz").subscribe(
    (res:any)=>{console.log(res)});
  }

  for_activeData(for_number: number)
  {
    this.for_src = [];

    this.activeData = [];
    let activeData_for =
    [
      {
        pos : '高雄鳳山',
        name : '釣魚',
        date : '2024/5/10',
        state: '進行中',
      },
      {
        pos : '嘉義民雄',
        name : '遊樂園',
        date : '2024/5/11',
        state: '已結束',
      },
      {
        pos : '嘉義市',
        name : '爬山',
        date : '2024/5/12',
        state: '進行中',
      },
      {
        pos : '高雄燕巢',
        name : '開車',
        date : '2024/5/13',
        state: '進行中',
      },
      {
        pos : '嘉義青埔',
        name : '開車',
        date : '2024/5/14',
        state: '進行中',
      },
      {
        pos : '高雄左營',
        name : '開車',
        date : '2024/5/15',
        state: '已結束',
      },
      {
        pos : '嘉義民雄',
        name : '開車',
        date : '2024/5/16',
        state: '已結束',
      },
      {
        pos : '嘉義民雄',
        name : '開車',
        date : '2024/5/17',
        state: '已結束',
      },
      {
        pos : '嘉義民雄',
        name : '開車',
        date : '2024/5/18',
        state: '已結束',
      },
    ];
    this.number_track = this.number_track+for_number;
    if(this.number_track+5 >=activeData_for.length)
    {
      this.number_track = activeData_for.length-5;
      console.log("over");
    }
    else if(this.number_track <0)
    {
      this.number_track = 0;
      console.log("no");
    }
        for(let i =this.number_track ; i < activeData_for.length; i++)
        {
          if(!this.sc_name&&this.activeData.length<5)
          {
            this.activeData.push(activeData_for[i]);
            console.log(this.sc_name);
          }
          else
          {

            if(activeData_for[i].date.indexOf(this.sc_name)!=-1 || activeData_for[i].name.indexOf(this.sc_name)!=-1||activeData_for[i].pos.indexOf(this.sc_name)!=-1 )
            {
              if( this.activeData.length<5)
              {
                console.log(this.sc_name);
                this.for_src.push(activeData_for[i]);
                console.log( this.for_src);
              }
            }
          }
        }
        if(this.sc_name)
        {
          for(let j =this.number_track ;j< this.for_src.length && this.activeData.length<5 ; j++)
            {
              this.activeData.push(this.for_src[j]);
            }
        }
  }
  //判定是否過期(尚未實現)
  data_over(data :any)
  {

  }
  //跳轉假資料
  meun_button_click(data :any)
  {
    console.log(data);
      if(data.state=="進行中" && !this.administrator_bool)
      {
        this.router.navigate(["/app-questionnaire-demo"]);
      }
  }
  //NG_class
  meun_button_class()
  {
    if(!this.administrator_bool)
    {
      if(this.mouse_enter_bool)
        {
          return "test";
        }
        else
        {
          return "test_2";
        }
    }
    else
    {
      return "test_3";
    }

  }
  //判斷是否進行中
  mouse_enter(data :any)
  {
    console.log(data);
    if(data.state=="進行中")
    {
      this.mouse_enter_bool = true;
    }
    else
    {
      this.mouse_enter_bool = false;
    }
    if(this.administrator_bool)
    {
      console.log(data);
    }
  }
  administrator()
  {
    this.administrator_str = "管理者";
    this.administrator_bool = true;
    console.log("zzzzzzzz");

  }
  showDialog(dioLogChose:number)
  {

    switch(dioLogChose)
    {
      case 1:
        const dialogRef = this.dialog.open(DiologAdministratorComponent,{data:{name:"administrator" ,animate:"animate"},width:"500px",height:"300px"});
        dialogRef.afterClosed().subscribe(result =>this.administrator());
        break;
      case 2:
       // this.dialogService.open(DiaLogAddQuesComponent, { header: 'Select a Product'});
        this.ref = this.dialogService.open(DiaLogAddQuesComponent, {data:{name:"administrator" ,animate:"animate"}});
        //this.dialog.open(DiaLogAddQuesComponent);
        //const dialogAddQues = this.dialog.open(DiaLogAddQuesComponent,{data:{name:"administrator" ,animate:"animate"},width:"500px",height:"500px"});
        //dialogAddQues.afterClosed().subscribe();
        break;
    }

  }
  sign_out()
  {
    this.administrator_str = "會員";
    this.administrator_bool = false;
  }
  delata_data()
  {

  }
  click_tool_bar()
  {
    let sethight = document.getElementById("option_main") as HTMLElement;
    sethight.style.height = "200px";
  }
}
