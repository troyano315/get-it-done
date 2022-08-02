import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(task: string) {
    if (task === '') {
      return;
    }

    this.tasks.push(new Task(task));
  }

}

class Task {

  name: string;
  isComplete: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

}
