import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    formEmployee = new FormGroup({
      employeeName: new FormControl(null,
        [Validators.required, Validators.minLength(5)]),
      department: new FormControl(null,
        [Validators.required])
    });


    onEmployeeFormSubmit(event) {
      if(this.formEmployee.valid){
        alert("Form is Valid");
      }
      else {
        alert("Please enter the details!!!!!!!!");
      }
    }

    onReset(event) {
      this.formEmployee.reset();
    }
}
