import { Component, OnInit } from '@angular/core';
import { getComponent } from '../../../node_modules/@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadPhotots();
  }

  private loadPhotots() {
    const myElement = document.getElementById('photo-grid');

    for (let i = 1743; i < 1751; i++) {
      const photoHtml = document.createElement('div');
      photoHtml.className = 'w3-col s4 w3-center';
      photoHtml.innerHTML =
        `
      <img src="/assets/HoodNationalForest/IMG_${i}.JPG" style="width:100%">
      `;
      myElement.appendChild(photoHtml);
    }

    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === XMLHttpRequest.DONE) {
        if (xmlHttp.status === 200) {
          document.getElementById('photo-grid');
        } else {
          console.log(`Got error ${xmlHttp.status}`);
        }
      }
    };
  }

}
