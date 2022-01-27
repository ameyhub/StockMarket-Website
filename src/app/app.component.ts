import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockMarketWebside';
  logoImage: string ="assets/images/logo.png"
  homeBackground: string="assets/images/homeBackground.jpg"
  homeBackgroundImage: string="assets/images/homeBackgroundimage.jpg"
  homeabout1: string="assets/images/homeabout1.jpg";
  homeabout2: string="assets/images/homeabout2.jpg";
}
