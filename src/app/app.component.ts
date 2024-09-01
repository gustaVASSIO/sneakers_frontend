import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarshopService } from './services/carshop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SNEAKERS STORE';

  constructor(private carshopService: CarshopService) {}

  canShowTotalQuantityOfProductsInCarshop(): boolean {
    return this.carshopService.quantity !== 0;
  }

  getQuantity() {
    return this.carshopService.quantity;
  }
}
