import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { Card, Task } from '../../models/card.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskComponent, MatIconModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Card;
  @Output() deleteCard = new EventEmitter<number>();
  newTaskTitle: string = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.card.tasks.push({
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        done: false,
      });
      this.newTaskTitle = '';
    }
  }

  deleteTask(taskId: number) {
    this.card.tasks = this.card.tasks.filter((task) => task.id !== taskId);
  }

  emitDeleteCard() {
    this.deleteCard.emit(this.card.id);
  }
}
