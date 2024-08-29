import { Injectable } from '@angular/core';
import CarshopModel from '../models/carshop.model';
import Sneaker from '../models/sneaker.model';

@Injectable({
  providedIn: 'root',
})
export class CarshopService {
  private carshop: CarshopModel = {
    sneakers: [] as Sneaker[],
    total: 0,
  } as CarshopModel;

  addProductInCarshop(sneakerToAdd: Sneaker) {
    // verify if product exist in carshop
    const productInCarshop = this.carshop.sneakers.find(
      (sneaker) => sneaker.id === sneakerToAdd.id
    );

    // if exists increase quantity
    if (productInCarshop) {
      this.carshop.sneakers.map((sneaker) => ({
        ...sneaker,
        quantity: (sneaker.quantity += 1),
      }));
    } else {
      this.carshop.sneakers.push(sneakerToAdd);
    }
    console.log('Carrinho:', this.carshop);
  }
}
