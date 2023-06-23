import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  mydata: any=[]
  ngOnInit(): any {


    let data: any = localStorage.getItem('mydata');
    // alert(data)
    if(data){

      this.values = JSON.parse(data)
    }
  }
  myform: FormGroup
  displayedColumns: string[] = ['Id', 'name', 'age', 'email',];
  values: any[] = [];
  submitted: boolean = false;
  selectedItemIndex: number = -1;

  constructor(private _formBuilder: FormBuilder) {

    this.myform = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      Id: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

  }


  onSubmit() {
    this.submitted = true;

    if (this.myform.invalid) {

      Object.values(this.myform.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    else {
      console.log('Onsubmit', this.myform.value)
      if (this.myform.valid) {
      
        
        if (this.values.length > 0) {
          const temp = this.values.filter(e => e.Id == this.myform.controls['Id'].value)
          console.log(temp)
          if (temp.length > 0) {
            alert('Duplicate ID')
            this.myform.reset();
            return
          }else{
            this.values.push(this.myform.value);
            localStorage.setItem('mydata',JSON.stringify(this.values))
        console.log(this.values)
            this.myform.reset();

          }
        }else{
          this.values.push(this.myform.value);
          localStorage.setItem('mydata',JSON.stringify(this.values))
        }
  
      }
    }


  }
  removeItem(Id: number): void {
    // if(this.values.findIndex(item => item.Id == Id)){
    const i = this.values.findIndex(item => item.Id == Id)
    this.values.splice(i, 1)
    localStorage.setItem('mydata',JSON.stringify(this.values))
    // }

  }


}
