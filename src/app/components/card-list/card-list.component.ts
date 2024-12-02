import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, MatIconModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  cards: Card[] = [];
  newCardTitle: string = '';

  addCard() {
    if (this.newCardTitle.trim()) {
      this.cards.push({
        id: Date.now(),
        title: this.newCardTitle.trim(),
        tasks: [],
      });
      this.newCardTitle = '';
    }
  }

  deleteCard(cardId: number) {
    this.cards = this.cards.filter((card) => card.id !== cardId);
  }
}
