import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpParams} from '@angular/common/http';
import {ConfigService} from '../../share/config.service';
import C from 'crypto-js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  version: string;
  imageData: string;
  key: string;
  validateForm: FormGroup;
  @Output() checkLogin = new EventEmitter();


  constructor(private configService: ConfigService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.showVersion();
    this.getImage();
    this.getSecretKey();
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verifycode: [null, [Validators.required]]
    });
  }

  showVersion() {
    this.configService.getVersion()
      .subscribe((data: string) => this.version = data);
  }

  getImage() {
    this.configService.getImage().subscribe((data: string) => this.imageData = data);
  }

  getSecretKey() {
    this.configService.getSecretKey().subscribe((data: string) => this.key = C.enc.Base64.parse(data));
  }

  submitForm(): void {
    console.log(this.validateForm);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const loginInfo = {
      username: btoa(C.AES.encrypt(this.validateForm.value.userName, this.key, {
        mode: C.mode.ECB,
        padding: C.pad.Pkcs7
      }).toString()),
      password: btoa(C.AES.encrypt(this.validateForm.value.password, this.key, {
        mode: C.mode.ECB,
        padding: C.pad.Pkcs7
      }).toString()),
      verifycode: btoa(this.validateForm.value.verifycode)
    };
    const params = new HttpParams({
      fromObject: loginInfo
    });
    this.configService.login(params).subscribe((data) => {
      console.log(data);
      this.router.navigate(['pages/monitor/overview']);
      this.checkLogin.emit(true);
      sessionStorage.setItem('isLogin', 'true');
    });
  }

}
