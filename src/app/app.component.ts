import { Component } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';
import { IconService } from './services/icon.service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}
