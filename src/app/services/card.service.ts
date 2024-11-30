import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cards: Card[] = [];
  private cardsSubject = new BehaviorSubject<Card[]>(this.cards);

  getCards() {
    return this.cardsSubject.asObservable();
  }

  createCard(title: string) {
    const newCard: Card = { id: Date.now(), title, tasks: [] };
    this.cards.push(newCard);
    this.cardsSubject.next(this.cards);
  }

  deleteCard(id: number) {
    this.cards = this.cards.filter((card) => card.id !== id);
    this.cardsSubject.next(this.cards);
  }

  addTask(cardId: number, taskTitle: string) {
    this.cards = this.cards.map((card) =>
      card.id === cardId
        ? { ...card, tasks: [...card.tasks, { id: Date.now(), title: taskTitle, done: false }] }
        : card
    );
    this.cardsSubject.next(this.cards);
  }
}
