import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Toggle grid padding
  public myFunction() {
    const x = document.getElementById('myGrid');
    if (x.className === 'w3-row') {
      x.className = 'w3-row-padding';
    } else {
      x.className = x.className.replace('w3-row-padding', 'w3-row');
    }
  }

  // Open and close sidebar
  public w3_open() {
    // document.getElementById('mySidebar').style.width = '25%';
    document.getElementById('mySidebar').style.display = 'block';
  }

  public w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
  }

}
