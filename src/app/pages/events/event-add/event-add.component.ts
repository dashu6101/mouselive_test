import { Utils } from './../../../_helpers/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromEvents from '../../../core/reducers';
import * as event from '../../../core/actions/event';
import { Event, EvenModel } from '../../../models/event';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  eventForm: FormGroup;
  submitted = false;
  constructor(private store: Store<fromEvents.EventsState>,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      address: [null, Validators.required],
      photo: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  get f() { return this.eventForm.controls; }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.eventForm.value.photo = reader.result as string;
        this.eventForm.patchValue({
          photo: reader.result
        });

      };
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.eventForm);
    let even = new EvenModel();
    even.id = Utils.newGuid();
    even.name = this.eventForm.value.name;
    even.address = this.eventForm.value.address;
    even.date = this.eventForm.value.date;
    even.photo = this.eventForm.value.photo;
    // let even = {
    //   id : 1,
    //   name : this.eventForm.get("eventName").value,
    //   address : this.eventForm.get("address").value,
    //   date : this.eventForm.get("date").value
    // };
    console.log("new");
    console.log(this.f.name.errors);
    if (this.eventForm.status == "VALID") {
      this.store.dispatch(new event.AddEvent(even));
    }
  }


}
