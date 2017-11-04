import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.scss']
})
export class EmergencyDetailsComponent {

  formEmergencyDetails = new FormGroup({
    emergencyName: new FormControl(null,
      [Validators.required, Validators.minLength(5)]),
    emergencyPhone: new FormControl(null,
      [Validators.required])
  });

  @Input() set form([f, name]: [FormGroup, string]) {
    f.setControl(name, this.formEmergencyDetails);
  }

}
