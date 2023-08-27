import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent {
  // Define three string variables
  title : string = 'News'
  partnerName1: string = 'conversational learning ipsum dolar';
  partnerName2: string = 'dolor sit amet, consectetur adipisicing elit';
  partnerLink: string = 'Read more';
}