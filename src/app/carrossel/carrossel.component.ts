import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
})
export class CarrosselComponent implements OnInit {
  indexActiveImage: number = 0
  
  imageLiks: string[] = [
    '/assets/img-cr-1.jpeg',
    '/assets/img-cr-2.jpeg',
    '/assets/img-cr-3.jpeg'
  ];
  constructor() {}

  ngOnInit(): void {

  }

  public changeImage(numberImageToChange: number){
    this.indexActiveImage += numberImageToChange;
  }

  public canGoPreviously(){
    if(this.indexActiveImage == 0) return false
    return true
  }
  public canGoNext(){
    if(this.imageLiks.length-1 == this.indexActiveImage) return false
    return true
  }
}
