import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DinamycServiceService } from '../dinamyc-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _formBuilder: FormBuilder, private service : DinamycServiceService) { }

  ngOnInit() {
  }

}
