// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-listning',
//   templateUrl: './listning.component.html',
//   styleUrls: ['./listning.component.css']
// })
// export class ListningComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listning',
  templateUrl: './listning.component.html',
  styleUrls: ['./listning.component.css']
})
export class ListningComponent implements OnInit {
  formDataArray: any = [];


  constructor() { }

  ngOnInit() {
    this.formDataArray = JSON.parse(localStorage.getItem('formDataArray') || '[]');
  }

  onDelete(dataItem: any) {
    const index = this.formDataArray.indexOf(dataItem);
    if (index !== -1) {
      this.formDataArray.splice(index, 1);
      localStorage.setItem('formDataArray', JSON.stringify(this.formDataArray));
      console.log(this.formDataArray);

    }
  }
}


