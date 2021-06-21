import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { selectedAnimal } from './state/animal.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'weAdop';

  selectedAnimal$ = this.store.pipe(select(selectedAnimal));

  constructor(private translate: TranslateService, private store: Store) {

    translate.setDefaultLang('cat');
    this.translate.setDefaultLang('cat');
    this.translate.use('cat');
  }

  ngOnInit(){
    this.translate.setDefaultLang('cat');
  }
}
