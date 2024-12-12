import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['../styles.css']
})
export class ResumenComponent implements OnInit {

  persona: any = null;

  constructor(private location: Location) { }

  ngOnInit(): void {
    const navigation = this.location.getState() as { persona: any };
    this.persona = navigation?.persona || null;
  }
}
