import { Component, OnInit } from '@angular/core';
import { BoredService } from '../common/bored.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent implements OnInit {

  activity: any;
  activForm: any;

  constructor(private service: BoredService, private fb: FormBuilder) { }

  ngOnInit() {
    this.service.getActivity().subscribe(res => {
      console.log(res);
      this.activity = res;
    });

    this.activForm = this.fb.group({
      activity: [''],
      accessibility: [''],
      type: [''],
      participants: [''],
      price: [''],
      key: ['']
    });
  }

  updateAll() {
    this.activForm.patchValue({
      activity: this.activity.activity,
      accessibility: this.activity.accessibility,
      type: this.activity.type,
      participants: this.activity.participants,
      price: this.activity.price,
      key: this.activity.key
    });
  }

  loadNewActivity() {
    this.service.getActivity().subscribe(res => {
      console.log(res);
      this.activity = res;
    });
    this.updateAll();
  }

  onSubmit(f) {
    console.log(f);
  }

}
