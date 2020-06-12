import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  public states = Object.values(StateOrder);
  public form: FormGroup;
  @Input() initFormItem: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.initFormItem.tjmHt],
      nbJours: [this.initFormItem.nbJours],
      tva: [this.initFormItem.tva],
      state: [this.initFormItem.state],
      typePresta: [
        this.initFormItem.typePresta,
        Validators.required
      ],
      client: [
        this.initFormItem.client,
        [Validators.required, Validators.minLength(2)]
      ],
      comment: [this.initFormItem.comment],
      id: [this.initFormItem.id],
    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }

}
