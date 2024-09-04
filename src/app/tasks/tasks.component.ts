import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({ required: true }) userId!:string;
@Input({ required: true }) userName!:string;
isAddingTask:boolean = false;

constructor(private tasksService: TasksService) { }

// @Input() userName:string | undefined;

get selectedUserTasks() {
  return this.tasksService.getUserTasks(this.userId);
}
  
  addTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
