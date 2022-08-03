import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}

export class Task {

  name: string;
  isComplete: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

}


