import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  canShowCarrossel: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.canBrandShowCarrossel()
  }

  private canBrandShowCarrossel() {
    // Consulta os meses de promoção para exibir o carrossel
    this.canShowCarrossel = this.randomBoolean();
  }

  private randomBoolean() {
    // return Math.random() >= 0.5;
    return true;
  }
}
