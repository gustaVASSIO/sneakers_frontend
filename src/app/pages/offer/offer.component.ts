import { Component, OnInit } from '@angular/core';
import { sneakers } from 'src/app/data/sneakers.data';
import Sneaker from 'src/app/models/sneaker.model';
import { CarshopService } from 'src/app/services/carshop.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  sneakers: Sneaker[] = sneakers;

  constructor(
    private carshopService: CarshopService
  ) { }

  ngOnInit(): void {}
  
  addProductInCarshop(sneaker: Sneaker){
    this.carshopService.addProductInCarshop(sneaker);
  }

}
