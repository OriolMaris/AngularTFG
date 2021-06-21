import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(

    private location: Location, 

  ) { }

  ngOnInit(): void {
    console.log('entro2 ')

  }

  goBack() {
    this.location.back()
  }

}
