import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  mydata:any =[]
  values:any=[]
ngOnInit(): any {
  {
    let data:any=localStorage.getItem('mydata')
    this.mydata=JSON.parse(data)
  }
}

clear(Id: any){
  const i = this.mydata.findIndex((item: any) => item.Id == Id)
    this.mydata.splice(i, 1)
  localStorage.clear();
}

remove(){
  localStorage.setItem('mydata',JSON.stringify(this.values))
}
 
}

