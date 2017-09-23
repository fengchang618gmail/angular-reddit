import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(title);
    console.log(link);
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
