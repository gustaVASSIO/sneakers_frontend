import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Sneaker from 'src/app/models/sneaker.model';

@Component({
  selector: 'app-sneaker-card',
  templateUrl: './sneaker-card.component.html',
  styleUrls: ['./sneaker-card.component.scss'],
})
export class SneakerCardComponent implements OnInit {
  @Input() sneaker: Sneaker = {} as Sneaker;
  @Output() sendProductToAdd = new EventEmitter<Sneaker>;

  constructor() {}

  sendProduct(){
    this.sendProductToAdd.emit(this.sneaker)
  }

  ngOnInit(): void {}
}
