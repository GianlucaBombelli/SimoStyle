import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosello-recensioni',
  templateUrl: './carosello-recensioni.component.html',
  styleUrls: ['./carosello-recensioni.component.css']
})
export class CaroselloRecensioniComponent implements OnInit {
  activeIndex = 0;
  slides = [
    { img: 'assets/recensioni/card1.png', text: 'testo descrittivo recensione negozio 1', alt: 'image not load' },
    { img: 'assets/recensioni/card2.png', text: 'testo descrittivo recensione negozio 2', alt: 'image not load' },
    { img: 'assets/recensioni/card3.png', text: 'testo descrittivo recensione negozio 3', alt: 'image not load' },
    { img: 'assets/recensioni/card4.png', text: 'testo descrittivo recensione negozio 3', alt: 'image not load' },
  ];

  prevSlide() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.slides.length - 1;
    } else {
      this.activeIndex--;
    }
  }

  nextSlide() {
    if (this.activeIndex === this.slides.length - 1) {
      this.activeIndex = 0;
    } else {
      this.activeIndex++;
    }
  }

  slideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  constructor() { }

  ngOnInit() {
    this.slideShow();
  }

}
