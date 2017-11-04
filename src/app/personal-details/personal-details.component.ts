import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent  {

  formPersonalDetails = new FormGroup({
    employeeEmail: new FormControl(null,
      [Validators.required, Validators.email]),
    gender: new FormControl(null,
      [Validators.required])
  });

  @Input() set form([f, name]: [FormGroup, string]) {
    f.setControl(name, this.formPersonalDetails);
  }

}
