import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/card.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();

  toggleDone() {
    this.task.done = !this.task.done;
  }

  emitDeleteTask() {
    this.deleteTask.emit(this.task.id);
  }
}
