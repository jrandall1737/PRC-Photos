import { Component, OnInit } from '@angular/core';
import { getComponent } from '../../../node_modules/@angular/core/src/linker/component_factory_resolver';

const numPhotos = 17;
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
    let myElement = document.getElementById('photo-grid');

    for (let i = 0; i < numPhotos; i++) {
      myElement = document.getElementById(`col-${i % 3}`);
      myElement.innerHTML +=
          `<img src="assets/HoodNationalForest/IMG_${i}.JPG" style="width:100%">`;
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
