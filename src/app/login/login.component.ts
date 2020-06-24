import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenChar} from '../shared/validators/forbiddenChar.validator';
import {UserService} from '../users/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;
  isSubmitted = false;

  constructor(private builder: FormBuilder, private userService: UserService, private router: Router) {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ], [this.userService._checkEmail.bind(this.userService)]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.myForm = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.isSubmitted = true;
    console.info(this.myForm);
    if (this.myForm.valid) {
      this.router.navigate(['/users']);
    }
  }

}
