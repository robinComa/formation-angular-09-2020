import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    {
      path: ['/'],
      label: 'Home',
      exact: true,
    },
    {
      path: ['animals'],
      label: 'Animaux',
      exact: false,
    },
  ];

  constructor(private translateService: TranslateService) {}

  setLang(lang: string): void {
    this.translateService.use(lang);
  }
}
