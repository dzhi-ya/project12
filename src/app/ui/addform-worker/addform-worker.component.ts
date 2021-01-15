import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}


  onAddWorker() {
    if ( (this.name == null) || (this.surname == null) || (this.name == '') || (this.surname == '') ) {
      alert('Не должно быть пустых полей');
    } 
    else {
      this.addWorker.emit({
        name: this.name,
        surname: this.surname,
        type: this.type,
      });
    };
  }
}