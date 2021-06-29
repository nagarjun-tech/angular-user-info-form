import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.scss']
})
export class UserInfoFormComponent implements OnInit {


  public userFormGroup: FormGroup;
  public randomValue = ""
  public submittedDate: Date | null = null;

  constructor() { 
    this.userFormGroup = new FormGroup({
      firstName : new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      address: new FormControl(""),
      address2: new FormControl(""),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      zipCode: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{5}')]
        ))
    })
  }

  ngOnInit(): void {}

  onSubmitData(){
    this.randomValue = Math.random().toString(36).slice(2);
    this.submittedDate = new Date();
  }

  get firstNameControl(){
    return this.userFormGroup?.get("firstName")
  }

  get lastNameControl(){
    return this.userFormGroup?.get("lastName")
  }

  get addressControl(){
    return this.userFormGroup?.get("address")
  }

  get address2Control(){
    return this.userFormGroup?.get("address2")
  }

  get cityControl(){
    return this.userFormGroup?.get("city")
  }

  get stateNameControl(){
    return this.userFormGroup?.get("state")
  }

  get zipCodeControl(){
    return this.userFormGroup?.get("zipCode")
  }



}
