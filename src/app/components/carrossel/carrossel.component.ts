import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
})
export class CarrosselComponent implements OnInit {
  imageActiveIndex: number = 0;

  imageLinks: string[] = [
    '/assets/img-cr-1.jpeg',
    '/assets/img-cr-2.jpeg',
    '/assets/img-cr-3.jpeg',
  ];

  constructor() {}

  ngOnInit(): void {}

  changeImageIndex(num: number): void {
    this.imageActiveIndex += num;
    this.needResetCarrossel();
  }

  // canGoPreviously(): boolean{
  //   return this.imageActiveIndex !== 0
  // }

  // canGoNext(): boolean{
  //   return this.imageActiveIndex !== this.imageLinks.length - 1
  // }

  private needResetCarrossel(){
    if(this.imageActiveIndex === -1){
      this.imageActiveIndex = this.imageLinks.length - 1 
    }
    else if(this.imageActiveIndex > this.imageLinks.length -1){
      this.imageActiveIndex = 0
    }
  }
}