// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {

//   person = { firstName: '' };

//   email: string = '';
//   password: string = '';

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onSubmit() {
//     console.log('Email:', this.email);
//     console.log('Password:', this.password);
//   }
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {
//   formDataArray: any = [];
//   email: string = '';
//   password: string = '';
//   age: string = '';

//   onSubmit() {
//     // Create an object with the form data
//     const formData = {
//       email: this.email,
//       password: this.password,
//       age: this.age
//     };

//     // Check if the formDataArray is empty
//     if (this.formDataArray.length === 0) {
//       // Retrieve existing data from local storage (if any)
//       const existingData = JSON.parse(localStorage.getItem('formDataArray') || '[]');
//       // Merge existing data with the new form data
//       this.formDataArray = [...existingData];
//     }

//     // Push the new form data into the array
//     this.formDataArray.push(formData);

//     // Save the updated form data array to local storage
//     localStorage.setItem('formDataArray', JSON.stringify(this.formDataArray));

//     // Clear the input fields
//     this.email = '';
//     this.password = '';
//     this.age = null;

//     console.log(this.formDataArray);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//   formDataArray: any = [];
//   email: string = '';
//   password: string = '';
//   age: string = '';

//   constructor(private router: Router) {

//   }
//   ngOnInit() {
//     // Retrieve existing data from local storage (if any)
//     const existingData = JSON.parse(localStorage.getItem('formDataArray') || '[]');
//     // Merge existing data with the new form data
//     this.formDataArray = [...existingData];
//   }

//   onSubmit() {
//     this.router.navigate(['/', 'listning'])
//     // Create an object with the form data
//     const formData = {
//       email: this.email,
//       password: this.password,
//       age: this.age
//     };

//     // Push the new form data into the array
//     this.formDataArray.push(formData);

//     // Save the updated form data array to local storage
//     localStorage.setItem('formDataArray', JSON.stringify(this.formDataArray));

//     // Clear the input fields
//     this.email = '';
//     this.password = '';
//     this.age = null;

//     // console.log(this.formDataArray);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formDataArray: any = [];
  email: string = '';
  password: string = '';
  age: string = '';
  image: string | null = null; // Update this line

  constructor(private router: Router) { }

  ngOnInit() {
    const existingData = JSON.parse(localStorage.getItem('formDataArray') || '[]');
    this.formDataArray = [...existingData];
  }

  onFileChange(event: any) { // Update this function
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result as string;
      };
    }
  }

  onSubmit() {
    this.router.navigate(['/', 'listning'])
    const formData = {
      email: this.email,
      password: this.password,
      age: this.age,
      image: this.image // Update this line
    };
    this.formDataArray.push(formData);
    localStorage.setItem('formDataArray', JSON.stringify(this.formDataArray));
    this.email = '';
    this.password = '';
    this.age = '';
    this.image = null; // Update this line
  }
}
