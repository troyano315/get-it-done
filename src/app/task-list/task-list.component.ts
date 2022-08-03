import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from './task/task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  @Output() taskTotalUpdateEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
    this.taskTotalUpdateEvent.emit(this.tasks.length);
  }

  addTask(task: string) {
    if (task === '') {
      return;
    }

    this.tasks.push(new Task(task));
    this.taskTotalUpdateEvent.emit(this.tasks.length);
  }

}

