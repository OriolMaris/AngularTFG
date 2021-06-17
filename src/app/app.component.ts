import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { selectedAnimal } from './state/animal.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'weAdop';

  selectedAnimal$ = this.store.pipe(select(selectedAnimal));

  constructor(private translate: TranslateService, private store: Store) {

    translate.setDefaultLang('en');
  }
}
