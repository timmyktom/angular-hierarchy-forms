import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  formAddress = new FormGroup({
    address1: new FormControl(null,
      [Validators.required, Validators.minLength(5)]),
    address2: new FormControl(null),
    city: new FormControl(null,
      [Validators.required, Validators.minLength(3)]),
      state: new FormControl(null,
        [Validators.required, Validators.minLength(3)])
  });

  @Input() set form([f, name]: [FormGroup, string]) {
    f.setControl(name, this.formAddress);
  }

}
