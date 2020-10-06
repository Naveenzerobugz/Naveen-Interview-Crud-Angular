import { Component, OnInit ,ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
export interface FormObject {
  name: string;
  email: string;
  phone: string;
  seats: string;
 // attendee: string;
}
@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  model: FormObject;
  validatingForm: FormGroup;
  @ViewChild('MyForm', { static: false }) MyForm: NgForm;
  eventnumber:number=0;
  avaseats:number=0;
  imagepath:any='./assets/images/download.png';
  seats:number[]=[1,2,3,4,5,6]

  demo=[1,2,3,4]
  // attendee:number[]=[1,2,3,4]

  count='10';
  
  array = [{id: 1}, {id: 2},{id: 3}]
  constructor() { 
    this.model = ({} as FormObject);
  }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      txtname: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      txtemail:new FormControl(null,(Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'))),
      txtmobile:new FormControl(null,(Validators.required,Validators.maxLength(10),Validators.minLength(10))),

    });
  }
datavalue=[];
  onChange(deviceValue) {
    this.datavalue=[];
    console.log(deviceValue);
  //  alert(deviceValue)
    for (let index = 0; index < deviceValue-1; index++) {
     this.datavalue.push(index)
      
    }
}

submitForm() {
  console.log(this.MyForm.form.valid);
  this.MyForm.form.markAllAsTouched();
}

updateUser(formData){
  console.log("Form Value",formData.value); //here iam logged form value
}
get input() { return this.validatingForm.get('txtname'); }
//txtemail
get inputemail() { return this.validatingForm.get('txtemail'); }

//inputmobile

get inputmobile() { return this.validatingForm.get('txtmobile'); }
omit_number(event) {
  var key;
  key = event.charCode;  //         key = event.keyCode;  (Both can be used)
  return ((key > 47 && key < 58) || key == 45 || key == 46);
}
}
