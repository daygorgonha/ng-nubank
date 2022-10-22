import { Component, ElementRef, ViewChild } from '@angular/core';
import  KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/keen-slider/keen-slider.min.css'
  ]
})
export class AppComponent {
  title = 'ng-nubank';

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>

  slider?: KeenSliderInstance

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.5,
        spacing: 14
      }
    })
  }


}
