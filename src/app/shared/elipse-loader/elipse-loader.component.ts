import { Component, Input, OnInit } from '@angular/core';
import { Elipse } from './elipse.interface';

@Component({
  selector: 'app-elipse-loader',
  templateUrl: './elipse-loader.component.html',
  styleUrls: ['./elipse-loader.component.css']
})
export class ElipseLoaderComponent implements OnInit {
  @Input() loaderText!: string;
  elipses: Elipse[] = [
    {id: 'elipse-1'},
    {id: 'elipse-2'},
    {id: 'elipse-3'}
  ];
  currentElipseIndex: number = 0
  currentElipse: Elipse = this.elipses[this.currentElipseIndex];

  constructor() { }

  ngOnInit(): void {
    this.animateElipses();
  }

  animateElipses() {
    setInterval(() => {
      if (this.currentElipseIndex > this.elipses.length -1){
        this.currentElipseIndex = 0;
      }
      this.currentElipse = this.elipses[this.currentElipseIndex];
      this.currentElipseIndex++;
    }, 300)
  }

}
