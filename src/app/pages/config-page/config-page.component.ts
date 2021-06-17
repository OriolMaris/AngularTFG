import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  constructor(private location: Location,
    private translate: TranslateService,
    ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
