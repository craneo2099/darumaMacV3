webpackJsonp([10],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_password_validator_password_validator__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_login_inicio_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegistroPage = (function () {
    function RegistroPage(navCtrl, navParams, ds, alertCtrl, formBuilder, keyboard, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.keyboard = keyboard;
        this.iab = iab;
        this.validation_messages = {
            'password': [
                { type: 'required', message: 'Campo Requerido' },
                { type: 'minlength', message: 'M\u00EDnimo 5 caracteres' },
                { type: 'maxlength', message: 'M\u00E1ximo 20 caracteres' }
                //{ type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'passwordC': [
                { type: 'required', message: 'Campo Requerido' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'No coincide la contrase\u00F1a' }
            ],
            'captcha': [
                { type: 'required', message: 'Campo Requerido' },
                { type: 'minlength', message: 'M\u00EDnimo 6 caracteres' },
                { type: 'maxlength', message: 'M\u00E1ximo 6 caracteres' }
            ]
        };
        //constructor
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].maxLength(20)
                /*Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')*/
            ])),
            passwordC: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_0__providers_password_validator_password_validator__["a" /* PasswordValidatorProvider */].areEqual(formGroup);
        });
        this.registroForm = this.formBuilder.group({
            correo: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
            ])),
            captcha: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].maxLength(6)
            ])),
            matching_passwords: this.matching_passwords_group
        });
    }
    RegistroPage.prototype.enviarRegistro = function () {
        var _this = this;
        // console.log("correo", this.registroForm.value.correo);
        // console.log("pass", this.registroForm.value.matching_passwords.password);
        // console.log("passdC", this.registroForm.value.matching_passwords.passwordC);
        // console.log("captcha", this.registroForm.value.captcha);
        if (this.registroForm.get('correo').hasError('required') ||
            this.registroForm.get('matching_passwords').get('password').hasError('required') ||
            this.registroForm.get('matching_passwords').get('passwordC').hasError('required') ||
            this.registroForm.get('captcha').hasError('required')) {
            console.log("Completa los campos!!!");
            var texto = "Completa los campos!!!";
            this.doAlert("Error!", texto, "");
        }
        else {
            if (this.registroForm.get('correo').errors &&
                this.registroForm.get('correo').dirty &&
                this.registroForm.get('correo').hasError('pattern')) {
                //  console.log("No entra");
                this.doAlert("Error!!!", "Escribe el correo correctamente", "");
            }
            else if (this.registroForm.get('matching_passwords').get('password').hasError('minlength')) {
                this.doAlert("Error!!!", "Contrase\u00F1a: " + this.validation_messages.password[1]["message"], "");
            }
            else if (this.registroForm.get('matching_passwords').get('password').hasError('maxlength')) {
                this.doAlert("Error!!!", "Contrase\u00F1a: " + this.validation_messages.password[2]["message"], "");
            }
            else if (this.registroForm.get('matching_passwords').hasError("areEqual")) {
                this.doAlert("Error!!!", "Contrase\u00F1a: " + this.validation_messages.matching_passwords[0]["message"], "");
            }
            else if (this.registroForm.get('captcha').hasError('minlength')) {
                this.doAlert("Error!!!", "Captcha: " + this.validation_messages.captcha[1]["message"], "");
            }
            else if (this.registroForm.get('captcha').hasError('maxlength')) {
                this.doAlert("Error!!!", "Captcha: " + this.validation_messages.captcha[2]["message"], "");
            }
            else {
                if (this.registroForm.value.matching_passwords.password == this.registroForm.value.matching_passwords.passwordC) {
                    var sha256 = __WEBPACK_IMPORTED_MODULE_6_crypto_js__["SHA256"](this.registroForm.value.matching_passwords.password);
                    //sha256.toString(CryptoJS.enc.Base64)
                    var dataRegistro = {
                        "usuario": this.registroForm.value.correo,
                        "correo": this.registroForm.value.correo,
                        "word": this.registroForm.value.captcha,
                        "pass": sha256.toString(__WEBPACK_IMPORTED_MODULE_6_crypto_js__["enc"].Hex)
                    };
                    this.ds.doRegistrarUsuario(dataRegistro, this.tokenR)
                        .subscribe(function (res) {
                        console.log("registroRes", res);
                        if (res["response"] == true) {
                            _this.doAlertConfirm("Exito!", res["message"], "");
                            console.log("Registrado!!");
                        }
                        else if (res["result"] == "NO_HUMANO" && res["response"] == false) {
                            _this.doAlert("Alerta!", "Verifica el Texto", "Que sea el mismo de la imagen");
                            console.log("Error Captcha");
                        }
                        else if (res["result"] == "MAIL_EXISTE" && res["response"] == false) {
                            _this.doAlert("Alerta!", "Correo ya registrado", "");
                            console.log("Correo ya registrado");
                        }
                        else if (res["result"] == "USR_EXISTE" && res["response"] == false) {
                            _this.doAlert("Alerta!", "Usuario ya registrado", "");
                            console.log("Usuario ya registrado");
                        }
                        else if (res["result"] == "SQL_ERR" && res["response"] == false) {
                            _this.doAlert("Alerta!", "Error al registrar", "Clave: 4");
                            console.log("Error al registrar");
                        }
                        else if (res["result"] == "SYS_ERR" && res["response"] == false) {
                            _this.doAlert("Alerta!", "Error al registrar", "Clave: SE");
                            console.log("Error al registrar SE");
                        }
                        else if (res["result"] == null && res["response"] == false) {
                            _this.doAlert("Alerta!", "Error al registrar", "");
                            console.log("Error al registrar");
                        }
                        else {
                            _this.doAlertConfirm("Error!!!", "Error al registrar", "Clave: GE");
                            console.log("Error al registrar GE");
                        }
                    }, function (error) {
                        console.log("error al registrar", error);
                        //personalizar mensaje de error
                        _this.doAlert("Error!!!", "Captcha incorrecto", "Clave: DF");
                    });
                }
                else {
                    console.log("pass diferentes");
                }
            }
        }
    };
    RegistroPage.prototype.obtnerCaptchaTs = function () {
        var _this = this;
        this.ds.obtenerCaptcha()
            .subscribe(function (res) {
            // console.log("resCap", res);
            // console.log("token", res["result"]["token"]);
            // console.log("captcha", res["result"]["captcha"]);
            _this.imgUrl = res["result"]["captcha"];
            _this.tokenR = res["result"]["token"];
        }, function (error) {
            console.log("error obtener Captcha", error);
        });
    };
    RegistroPage.prototype.doAlert = function (titulo, texto, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            message: mensaje,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegistroPage.prototype.doAlertConfirm = function (titulo, texto, mensaje) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            message: mensaje,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_login_inicio_login__["a" /* InicioLoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    RegistroPage.prototype.abreTerminos = function () {
        var browser = this.iab.create('https://koinobori-artesanias.com/terminos.html', '_blank');
        //browser.executeScript(...);
        // browser.insertCSS(...);
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        browser.close();
    };
    RegistroPage.prototype.ionViewWillEnter = function () {
        this.obtnerCaptchaTs();
    };
    RegistroPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/registro/registro.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="colorFondo" >\n  <form ion-grid fixed no-padding [formGroup]="registroForm"\n  (ngSubmit)="enviarRegistro()">\n    <ion-row justify-content-center class="paddingVerticalM">\n      <img class="imgRed2 noMostrarG"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n      <img class="imgRed noMostrarChico"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n    </ion-row>\n    <ion-row class="paddingBottomM">\n      <p ion-text color="rosa" padding-left no-margin>\n          <b>Completa los campos:</b>\n      </p>\n    </ion-row>\n\n    <ion-row >\n      <ion-list ion-row no-margin no-padding>\n        <!-- correo -->\n        <ion-item ion-col col-12 >\n          <ion-label floating color="primary">\n            <ion-icon name="person"></ion-icon>\n            Correo\n            <span ion-text color="gris">(e-mail)</span>\n          </ion-label>\n          <ion-input type="email" name="correo" clearInput="true"\n          formControlName="correo" required>\n          </ion-input>\n        </ion-item>\n        <!-- validacion Correo -->\n        <ion-item *ngIf="registroForm.get(\'correo\').errors && registroForm.get(\'correo\').dirty">\n          <p color="danger" ion-text *ngIf="registroForm.get(\'correo\').hasError(\'required\')">\n            Campo requerido\n          </p>\n          <p color="danger" ion-text *ngIf="registroForm.get(\'correo\').hasError(\'pattern\')">\n            Escribe tu e-mail (nombre@dominio.com)\n          </p>\n        </ion-item>\n        <!-- Grupo Pass -->\n        <div formGroupName="matching_passwords" no-padding ion-col col-12>\n          <!-- pass -->\n          <ion-item class="inputc" ion-col col-12 >\n            <ion-label floating color="primary">\n              <ion-icon name="key"></ion-icon>\n              Contrase&ntilde;a\n              <span ion-text color="gris">(password)</span>\n            </ion-label>\n            <ion-input type="password" name="password"\n            clearInput="true" formControlName="password" required>\n            </ion-input>\n          </ion-item>\n          <!-- Validacion Pass -->\n          <ng-container *ngFor="let validation of validation_messages.password" ion-col col-12>\n            <ion-item  *ngIf="registroForm.get(\'matching_passwords\').get(\'password\').hasError(validation.type) && (registroForm.get(\'matching_passwords\').get(\'password\').dirty || registroForm.get(\'matching_passwords\').get(\'password\').touched)">\n              <p color="danger" ion-text>{{ validation.message }}</p>\n            </ion-item>\n          </ng-container>\n\n          <!-- passC -->\n          <ion-item ion-col col-12 >\n            <ion-label floating color="primary">\n              <ion-icon name="key"></ion-icon>\n              Contrase&ntilde;a\n              <span ion-text color="gris">(confirma)</span>\n            </ion-label>\n            <ion-input type="password" name="passwordC"\n            clearInput="true" formControlName="passwordC" required>\n            </ion-input>\n          </ion-item>\n          <!-- Validacion PassC -->\n            <ng-container *ngFor="let validation of validation_messages.passwordC" ion-col col-12>\n              <ion-item  *ngIf="registroForm.get(\'matching_passwords\').get(\'passwordC\').hasError(validation.type) && (registroForm.get(\'matching_passwords\').get(\'passwordC\').dirty || registroForm.get(\'matching_passwords\').get(\'passwordC\').touched)">\n                <p color="danger" ion-text>{{ validation.message }}</p>\n              </ion-item>\n            </ng-container>\n\n            <ng-container *ngFor="let validation of validation_messages.matching_passwords" ion-col col-12 >\n              <ion-item  *ngIf="registroForm.get(\'matching_passwords\').hasError(validation.type) && (registroForm.get(\'matching_passwords\').get(\'passwordC\').dirty || registroForm.get(\'matching_passwords\').get(\'passwordC\').touched)">\n                <p color="danger" ion-text>{{ validation.message }}</p>\n              </ion-item>\n            </ng-container>\n        </div>\n        <!-- captcha -->\n        <ion-item no-margin ion-col col-6 >\n          <!-- <ion-img src="{{ imgUrl }}" ></ion-img> -->\n          <img no-margin src="{{ imgUrl }}" >\n        </ion-item>\n        <ion-item ion-col col-6 no-padding>\n          <ion-input type="" name="captcha" formControlName="captcha"\n            clearInput="true" placeholder="Escribe el texto"></ion-input>\n        </ion-item>\n        <!-- Validacion captcha -->\n        <ng-container *ngFor="let validation of validation_messages.captcha" ion-col col-12>\n          <ion-item  *ngIf="registroForm.get(\'captcha\').hasError(validation.type) && (registroForm.get(\'captcha\').dirty || registroForm.get(\'captcha\').touched)">\n            <p color="danger" ion-text>{{ validation.message }}</p>\n          </ion-item>\n        </ng-container>\n\n\n      </ion-list>\n    </ion-row>\n    <!-- <img src="{{ imgUrl }}" > -->\n    <ion-row justify-content-center>\n      <small >\n        <p no-margin margin-top>Al dar click en registrarse acepta nuestros</p>\n      </small>\n    </ion-row>\n    <ion-row justify-content-center >\n      <small >\n        <p no-margin><a (click)="abreTerminos()" >T&eacute;rminos y Condiciones</a></p>\n      </small>\n      <!-- <button ion-button small clear no-padding color="primary" (click)="goToRegistro()">\n          <u>T&eacute;rminos y Condiciones</u>\n      </button> -->\n    </ion-row>\n\n    <!-- boton -->\n    <ion-row justify-content-center padding-horizontal >\n      <div ion-col col-12 col-sm-6>\n          <button type="submit" ion-button block full icon-left\n            class="sombra">\n              <ion-icon name="send"></ion-icon>\n              Registrarse\n          </button>\n        </div>\n    </ion-row>\n	</form>\n\n</ion-content>\n<!-- Footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AcercaPage = (function () {
    function AcercaPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    AcercaPage.prototype.abreInsta = function () {
        var browser = this.iab.create('https://www.instagram.com/koinoboriartesanias/', '_blank', 'toolbarposition=top,hidenavigationbuttons=no');
        //browser.executeScript(...);
        // browser.insertCSS(...);
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        //browser.close();
    };
    AcercaPage.prototype.abreFace = function () {
        var browser = this.iab.create('https://www.facebook.com/Koinoboriartesanias/', '_blank', 'toolbarposition=top');
        //browser.executeScript(...);
        // browser.insertCSS(...);
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        //browser.close();
    };
    AcercaPage.prototype.abreSitio = function () {
        var browser = this.iab.create('https://www.koinobori-artesanias.com', '_blank', 'toolbarposition=top');
        //browser.executeScript(...);
        // browser.insertCSS(...);
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        // browser.close();
    };
    AcercaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AcercaPage');
    };
    AcercaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acerca',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/acerca/acerca.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Acerca</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="colorFondo" padding>\n  <ion-row class="noMostrarChico" justify-content-center\n    padding-bottom>\n    <img class="imgRed"\n      src="../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n  </ion-row>\n  <img class="noMostrarG"\n      src="../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n\n	<h2 text-center>Artesan&iacute;as Japonesas</h2>\n	<p text-justify>Somos una familia de artesanos nikkei\n    (Descendientes de japoneses), queremos transmitir y\n    compartir la cultura a través de nuestros productos\n    que verán en redes sociales y/o eventos japoneses.\n    Esperamos que lo disfruten.\n  </p>\n  <ion-slides spaceBetween="10" pager >\n    <ion-slide class="sombra">\n      <ion-avatar>\n        <img  src="../assets/imgs/1.jpg">\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide class="sombra">\n      <ion-avatar>\n        <img src="../assets/imgs/2.jpg">\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide class="sombra">\n      <ion-avatar>\n        <img  src="../assets/imgs/3.jpg">\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide >\n      <!-- avatar -->\n      <img src="../assets/imgs/4.jpg" class="sombra">\n    </ion-slide>\n  </ion-slides>\n  <!-- botones -->\n  <p text-center no-margin margin-top margin-horizontal>Vis&iacute;tanos en nuestro sitio web:</p>\n  <p text-center no-margin><a (click)="abreSitio()" >www.koinobori-artesanias.com</a></p>\n  <p text-center>\n      どうもありがとうございます。Muchas gracias!\n  </p>\n  <h4 text-center>Redes Sociales</h4>\n  <ion-grid>\n    <ion-row>\n      <div ion-col col-6>\n          <button ion-button full icon-left color="azulFace" class="sombra"\n          (click)="abreFace()" >\n              <ion-icon name="logo-facebook"></ion-icon>\n              Facebook\n          </button>\n      </div>\n      <div ion-col col-6>\n          <button ion-button full icon-left color="vioInsta" class="sombra"\n          (click)="abreInsta()" >\n              <ion-icon name="logo-instagram"></ion-icon>\n              Instagram\n          </button>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- Footer  [hidden]="keyboard.isOpen()"-->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/acerca/acerca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AcercaPage);
    return AcercaPage;
}());

//# sourceMappingURL=acerca.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleDarumaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_daruma_service_daruma_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleDarumaPage = (function () {
    function DetalleDarumaPage(navCtrl, navParams, ds, loadingCtrl, alertCtrl, datePipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.isEnabled = false;
        this.nombre = navParams.get("nombre");
        this.proposito = navParams.get("descripcion");
        this.fechaIni = navParams.get("fechaIni");
        this.fechaFin = navParams.get("fechaFin");
        this.estado = navParams.get("estado");
        this.qrCode = navParams.get("qrCode");
        this.token = navParams.get("token");
        if (this.estado == 8) {
            this.isEnabled = true;
        }
        this.darumas = [];
    }
    DetalleDarumaPage.prototype.cambiarEstado = function () {
        console.log("CambiarEstadoAA", this.estado);
        var sub = "¿Haz cumplido tu proposito?";
        var mensaje = "Si cambias a \"Completado\" tu Daruma ser\u00E1 finalizado!";
        if (this.estado != 6) {
            this.doAlertConfirm("Alerta!", sub, mensaje);
            this.fechaFin = this.datePipe.transform(Date.now(), 'dd/MM/yyyy');
        }
    };
    DetalleDarumaPage.prototype.doAlertConfirm = function (titulo, texto, mensaje) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            message: mensaje,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Regresar',
                    handler: function () {
                        console.log("Regresa!!!");
                        _this.estado = 6;
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.loader = _this.loadingCtrl.create();
                        _this.loader.present();
                        _this.ds.completarDaruma(_this.qrCode, _this.token)
                            .subscribe(function (res) {
                            console.log("completadoo", res);
                            console.log("Estado ", _this.estado);
                            _this.isEnabled = true;
                        }, function (error) {
                            console.log("Error completarDaruma", error);
                        }, function () {
                            _this.loader.dismiss();
                            _this.doAlert("\u00A1Felicidades!", "Lo haz conseguido", "\u00A1El Daruma est\u00E1 terminado!");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetalleDarumaPage.prototype.doAlert = function (titulo, sub, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: sub,
            message: mensaje,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    DetalleDarumaPage.prototype.ionViewDidLoad = function () {
    };
    DetalleDarumaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-detalle-daruma',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/detalle-daruma/detalle-daruma.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons end>\n          <button ion-button icon-end menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n      </ion-buttons>\n\n      <ion-title>Detalle Daruma</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="colorFondo" padding>\n<h2 ion-text color="rosa" text-center> {{nombre}}</h2>\n<ion-row justify-content-center padding-vertical>\n  <img *ngIf="estado == 6" class="imgRed2 noMostrarG" src="../../assets/imgs/DarumaUnOjo.png" alt="DarumaUnOjo.png">\n  <img *ngIf="estado == 6" class="noMostrarChico" src="../../assets/imgs/DarumaUnOjo.png" alt="DarumaUnOjo.png">\n  <img *ngIf="estado == 8" class="imgRed2 noMostrarG" src="../../assets/imgs/DarumaDosOjo.png" alt="DarumaUnOjo.png">\n  <img *ngIf="estado == 8" class="noMostrarChico" src="../../assets/imgs/DarumaDosOjo.png" alt="DarumaUnOjo.png">\n</ion-row>\n<ion-row justify-content-center>\n <div ion-col col-12 col-sm-10>\n    <ion-row>\n      <div ion-col col-4>\n        <h6 ion-text color="rosa2"><b>Prop&oacute;sito: </b></h6>\n      </div>\n      <div ion-col col-8>\n        <h6>{{proposito}}</h6>\n      </div>\n      </ion-row>\n    <ion-row>\n      <div ion-col col-4>\n        <h6 ion-text color="azul">\n          <!-- <ion-icon name="checkmark-circle-outline"></ion-icon> -->\n          <b>Fecha Inicio:</b>\n        </h6>\n      </div>\n      <div ion-col col-8>\n        <h6>{{fechaIni}}</h6>\n      </div>\n    </ion-row>\n    <ion-row *ngIf="estado == 8">\n      <div ion-col col-4>\n        <h6 ion-text color="verde"><b>Fecha Fin:</b></h6>\n      </div>\n      <div ion-col col-8>\n        <h6>{{fechaFin}}</h6>\n      </div>\n    </ion-row>\n </div>\n</ion-row>\n\n<ion-row justify-content-center>\n  <div ion-col col-12 col-sm-6>\n    <ion-item>\n      <ion-label ion-text color="rosa2"><b>Estatus: </b></ion-label>\n      <ion-select [(ngModel)]="estado" cancelText="Cancelar" [disabled]="isEnabled"\n      (ionChange)="cambiarEstado()">\n        <ion-option value="6">Activo</ion-option>\n        <ion-option value="8" >Completado</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n</ion-row>\n</ion-content>\n\n<!-- footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/detalle-daruma/detalle-daruma.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]])
    ], DetalleDarumaPage);
    return DetalleDarumaPage;
}());

//# sourceMappingURL=detalle-daruma.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioDarumaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__darumas_gral_darumas_gral__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormularioDarumaPage = (function () {
    function FormularioDarumaPage(navCtrl, formBuilder, alertCtrl, ds, datePipe, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.ds = ds;
        this.datePipe = datePipe;
        this.navParams = navParams;
        this.logdarumaForm = this.formBuilder.group({
            proposito: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            nombreDaruma: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])]
        });
    }
    FormularioDarumaPage.prototype.logdaruForm = function () {
        var _this = this;
        if (this.logdarumaForm.get('proposito').hasError('required') ||
            this.logdarumaForm.get('nombreDaruma').hasError('required')) {
            // console.log("vacio");
            var titutlo = "Error";
            var texto = "Completa todos los campos";
            this.doAlert(titutlo, texto);
        }
        else {
            // Sacar token y QR
            this.ds.getNewDaruma().then(function (newDaruma) {
                // console.log("NewDarumaQr",newDaruma["qrCode"]);
                // console.log("NewDarumatoken",newDaruma["token"]);
                _this.ds.isAsignaDaruma(newDaruma["qrCode"], newDaruma["token"])
                    .subscribe(function (asigna) {
                    // console.log("asigna", asigna);
                    // console.log("newDArumaAntesDe",newDaruma)
                    _this.ds.doActivaDaruma(newDaruma, _this.logdarumaForm.value.proposito, _this.logdarumaForm.value.nombreDaruma)
                        .subscribe(function (resActiva) {
                        console.log("resActiva", resActiva);
                        var result = resActiva["result"];
                        if (result == 1) {
                            _this.doAlertConfirm("Exito!", resActiva["message"]);
                        }
                        else {
                            _this.doAlertConfirm("Error!!!", resActiva["message"]);
                        }
                    }, function (error) {
                        console.log("Error doActivaDaruma", error);
                    });
                }, function (error) {
                    console.log("Error isAsignaDaruma", error);
                });
            }).catch(function (e) { return console.log('Error is', e); });
        }
    };
    FormularioDarumaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad FormularioDarumaPage');
        var anio = new Date(Date.now()).getFullYear();
        var mes = new Date(Date.now()).getMonth().toString();
        if (mes.length < 2) {
            mes = "0" + mes;
        }
        var dia = new Date(Date.now()).getDate().toString();
        if (dia.length < 2) {
            dia = "0" + dia;
        }
        this.fecha = dia + "/" + mes + "/" + anio;
        //console.log("fecha", this.fecha);
    };
    FormularioDarumaPage.prototype.doAlert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    FormularioDarumaPage.prototype.doAlertConfirm = function (titulo, texto) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__darumas_gral_darumas_gral__["a" /* DarumasGralPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    FormularioDarumaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-formulario-daruma',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/formulario-daruma/formulario-daruma.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Prop&oacute;sito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="colorFondo" padding-vertical>\n  <form ion-grid fixed no-padding [formGroup]="logdarumaForm"\n  (ngSubmit)="logdaruForm()">\n  <ion-row justify-content-center padding-vertical>\n    <img class="imgRed2 noMostrarG"\n      src="../../assets/imgs/Koi_DarumaGsinOjosSF.png" alt="Koi_DarumaGsinOjosSF">\n    <img class="noMostrarChico"\n      src="../../assets/imgs/Koi_DarumaGsinOjosSF.png" alt="Koi_DarumaGsinOjosSF">\n  </ion-row>\n\n  <!-- Nombre Daruma -->\n  <ion-row justify-content-center>\n    <ion-list ion-col col-12 col-sm-6 no-margin no-padding>\n      <ion-item>\n        <ion-label floating color="verde">\n         <ion-icon name="add-circle-outline"></ion-icon>\n          Dale nombre a tu Daruma\n        </ion-label>\n        <ion-input type="text" formControlName="nombreDaruma" clearInput="true" aria-required="true"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-row>\n  <!-- proposito -->\n  <ion-row justify-content-center>\n    <ion-list ion-col col-12 col-sm-6 no-margin no-padding>\n      <ion-item>\n        <ion-label floating color="verde">\n         <ion-icon name="add-circle-outline"></ion-icon>\n          Escribe tu prop&oacute;sito:\n        </ion-label>\n        <ion-input type="text" formControlName="proposito" clearInput="true" aria-required="true"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-row>\n\n<!-- --- -->\n<ion-row justify-content-center padding-horizontal >\n  <div ion-col col-12  col-sm-6 class="colorFondo" >\n    <ion-row>\n      <div ion-col col-6 justify-content-center>\n        <h6 ion-text color="azul">\n          <b>Fecha Inicio:</b>\n        </h6>\n      </div>\n      <div ion-col col-6 justify-content-center>\n        <h6>{{fecha}}</h6>\n      </div>\n    </ion-row>\n  </div>\n</ion-row>\n<!-- boton -->\n<ion-row justify-content-center padding-horizontal>\n  <div ion-col col-12  col-sm-6 class="colorFondo">\n    <button type="submit" color="rosa2" ion-button\n      block full icon-left class="sombra">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n        Crear Daruma\n    </button>\n  </div>\n</ion-row>\n</form>\n</ion-content>\n\n<!-- footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/formulario-daruma/formulario-daruma.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */]])
    ], FormularioDarumaPage);
    return FormularioDarumaPage;
}());

//# sourceMappingURL=formulario-daruma.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inicio_login_inicio_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cambio_pass_cambio_pass__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AjustesPage = (function () {
    function AjustesPage(navCtrl, navParams, ds, keyboard, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
    }
    AjustesPage.prototype.goToCambioPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cambio_pass_cambio_pass__["a" /* CambioPassPage */], { token: this.token });
    };
    AjustesPage.prototype.eliminarCuenta = function () {
        var sub = "Estas a punto de eliminar tu cuenta";
        var mensaje = "¡Si continuas perder\u00E1s todos tus darumas y prop\u00F3sitos!";
        this.doAlertConfirm("Advertencia!!", sub, mensaje);
    };
    AjustesPage.prototype.obtieneToken = function () {
        var _this = this;
        this.ds.getToken().then(function (token) {
            _this.token = token;
        }).catch(function (e) { return console.log('Error getToken', e); });
    };
    AjustesPage.prototype.doAlert = function (titulo, sub, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: sub,
            message: texto,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    AjustesPage.prototype.doAlertConfirm = function (titulo, texto, mensaje) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            message: mensaje,
            enableBackdropDismiss: false,
            // enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Regresar',
                    handler: function () {
                        console.log("Regresa!!!");
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        console.log("token Eliminar cuenta", _this.token);
                        _this.ds.eliminarCuenta(_this.token).subscribe(function (res) {
                            console.log("cuenta Eliminada");
                        }, function (error) {
                            console.log("Error eliminarCuenta", error);
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__inicio_login_inicio_login__["a" /* InicioLoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    AjustesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjustesPage');
        this.obtieneToken();
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-ajustes',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/ajustes/ajustes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="colorFondo" padding>\n  <form ion-grid fixed>\n    <ion-row justify-content-center padding-bottom>\n      <img class="imgRed2 noMostrarG"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n      <img class="imgRed noMostrarChico"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n    </ion-row>\n\n    <ion-row class="paddingBottomM centrarG">\n      <p ion-text color="rosa" padding-left no-margin>\n          <b>Elige una opci&oacute;n:</b>\n      </p>\n    </ion-row>\n\n    <ion-row justify-content-center padding-horizontal >\n      <div ion-col col-12  col-sm-6 class="colorFondo">\n        <button  ion-button full icon-left color="verde"\n          class="sombra" (click)="goToCambioPass()" >\n            <ion-icon name="create"></ion-icon>\n            Cambiar Contrase&ntilde;a\n        </button>\n      </div>\n    </ion-row>\n\n    <ion-row justify-content-center padding-horizontal >\n      <div ion-col col-12  col-sm-6 class="colorFondo">\n        <button  ion-button full icon-left color="danger"\n          class="sombra" (click)="eliminarCuenta()" >\n            <ion-icon name="trash"></ion-icon>\n            Eliminar Cuenta\n        </button>\n      </div>\n    </ion-row>\n  </form>\n\n</ion-content>\n<!-- Footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/ajustes/ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambioPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_password_validator_password_validator__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_login_inicio_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CambioPassPage = (function () {
    function CambioPassPage(navCtrl, navParams, ds, alertCtrl, keyboard, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.alertCtrl = alertCtrl;
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.validation_messages = {
            'passwordN': [
                { type: 'required', message: 'Campo Requerido' },
                { type: 'minlength', message: 'M\u00EDnimo 5 caracteres' },
                { type: 'maxlength', message: 'M\u00E1ximo 20 caracteres' }
            ],
            'passwordNC': [
                { type: 'required', message: 'Campo Requerido' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'No coincide la contrase\u00F1a' }
            ],
            'passwordO': [
                { type: 'required', message: 'Campo Requerido' }
            ]
        };
        this.token = navParams.get("token");
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            passwordN: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(20)
            ])),
            passwordNC: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_0__providers_password_validator_password_validator__["a" /* PasswordValidatorProvider */].areEqual(formGroup);
        });
        this.cambioPassForm = this.formBuilder.group({
            passwordO: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required
            ])),
            matching_passwords: this.matching_passwords_group
        });
    }
    CambioPassPage.prototype.cambiarPass = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        // console.log("Cambio contraseña");
        if (this.cambioPassForm.get("passwordO").hasError('required') ||
            this.cambioPassForm.get('matching_passwords').get('passwordN').hasError('required') ||
            this.cambioPassForm.get('matching_passwords').get('passwordNC').hasError('required')) {
            // console.log("Completa todos los campos!!!");
            var texto = "Completa todos los campos!!!";
            this.doAlert("Error!", texto, "");
        }
        else {
            if (this.cambioPassForm.get('passwordO').errors &&
                this.cambioPassForm.get('passwordO').dirty) {
                this.doAlert("Error!!!", "Escribe el correo correctamente", "");
            }
            else if (this.cambioPassForm.get('matching_passwords').get('passwordN').hasError('minlength')) {
                this.doAlert("Error!!!", "Contrase\u00F1a: " + this.validation_messages.passwordN[1]["message"], "");
            }
            else if (this.cambioPassForm.get('matching_passwords').get('passwordN').hasError('maxlength')) {
                this.doAlert("Error!!!", "Contrase\u00F1a: " + this.validation_messages.passwordN[2]["message"], "");
            }
            else if (this.cambioPassForm.get('matching_passwords').hasError("areEqual")) {
                this.doAlert("Error!!!", "Contrase\u00F1a: " + this.validation_messages.matching_passwords[0]["message"], "");
            }
            else {
                if (this.cambioPassForm.value.matching_passwords.passwordN == this.cambioPassForm.value.matching_passwords.passwordNC) {
                    // console.log(this.usuario, this.token);
                    var sha256O = __WEBPACK_IMPORTED_MODULE_6_crypto_js__["SHA256"](this.cambioPassForm.value.passwordO);
                    var sha256N = __WEBPACK_IMPORTED_MODULE_6_crypto_js__["SHA256"](this.cambioPassForm.value.matching_passwords.passwordN);
                    var datosCambioPass = {
                        "usuario": this.usuario,
                        "oldPass": sha256O.toString(__WEBPACK_IMPORTED_MODULE_6_crypto_js__["enc"].Hex),
                        "newPass": sha256N.toString(__WEBPACK_IMPORTED_MODULE_6_crypto_js__["enc"].Hex)
                    };
                    this.ds.actualizarPass(datosCambioPass, this.token)
                        .subscribe(function (res) {
                        if (res["response"] == true) {
                            // console.log("actualizado", res);
                            var sub = "¡Contrase\u00F1a actualizada!";
                            var mes = "Inicia sesi\u00F3n nuevamente";
                            _this.loader.dismiss();
                            _this.doAlertConfirm("Exito!", sub, mes);
                        }
                        else {
                            // console.log("pass Incorrecto", res);
                            _this.loader.dismiss();
                            _this.doAlert("Error!!!", "Contrase\u00F1a incorrecta", "");
                        }
                    }, function (error) {
                        console.error("Error actualizarPass", error);
                    });
                }
            }
        }
    };
    CambioPassPage.prototype.obtieneUsuario = function () {
        var _this = this;
        this.ds.getUser().then(function (user) {
            _this.usuario = user;
        }).catch(function (e) { return console.log('Error getUser', e); });
    };
    CambioPassPage.prototype.doAlert = function (titulo, sub, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: sub,
            message: texto,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    CambioPassPage.prototype.doAlertConfirm = function (titulo, sub, texto) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: sub,
            message: texto,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__inicio_login_inicio_login__["a" /* InicioLoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    CambioPassPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CambioPassPage');
        this.obtieneUsuario();
    };
    CambioPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cambio-pass',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/cambio-pass/cambio-pass.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cambiar Contrase&ntilde;a</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="colorFondo" padding-vertical>\n  <form ion-grid fixed no-padding [formGroup]="cambioPassForm"\n  (ngSubmit)="cambiarPass()">\n    <ion-row justify-content-center padding-bottom>\n      <img class="imgRed2 noMostrarG"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n      <img class="imgRed noMostrarChico"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n    </ion-row>\n\n    <ion-row class="paddingBottomM centrarG">\n      <p ion-text color="rosa" padding-left no-margin>\n          <b>Completa los campos:</b>\n      </p>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-list ion-col col-12 col-sm-6 no-margin no-padding>\n        <!-- vieja -->\n        <ion-item>\n          <ion-label floating color="primary">\n            <ion-icon name="key"></ion-icon>\n            Contrase&ntilde;a\n            <span ion-text color="gris">(Actual)</span>\n          </ion-label>\n          <ion-input type="password" name="passwordO" clearInput="true"\n          formControlName="passwordO" required></ion-input>\n        </ion-item>\n        <!-- Validacion PassO -->\n        <ng-container *ngFor="let validation of validation_messages.passwordO" ion-col col-12>\n          <ion-item  *ngIf="cambioPassForm.get(\'passwordO\').hasError(validation.type) && (cambioPassForm.get(\'passwordO\').dirty || cambioPassForm.get(\'passwordO\').touched)">\n            <p color="danger" ion-text>{{ validation.message }}</p>\n          </ion-item>\n        </ng-container>\n        <div formGroupName="matching_passwords">\n          <!-- PassN -->\n          <ion-item>\n            <ion-label floating color="primary">\n              <ion-icon name="key"></ion-icon>\n              Nueva Contrase&ntilde;a\n            </ion-label>\n            <ion-input type="password" name="passwordN" clearInput="true"\n            formControlName="passwordN" required></ion-input>\n          </ion-item>\n          <!-- Validacion PassN -->\n          <ng-container *ngFor="let validation of validation_messages.passwordN" ion-col col-12>\n            <ion-item  *ngIf="cambioPassForm.get(\'matching_passwords\').get(\'passwordN\').hasError(validation.type) && (cambioPassForm.get(\'matching_passwords\').get(\'passwordN\').dirty || cambioPassForm.get(\'matching_passwords\').get(\'passwordN\').touched)">\n              <p color="danger" ion-text>{{ validation.message }}</p>\n            </ion-item>\n          </ng-container>\n          <!-- PassNC Confirma -->\n          <ion-item>\n            <ion-label floating color="primary">\n              <ion-icon name="key"></ion-icon>\n              Nueva Contrase&ntilde;a\n              <span ion-text color="gris">(Confirma)</span>\n            </ion-label>\n            <ion-input type="password" name="passwordNC" clearInput="true"\n            formControlName="passwordNC" required></ion-input>\n          </ion-item>\n          <ng-container *ngFor="let validation of validation_messages.passwordNC" ion-col col-12>\n            <ion-item  *ngIf="cambioPassForm.get(\'matching_passwords\').get(\'passwordNC\').hasError(validation.type) && (cambioPassForm.get(\'matching_passwords\').get(\'passwordNC\').dirty || cambioPassForm.get(\'matching_passwords\').get(\'passwordNC\').touched)">\n              <p color="danger" ion-text>{{ validation.message }}</p>\n            </ion-item>\n          </ng-container>\n\n          <ng-container *ngFor="let validation of validation_messages.matching_passwords" ion-col col-12 >\n            <ion-item  *ngIf="cambioPassForm.get(\'matching_passwords\').hasError(validation.type) && (cambioPassForm.get(\'matching_passwords\').get(\'passwordNC\').dirty || cambioPassForm.get(\'matching_passwords\').get(\'passwordNC\').touched)">\n              <p color="danger" ion-text>{{ validation.message }}</p>\n            </ion-item>\n          </ng-container>\n        </div>\n\n\n      </ion-list>\n    </ion-row>\n\n    <ion-row justify-content-center padding-horizontal padding-top>\n      <div ion-col col-12  col-sm-6 class="colorFondo">\n        <button type="submit" color="verde" ion-button\n          block full icon-left class="sombra">\n            <ion-icon name="create"></ion-icon>\n            Cambiar\n        </button>\n      </div>\n    </ion-row>\n  </form>\n</ion-content>\n<!-- Footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/cambio-pass/cambio-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CambioPassPage);
    return CambioPassPage;
}());

//# sourceMappingURL=cambio-pass.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_login_inicio_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecuperarPage = (function () {
    function RecuperarPage(navCtrl, navParams, ds, alertCtrl, keyboard, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.alertCtrl = alertCtrl;
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.validation_messages = {
            'captcha': [
                { type: 'required', message: 'Campo Requerido' },
                { type: 'minlength', message: 'M\u00EDnimo 6 caracteres' },
                { type: 'maxlength', message: 'M\u00E1ximo 6 caracteres' }
            ]
        };
        this.recuperarForm = this.formBuilder.group({
            correo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
                ])],
            captcha: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(6)
                ])]
        });
    }
    RecuperarPage.prototype.enviarMail = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        console.log("correo", this.recuperarForm.value.correo);
        if (this.recuperarForm.get('correo').hasError('required') ||
            this.recuperarForm.get('captcha').hasError('required')) {
            this.loader.dismiss();
            this.doAlert("Error!!!", "Campo requerido");
        }
        else {
            if (this.recuperarForm.get('correo').errors &&
                this.recuperarForm.get('correo').dirty &&
                this.recuperarForm.get('correo').hasError('pattern')) {
                console.log("No entra");
                this.loader.dismiss();
                this.doAlert("Error!!!", "Escribe el correo correctamente");
            }
            else if (this.recuperarForm.get('captcha').hasError('minlength')) {
                this.loader.dismiss();
                this.doAlert("Error!!!", "Captcha: " + this.validation_messages.captcha[1]["message"]);
            }
            else if (this.recuperarForm.get('captcha').hasError('maxlength')) {
                this.loader.dismiss();
                this.doAlert("Error!!!", "Captcha: " + this.validation_messages.captcha[2]["message"]);
            }
            else {
                console.log("Entroooo");
                var infoCaptcha = {
                    token: this.tokenR,
                    word: this.recuperarForm.value.captcha
                };
                // requerirPass
                this.ds.requerirPass(this.recuperarForm.value.correo, infoCaptcha)
                    .subscribe(function (res2) {
                    console.log("res2", res2);
                    _this.loader.dismiss();
                    _this.doAlertConfirm("Info", "Se ha enviado el correo, Sigue los pasos para reestablecer tu contraseña");
                }, function (error) {
                    console.log("error al registrar", error);
                    _this.loader.dismiss();
                    _this.doAlert("Error!!!", "Captcha incorrecto");
                });
            }
        }
    };
    RecuperarPage.prototype.obtnerCaptchaTs = function () {
        var _this = this;
        this.ds.obtenerCaptcha()
            .subscribe(function (res) {
            _this.imgUrl = res["result"]["captcha"];
            _this.tokenR = res["result"]["token"];
        }, function (error) {
            console.log("error obtener Captcha", error);
        });
    };
    RecuperarPage.prototype.doAlert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    RecuperarPage.prototype.doAlertConfirm = function (titulo, texto) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        //console.log('Ok clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__inicio_login_inicio_login__["a" /* InicioLoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    RecuperarPage.prototype.ionViewWillEnter = function () {
        this.obtnerCaptchaTs();
    };
    RecuperarPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad RecuperarPage');
    };
    RecuperarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-recuperar',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/recuperar/recuperar.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recuperar Contrase&ntilde;a</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="colorFondo" padding-vertical>\n  <form ion-grid fixed no-padding [formGroup]="recuperarForm"\n  (ngSubmit)="enviarMail()">\n    <ion-row justify-content-center padding-bottom>\n      <img class="imgRed2 noMostrarG"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n      <img class="imgRed noMostrarChico"\n        src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n    </ion-row>\n\n    <ion-row class="paddingBottomM centrarG">\n      <p ion-text color="rosa" padding-left no-margin>\n          <b>Escribe tu correo electr&oacute;nico:</b>\n      </p>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-list ion-row ion-col col-12 col-sm-6 no-margin no-padding>\n        <ion-item>\n          <ion-label floating color="primary">\n            <ion-icon name="person"></ion-icon>\n            Correo\n            <span ion-text color="gris">(e-mail)</span>\n          </ion-label>\n          <ion-input type="email" clearInput="true"\n            formControlName="correo" required>\n          </ion-input>\n        </ion-item>\n        <!-- validacion -->\n        <ion-item *ngIf="recuperarForm.get(\'correo\').errors && recuperarForm.get(\'correo\').dirty">\n          <p color="danger" ion-text *ngIf="recuperarForm.get(\'correo\').hasError(\'required\')">\n            Campo requerido\n          </p>\n          <p color="danger" ion-text *ngIf="recuperarForm.get(\'correo\').hasError(\'pattern\')">\n            Escribe tu e-mail (nombre@dominio.com)\n          </p>\n        </ion-item>\n        <!-- captcha -->\n        <ion-item ion-col col-6 >\n          <img class="" src="{{ imgUrl }}" >\n        </ion-item>\n        <ion-item ion-col col-6 no-padding>\n          <ion-input type="" name="captcha" formControlName="captcha"\n            clearInput="true" placeholder="Escribe el texto"></ion-input>\n        </ion-item>\n        <!-- Validacion captcha -->\n        <ng-container *ngFor="let validation of validation_messages.captcha" ion-col col-12>\n          <ion-item  *ngIf="recuperarForm.get(\'captcha\').hasError(validation.type) && (recuperarForm.get(\'captcha\').dirty || recuperarForm.get(\'captcha\').touched)">\n            <p color="danger" ion-text>{{ validation.message }}</p>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n    </ion-row>\n    <!-- boton -->\n    <ion-row justify-content-center padding-horizontal padding-top>\n      <div ion-col col-12  col-sm-6 class="colorFondo">\n        <button type="submit" color="verde" ion-button\n          block full icon-left class="sombra">\n            <ion-icon name="mail"></ion-icon>\n            Enviar Correo\n        </button>\n      </div>\n    </ion-row>\n\n\n  </form>\n</ion-content>\n<!-- footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/recuperar/recuperar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], RecuperarPage);
    return RecuperarPage;
}());

//# sourceMappingURL=recuperar.js.map

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acerca/acerca.module": [
		327,
		9
	],
	"../pages/add-daruma-qr/add-daruma-qr.module": [
		328,
		8
	],
	"../pages/ajustes/ajustes.module": [
		329,
		7
	],
	"../pages/cambio-pass/cambio-pass.module": [
		330,
		6
	],
	"../pages/darumas-gral/darumas-gral.module": [
		331,
		5
	],
	"../pages/detalle-daruma/detalle-daruma.module": [
		332,
		4
	],
	"../pages/formulario-daruma/formulario-daruma.module": [
		333,
		3
	],
	"../pages/inicio-login/inicio-login.module": [
		334,
		2
	],
	"../pages/recuperar/recuperar.module": [
		335,
		1
	],
	"../pages/registro/registro.module": [
		336,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarumaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DarumaServiceProvider = (function () {
    function DarumaServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        //console.log('Hello DarumaServiceProvider Provider');
        //produccion
        this.darumaUrl = "https://koinobori-artesanias.com/darumas/public/";
        //Proxy pruebas
        //this.darumaUrl = "/darumaUrl/";
    }
    DarumaServiceProvider.prototype.doLogin = function (loginData) {
        console.log("provider", loginData);
        this.datosLogin = loginData;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                "Authorization": ""
            })
        };
        return this.respuesta = this.http.post(this.darumaUrl + "loginApp/login", this.datosLogin, httpOptions);
    };
    DarumaServiceProvider.prototype.getToken = function () {
        return this.storage.get('tokenS');
    };
    DarumaServiceProvider.prototype.getUser = function () {
        return this.storage.get('userS');
    };
    DarumaServiceProvider.prototype.getNewDaruma = function () {
        return this.storage.get('newDAruma');
    };
    DarumaServiceProvider.prototype.getDarumas = function (token) {
        // console.log("tokInGetDar", token);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                "Authorization": token
            })
        };
        this.datos = {
            clave: null,
            darumas: null
        };
        return this.http.post(this.darumaUrl + "DarumasWS/getDarumas", this.datos, httpOptions);
    };
    DarumaServiceProvider.prototype.getDarumasDetalle = function (daruma, token) {
        console.log("tokInGetDarDet", token);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                "Authorization": token
            })
        };
        return this.http.post(this.darumaUrl + "DarumasWS/getDarumas", daruma, httpOptions);
    };
    DarumaServiceProvider.prototype.isQrCodeRegistrado = function (qrCode, token) {
        // console.log("isQrCodeRegistrado", qrCode);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": token
            })
        };
        this.datosAsignar = {
            "qrCode": qrCode,
        };
        // return this.http.post(this.darumaUrl + "DarumasWS/asignar", this.datosAsignar
        return this.http.get(this.darumaUrl + "QrCodeWS/isQrCodeRegistrado" + "?qrCode" + "=" + qrCode
        //return this.http.get(this.darumaUrl + "QrCodeWS/isQrCodeAsignado"+"?qrCode"+"="+qrCode
        , httpOptions);
    };
    DarumaServiceProvider.prototype.isQrCodeAsignado = function (qrCode, token) {
        // console.log("qrText22", qrCode);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": token
            })
        };
        this.datosAsignar = {
            "qrCode": qrCode
        };
        return this.http.get(this.darumaUrl + 'QrCodeWS/isQrCodeAsignado' + '?qrCode' + '=' + qrCode, httpOptions);
    };
    DarumaServiceProvider.prototype.requerirPass = function (correo, infoCaptcha) {
        // console.log("Correo", correo);
        // console.log("captcha", infoCaptcha);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": infoCaptcha["token"]
            })
        };
        return this.http.get(this.darumaUrl + "loginApp/requerirPass?email=" + correo + "&word=" + infoCaptcha["word"], httpOptions);
    };
    DarumaServiceProvider.prototype.actualizarPass = function (datos, token) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": token
            })
        };
        return this.http.post(this.darumaUrl + "registro/setPass", datos, httpOptions);
    };
    DarumaServiceProvider.prototype.obtenerCaptcha = function () {
        return this.http.get(this.darumaUrl + "loginApp/getCaptcha");
    };
    DarumaServiceProvider.prototype.doRegistrarUsuario = function (data, token) {
        // console.log("data", data);
        // console.log("token", token);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": token
            })
        };
        return this.http.post(this.darumaUrl + "registro/alta", data, httpOptions);
    };
    DarumaServiceProvider.prototype.isAsignaDaruma = function (qrCode, token) {
        // console.log("qrText", qrCode);
        // console.log("qrToken", token);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": token
            })
        };
        this.datosAsignar = {
            "qrCode": qrCode
        };
        return this.http.post(this.darumaUrl + "DarumasWS/asignar", this.datosAsignar, httpOptions);
    };
    DarumaServiceProvider.prototype.doActivaDaruma = function (daruma, proposito, nombre) {
        //console.log("EntraActivar", proposito);
        // console.log("EntraToken", daruma["token"]);
        // console.log("EntraQR", daruma["qrCode"]);
        var tok = daruma["token"];
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": tok
            })
        };
        var Daruma = {
            "qrcode": daruma["qrCode"],
            "descripcion": proposito,
            "nombre": nombre
        };
        return this.http.post(this.darumaUrl + "DarumasWS/activar", Daruma, httpOptions);
    };
    DarumaServiceProvider.prototype.completarDaruma = function (qrcode, token) {
        // console.log("qrcode ",qrcode, " token ", token);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": token
            })
        };
        var Daruma = {
            "qrCode": qrcode
        };
        return this.http.post(this.darumaUrl + "DarumasWS/completar", Daruma, httpOptions);
    };
    DarumaServiceProvider.prototype.eliminarCuenta = function (token) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                "Authorization": token
            })
        };
        var datos = {
            clave: null,
            darumas: null
        };
        return this.http.post(this.darumaUrl + "registro/baja", datos, httpOptions);
    };
    DarumaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DarumaServiceProvider);
    return DarumaServiceProvider;
}());

//# sourceMappingURL=daruma-service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_registro_registro__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_recuperar_recuperar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_inicio_login_inicio_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_formulario_daruma_formulario_daruma__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_detalle_daruma_detalle_daruma__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_darumas_gral_darumas_gral__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cambio_pass_cambio_pass__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ajustes_ajustes__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_daruma_qr_add_daruma_qr__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_acerca_acerca__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_qr_scanner__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_local_notifications__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_password_validator_password_validator__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_acerca_acerca__["a" /* AcercaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_daruma_qr_add_daruma_qr__["a" /* AddDarumaQrPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cambio_pass_cambio_pass__["a" /* CambioPassPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_darumas_gral_darumas_gral__["a" /* DarumasGralPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_detalle_daruma_detalle_daruma__["a" /* DetalleDarumaPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_formulario_daruma_formulario_daruma__["a" /* FormularioDarumaPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_inicio_login_inicio_login__["a" /* InicioLoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_recuperar_recuperar__["a" /* RecuperarPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_registro_registro__["a" /* RegistroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: "darumaBDM" }),
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acerca/acerca.module#AcercaPageModule', name: 'AcercaPage', segment: 'acerca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-daruma-qr/add-daruma-qr.module#AddDarumaQrPageModule', name: 'AddDarumaQrPage', segment: 'add-daruma-qr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajustes/ajustes.module#AjustesPageModule', name: 'AjustesPage', segment: 'ajustes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cambio-pass/cambio-pass.module#CambioPassPageModule', name: 'CambioPassPage', segment: 'cambio-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/darumas-gral/darumas-gral.module#DarumasGralPageModule', name: 'DarumasGralPage', segment: 'darumas-gral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-daruma/detalle-daruma.module#DetalleDarumaPageModule', name: 'DetalleDarumaPage', segment: 'detalle-daruma', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formulario-daruma/formulario-daruma.module#FormularioDarumaPageModule', name: 'FormularioDarumaPage', segment: 'formulario-daruma', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-login/inicio-login.module#InicioLoginPageModule', name: 'InicioLoginPage', segment: 'inicio-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar/recuperar.module#RecuperarPageModule', name: 'RecuperarPage', segment: 'recuperar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_acerca_acerca__["a" /* AcercaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_daruma_qr_add_daruma_qr__["a" /* AddDarumaQrPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cambio_pass_cambio_pass__["a" /* CambioPassPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_darumas_gral_darumas_gral__["a" /* DarumasGralPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_detalle_daruma_detalle_daruma__["a" /* DetalleDarumaPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_formulario_daruma_formulario_daruma__["a" /* FormularioDarumaPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_inicio_login_inicio_login__["a" /* InicioLoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_recuperar_recuperar__["a" /* RecuperarPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_registro_registro__["a" /* RegistroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_local_notifications__["b" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_password_validator_password_validator__["a" /* PasswordValidatorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_ajustes_ajustes__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_acerca_acerca__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_add_daruma_qr_add_daruma_qr__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inicio_login_inicio_login__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_darumas_gral_darumas_gral__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app) {
        var _this = this;
        this.platform = platform;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_inicio_login_inicio_login__["a" /* InicioLoginPage */];
        this.pages = [
            { titulo: "Mis Darumas", color: "azul", componente: __WEBPACK_IMPORTED_MODULE_4__pages_darumas_gral_darumas_gral__["a" /* DarumasGralPage */], icon: "home" },
            { titulo: 'Agregar Daruma', color: "azul", componente: __WEBPACK_IMPORTED_MODULE_2__pages_add_daruma_qr_add_daruma_qr__["a" /* AddDarumaQrPage */], icon: 'qr-scanner' },
            { titulo: 'Acerca de', color: "azul", componente: __WEBPACK_IMPORTED_MODULE_1__pages_acerca_acerca__["a" /* AcercaPage */], icon: 'information-circle' },
            { titulo: "Ajustes", color: "azul", componente: __WEBPACK_IMPORTED_MODULE_0__pages_ajustes_ajustes__["a" /* AjustesPage */], icon: "settings" },
            { titulo: "Salir", color: "rosa3", componente: __WEBPACK_IMPORTED_MODULE_3__pages_inicio_login_inicio_login__["a" /* InicioLoginPage */], icon: "log-out" }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (_this.platform.is('android')) {
                statusBar.styleBlackTranslucent();
            }
            else {
                statusBar.styleDefault();
            }
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToPage = function (page) {
        //console.log(page);
        if (page == __WEBPACK_IMPORTED_MODULE_3__pages_inicio_login_inicio_login__["a" /* InicioLoginPage */] || page == __WEBPACK_IMPORTED_MODULE_4__pages_darumas_gral_darumas_gral__["a" /* DarumasGralPage */]) {
            // Nota: Quita token siempre al cargar inicioPage
            this.nav.setRoot(page);
        }
        else {
            this.nav.push(page);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_8" /* ViewChild */])('NAV'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/app/app.html"*/'<ion-menu  [content]="NAV">\n\n    <ion-header>\n      <div class="colorFondo" padding>\n          <img src="/assets/imgs/logoKoiHR.png" alt="logoKoiHR">\n      </div>\n      <ion-toolbar>\n        <ion-title>\n  \n          <span ion-text color = \'verde\'>    M</span>\n          <span ion-text color = \'azul\'>     e</span>\n          <span ion-text color = \'rosa2\'>    n</span>\n          <span ion-text color = \'verde\'>&uacute;</span>\n  \n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class="outer-content">\n  \n  \n      <ion-list >\n        <button ion-item *ngFor="let page of pages"\n          (click)="goToPage(page.componente)" menuClose>\n          <ion-icon item-left color="{{page.color}}" name="{{page.icon}}"></ion-icon>\n         <ion-label color="{{page.color}}">{{ page.titulo }}</ion-label>\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-nav #NAV [root]="rootPage"></ion-nav>\n  '/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_registro__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recuperar_recuperar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__darumas_gral_darumas_gral__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_crypto_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FormularioDarumaPage } from './../formulario-daruma/formulario-daruma';






var InicioLoginPage = (function () {
    function InicioLoginPage(navCtrl, navParams, ds, formBuilder, alertCtrl, storage, datePipe, loadingCtrl, keyboard, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.datePipe = datePipe;
        this.loadingCtrl = loadingCtrl;
        this.keyboard = keyboard;
        this.menuCtrl = menuCtrl;
        this.minLength = 5;
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
                    /*,Validators.minLength(4)*/
                ])]
        });
        this.storage.remove('tokenS');
        this.menuCtrl.enable(false);
    }
    InicioLoginPage.prototype.logForm = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        if (this.loginForm.get('email').hasError('required') || this.loginForm.get('password').hasError('required')) {
            console.log("campo nulo");
            var error = "Error!";
            var texto = "Escribe tu Usuario (e-mail) y/o Password";
            this.doAlert(error, texto);
        }
        else {
            //console.log("datos completos");
            if (this.loginForm.get('email').errors &&
                this.loginForm.get('email').dirty &&
                this.loginForm.get('email').hasError('pattern')) {
                //  console.log("No entra");
                this.doAlert("Error!!!", "Escribe el correo correctamente");
            }
            else {
                this.loader.present();
                var z = this.datePipe.transform(new Date(), 'Z');
                var sha256 = __WEBPACK_IMPORTED_MODULE_9_crypto_js__["SHA256"](this.loginForm.value.password);
                //sha256.toString(CryptoJS.enc.Base64)
                // console.log("crypto",sha256.toString(CryptoJS.enc.Hex));
                this.datosLogin = {
                    usuario: this.loginForm.value.email,
                    pass: sha256.toString(__WEBPACK_IMPORTED_MODULE_9_crypto_js__["enc"].Hex),
                    zona: z
                };
                this.ds.doLogin(this.datosLogin)
                    .subscribe(function (data) {
                    console.log("data InLog.ts", data);
                    if (data["response"] == false) {
                        console.log("datos Incorrectos");
                        var error = "Error!!!";
                        // this.doAlert(error, data["message"])
                        _this.loader.dismiss();
                        _this.doAlert(error, "Usuario o contrase\u00F1a incorrecto");
                    }
                    else {
                        _this.storage.set('tokenS', data["result"]);
                        _this.storage.set('userS', _this.loginForm.value.email);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__darumas_gral_darumas_gral__["a" /* DarumasGralPage */]);
                    }
                }, function (error) {
                    console.log("errooor", error);
                });
            }
        }
    };
    InicioLoginPage.prototype.doAlert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    InicioLoginPage.prototype.goToRegistro = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__registro_registro__["a" /* RegistroPage */]);
    };
    InicioLoginPage.prototype.goToRecuperar = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__recuperar_recuperar__["a" /* RecuperarPage */]);
    };
    InicioLoginPage.prototype.ionViewDidLoad = function () {
        // tiene que checar si hay un token activo
        // y saltar la pantalla de login
        //console.log('ionViewDidLoad InicioLoginPage');
    };
    InicioLoginPage.prototype.ionViewWillLeave = function () {
        this.loader.dismiss();
    };
    InicioLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-inicio-login',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/inicio-login/inicio-login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inicio de Sesi&oacute;n</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="colorFondo " padding-vertical>\n  <form ion-grid fixed no-padding [formGroup]="loginForm"\n    (ngSubmit)="logForm()">\n    <ion-row justify-content-center padding-bottom>\n        <!-- <div class="imgRed"> -->\n          <img class="imgRed noMostrarG"\n            src="../../assets/imgs/LogoKoiCT.png" alt="logoKoiCT">\n          <img class="imgRed noMostrarChico"\n            src="../../assets/imgs/logoKoiHT2.png" alt="logoKoiHT2">\n        <!-- </div> -->\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-list ion-col col-12  col-sm-6 no-margin no-padding>\n        <ion-item>\n          <ion-label floating color="primary">\n            <ion-icon name="person"></ion-icon>\n            Usuario\n            <span ion-text color="gris">(e-mail)</span>\n          </ion-label>\n          <ion-input type="email" formControlName="email"\n            clearInput="true" required>\n          </ion-input>\n        </ion-item>\n        <!-- Validaciones -->\n        <ion-item *ngIf="loginForm.get(\'email\').errors && loginForm.get(\'email\').dirty">\n          <p color="danger" ion-text *ngIf="loginForm.get(\'email\').hasError(\'required\')">\n            Campo requerido\n          </p>\n          <p color="danger" ion-text *ngIf="loginForm.get(\'email\').hasError(\'pattern\')">\n            Escribe tu e-mail (nombre@dominio.com)\n          </p>\n        </ion-item>\n        <!-- input -->\n        <ion-item>\n          <ion-label floating color="primary">\n            <ion-icon name="key"></ion-icon>\n            Contrase&ntilde;a\n            <span ion-text color="gris">(password)</span>\n            </ion-label>\n          <ion-input type="password" formControlName="password"\n            clearInput="true" required>\n          </ion-input>\n        </ion-item>\n        <!-- Validaciones -->\n        <ion-item *ngIf="loginForm.get(\'password\').errors && loginForm.get(\'password\').dirty ">\n          <p color="danger" ion-text *ngIf="loginForm.get(\'password\').hasError(\'required\')">\n            Campo requerido\n          </p>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n    <!-- botones [disabled]="!loginForm.valid"-->\n    <ion-row justify-content-center padding-horizontal padding-top>\n      <div ion-col col-12  col-sm-6 class="colorFondo">\n        <button id="emailBtn" type="submit" color="verdeLogo" ion-button\n          block full icon-left class="sombra" >\n            <ion-icon name="send"></ion-icon>\n            Iniciar Sesi&oacute;n\n        </button>\n      </div>\n    </ion-row>\n\n    <ion-row justify-content-center padding-horizontal class="padingTopM">\n      <div ion-col col-12 col-sm-6>\n        <button color="rosa2" ion-button type="button"\n          block full icon-left (click)="goToRegistro()" class="sombra">\n            <ion-icon name="create"></ion-icon>\n            Reg&iacute;strate\n        </button>\n      </div>\n    </ion-row>\n\n    <ion-row justify-content-center padding-vertical>\n        <button ion-button small clear color="primary" type="button"\n        (click)="goToRecuperar()">\n          <u>¿Olvidaste la contrase&ntilde;a?</u>\n        </button>\n    </ion-row>\n\n  </form>\n</ion-content>\n<!-- footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/inicio-login/inicio-login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* MenuController */]])
    ], InicioLoginPage);
    return InicioLoginPage;
}());

//# sourceMappingURL=inicio-login.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarumasGralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_local_notifications___ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_daruma_qr_add_daruma_qr__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_daruma_detalle_daruma__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DarumasGralPage = (function () {
    function DarumasGralPage(navCtrl, navParams, ds, loadingCtrl, localNotifications, plt, datePipe, alertCtrl, menuCtrl) {
        //this.alertOfNotification();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ds = ds;
        this.loadingCtrl = loadingCtrl;
        this.localNotifications = localNotifications;
        this.plt = plt;
        this.datePipe = datePipe;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
    }
    DarumasGralPage.prototype.scheduleNotification = function () {
        var _this = this;
        // console.log("EntraNoti");
        if (this.darumasIncompletos == true) {
            // console.log("DarumasIncompletos", this.darumasIncompletos);
            this.localNotifications.hasPermission()
                .then(function (permiso) {
                //verifica permiso para notificaciones
                // console.log("TienePermisoNotif", permiso);
                if (permiso == true) {
                    // tiene permiso
                    // console.log("Programa Notificaciones");
                    _this.localNotifications.schedule({
                        id: 1,
                        title: 'Tienes Darumas activos',
                        text: '\u00A1Cumple tus prop\u00F3sitos!',
                        // trigger: { at: new Date(new Date().getTime() + 5 * 1000) },
                        trigger: { every: __WEBPACK_IMPORTED_MODULE_0__ionic_native_local_notifications___["a" /* ELocalNotificationTriggerUnit */].WEEK },
                        data: { myData: _this.usuario },
                        led: { color: '#FF005E', on: 500, off: 500 },
                        icon: 'file://assets/imgs/icoNoti2.png',
                        smallIcon: 'res://ic_no'
                    });
                }
                else {
                    // no tiene permiso Notificaciones
                    _this.localNotifications.requestPermission()
                        .then(function (permisoRquest) {
                        //pide permiso Notificaciones
                        console.log("NotifRequest", permisoRquest);
                    }).catch(function (e) { return console.log('Error requestPermissionNotif', e); });
                }
            }).catch(function (e) { return console.log('Error permisoNotif', e); });
        }
    };
    DarumasGralPage.prototype.goToDetalle = function (qrcode, token) {
        var _this = this;
        //peticion de daruma y mandarlo
        this.loader = this.loader = this.loadingCtrl.create();
        this.loader.present();
        var daruma = {
            "daruma": { "qrcode": qrcode }
        };
        this.ds.getDarumasDetalle(daruma, token)
            .subscribe(function (detalle) {
            detalle["result"].forEach(function (element) {
                if (element["fechaInicio"] != null) {
                    var inicio = void 0;
                    inicio = element["fechaInicio"].replace(/\s/g, "T");
                    element["fechaInicio"] = _this.datePipe.transform(inicio, 'dd/MM/yyyy');
                }
                if (element["fechaCompletado"] != null) {
                    var fin = void 0;
                    fin = element["fechaCompletado"].replace(/\s/g, "T");
                    element["fechaCompletado"] = _this.datePipe.transform(fin, 'dd/MM/yyyy');
                }
                console.log("detalle1", element);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_daruma_detalle_daruma__["a" /* DetalleDarumaPage */], {
                    descripcion: element["descripcion"],
                    nombre: element["nombre"],
                    fechaIni: element["fechaInicio"],
                    fechaFin: element["fechaCompletado"],
                    estado: element["estado"],
                    qrCode: element["qrcode"],
                    token: _this.toki
                });
            });
        }, function (error) {
            console.log("Error getDarumasDetalle", error);
        });
    };
    DarumasGralPage.prototype.goToScanQr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_daruma_qr_add_daruma_qr__["a" /* AddDarumaQrPage */]);
    };
    DarumasGralPage.prototype.cargaDarumasLst = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        // mandar llamar servicio para traer darumas
        this.ds.getToken().then(function (token) {
            _this.toki = token;
            _this.ds.getDarumas(token).subscribe(function (daruma) {
                console.log("EntraGetDarumas", daruma);
                if (daruma["result"].length == 0) {
                    _this.noDarumaFlag = true;
                }
                // let datePipe = new DatePipe("en-US");
                daruma["result"].forEach(function (element) {
                    // console.log("qr ",element["qrcode"]," estado ",element["estado"]);
                    // fechaInicio, fechaCompletado
                    if (element["fechaInicio"] != null) {
                        var inicio = void 0;
                        // console.log("fechaInicio",element["fechaInicio"]);
                        inicio = element["fechaInicio"].replace(/\s/g, "T");
                        // console.log("inicio",inicio);
                        element["fechaInicio"] = _this.datePipe.transform(inicio, 'dd/MM/yyyy');
                    }
                    if (element["fechaCompletado"] != null) {
                        var fin = void 0;
                        fin = element["fechaCompletado"].replace(/\s/g, "T");
                        element["fechaCompletado"] = _this.datePipe.transform(fin, 'dd/MM/yyyy');
                    }
                    // console.log("qr ",element);
                    _this.darumas.push(element);
                    if (element["estado"] == 6 && _this.darumasIncompletos == false) {
                        _this.darumasIncompletos = true;
                        _this.scheduleNotification();
                    }
                });
            }, function (error) {
                console.log("Error getDarumas", error);
            }, function () {
                _this.loader.dismiss();
            });
        }).catch(function (e) { return console.log('Error getToken', e); });
    };
    DarumasGralPage.prototype.obtieneUsuarioYNotif = function () {
        var _this = this;
        this.ds.getUser().then(function (user) {
            _this.usuario = user;
            // ciclo Notificaciones verifica y borra
            // verifica si ya hay una notificacion
            _this.localNotifications.getAll()
                .then(function (obtnNoti) {
                if (obtnNoti.length == 0) {
                    // console.log("obtnNoti: nada");
                }
                else {
                    // console.log("obtnNoti", obtnNoti);
                    // console.log("obtnNotiData", JSON.parse(obtnNoti["0"].data)["myData"]);
                    _this.localNotifications.cancelAll()
                        .then(function (cancelNoti) {
                        // console.log("cancelNoti",cancelNoti);
                        _this.localNotifications.clearAll()
                            .then(function (clearNoti) {
                            // console.log("limpiaNoti", clearNoti);
                        }).catch(function (e) { return console.log('Error clearAllNotif', e); });
                    }).catch(function (e) { return console.log('Error cancelAllNotif', e); });
                }
            }).catch(function (e) { return console.log('Error getAllNotif', e); });
        }).catch(function (e) { return console.log('Error getUser', e); });
    };
    DarumasGralPage.prototype.doAlert = function (titulo, sub, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: sub,
            message: mensaje,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    DarumasGralPage.prototype.alertOfNotification = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.localNotifications.on('trigger').subscribe(function (ras) {
                //let user = ras.data ? ras.data.myData : '';
                // console.log("msgOC",user);
                _this.doAlert(ras.title, "", ras.text);
            }, function (error) {
                // console.log("Error triggerNotifCons", error);
            });
        }).catch(function (e) { return console.log('Error pltReadycons', e); });
    };
    DarumasGralPage.prototype.ionViewWillEnter = function () {
        this.obtieneUsuarioYNotif();
        this.noDarumaFlag = false;
        this.darumasIncompletos = false;
    };
    DarumasGralPage.prototype.ionViewDidEnter = function () {
        this.darumas = [];
        this.cargaDarumasLst();
    };
    DarumasGralPage.prototype.ionViewDidLoad = function () {
        if (this.menuCtrl.isEnabled() == false) {
            this.menuCtrl.enable(true);
        }
    };
    DarumasGralPage.prototype.ionViewDidLeave = function () {
        this.loader.dismiss();
    };
    DarumasGralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-darumas-gral',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/darumas-gral/darumas-gral.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Darumas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colorFondo" padding-horizontal>\n  <ion-row class="paddingVerticalM centrarG"  align-items-end>\n    <p ion-text color="rosa" padding-left no-margin>\n        <b>Bienvenid&#64;: </b><span ion-text color="dark">{{ usuario }}</span>\n    </p>\n  </ion-row>\n  <ion-row justify-content-center padding-horizontal >\n    <div ion-col col-12 col-sm-6>\n        <button color="verde" ion-button type="button"\n          block full icon-left (click)="goToScanQr()" class="sombra">\n            <ion-icon name="qr-scanner"></ion-icon>\n            Agregar Daruma\n        </button>\n      </div>\n  </ion-row>\n  <ion-row class="paddingVerticalM centrarG"  align-items-end>\n    <div ion-col col-6>\n      <p ion-text color="rosa" padding-left no-margin>\n          <b>Elige un Daruma:</b>\n      </p>\n    </div>\n  </ion-row>\n  <!-- Lista de darumas -->\n  <ion-row>\n  <ion-list>\n    <ion-row justify-content-center padding-horizontal\n      *ngIf="noDarumaFlag == true">\n          <h3 ion-text color="azul">¡A&uacute;n no tienes Darumas!</h3>\n    </ion-row>\n    <ion-row>\n    <ion-item (click)="goToDetalle(daruma.qrcode, toki)" *ngFor="let daruma of darumas">\n      <ion-thumbnail item-start *ngIf="daruma.estado == 6">\n        <img src="../../assets/imgs/DarumaUnOjo.png ">\n      </ion-thumbnail>\n      <ion-thumbnail style="opacity: 0.5;" item-start *ngIf="daruma.estado == 8">\n        <img src="../../assets/imgs/DarumaDosOjo.png ">\n      </ion-thumbnail>\n      <h2>{{daruma.descripcion}}</h2>\n      <p>{{daruma.fechaInicio }}</p>\n      <p style="color: black" *ngIf="daruma.estado == 6" >Activo</p>\n      <p *ngIf="daruma.estado == 8" >\n        <span>{{daruma.fechaCompletado }}</span>\n        Completado\n      </p>\n      <button ion-button clear item-end>Ver</button>\n    </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-row>\n</ion-content>\n\n<!-- Footer -->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <div ion-col col-12 text-center no-padding>\n        <small>Powered by <strong>Devstar Novatech.</strong></small>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/darumas-gral/darumas-gral.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_local_notifications___["b" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* MenuController */]])
    ], DarumasGralPage);
    return DarumasGralPage;
}());

//# sourceMappingURL=darumas-gral.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDarumaQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__darumas_gral_darumas_gral__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario_daruma_formulario_daruma__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_daruma_service_daruma_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_qr_scanner__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddDarumaQrPage = (function () {
    function AddDarumaQrPage(navCtrl, navParams, qrScanner, alertCtrl, toastCtrl, viewController, storage, loadingCtrl, ds) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewController = viewController;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.ds = ds;
        this.isBackMode = false;
        this.isFlashLightOn = false;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
    }
    AddDarumaQrPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.showCamera();
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // console.log('Camera Permission Given');
                // start scanning
                _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    // console.log("Info QR: ", text);
                    // console.log("PROCESO");
                    //DarumasWS/asignar
                    _this.ds.getToken().then(function (token) {
                        _this.ds.isQrCodeRegistrado(text, token)
                            .subscribe(function (res) {
                            // console.log("resExiste", res);
                            if (res["result"] == true) {
                                var mensaje_1 = "Codigo Aceptado";
                                // console.log("existe");
                                /////////////Inicio////////////////////////
                                _this.ds.isQrCodeAsignado(text, token)
                                    .subscribe(function (res2) {
                                    // console.log("res2", res2);
                                    if (res2["result"] == false) {
                                        /////////////Fin/////////////////////////
                                        // console.log("no esta usado");
                                        //se almacena
                                        var nuevoDaruma = {
                                            "qrCode": text,
                                            "token": token
                                        };
                                        _this.storage.set("newDAruma", nuevoDaruma);
                                        _this.presentToast(mensaje_1);
                                        _this.goToFormDaruma();
                                        ///////////////Inicio///////////////////////
                                    }
                                    else {
                                        var titulo = "Error!";
                                        var texto = "El codigo ya ha sido usado";
                                        _this.doAlert(titulo, texto);
                                        // quitar comentario
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__darumas_gral_darumas_gral__["a" /* DarumasGralPage */]);
                                    }
                                }, function (error) {
                                    console.log("Error isQrCodeAsignado", error);
                                });
                                ////////////////Fin////////////////////////
                            }
                            else {
                                var titulo = "Error!";
                                var texto = "El codigo es incorrecto";
                                _this.doAlert(titulo, texto);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__darumas_gral_darumas_gral__["a" /* DarumasGralPage */]);
                            }
                        }, function (error) {
                            console.log("Error isQrCodeRegistrado", error);
                        });
                    }).catch(function (e) { return console.log('Error getToken', e); });
                }); //termina
                // show camera preview
                _this.qrScanner.show();
                // console.log("Info 2 QR: ", this.qrScanner.show());
                // console.log("PREVISTA");
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
                //alert
                console.log('Camera permission denied');
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                console.log('Permission denied for this runtime.');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    AddDarumaQrPage.prototype.closeModal = function () {
        if (this.navCtrl.canGoBack()) {
            this.viewController.dismiss();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__darumas_gral_darumas_gral__["a" /* DarumasGralPage */]);
        }
    };
    AddDarumaQrPage.prototype.toggleFlashLight = function () {
        /** Default isFlashLightOn is false ,
         * enable it if false **/
        //console.log("flashI: ", this.isFlashLightOn);
        this.isFlashLightOn = !this.isFlashLightOn;
        //console.log("flash2: ", this.isFlashLightOn);
        if (this.isFlashLightOn) {
            this.qrScanner.enableLight();
            //console.log("flashEntra: ", this.isFlashLightOn);
        }
        else {
            this.qrScanner.disableLight();
            //console.log("Sino: ", this.isFlashLightOn);
        }
    };
    AddDarumaQrPage.prototype.toggleCamera = function () {
        /** Toggle Camera , Default is isBackMode is true , toggle
         * to false to enable front camera and vice versa.
         *
         * @type {boolean}
         */
        //console.log("camO", this.isBackMode);
        this.isBackMode = !this.isBackMode;
        //console.log("camN", this.isBackMode);
        if (this.isBackMode) {
            this.qrScanner.useFrontCamera();
            //console.log("camEntra", this.isBackMode);
        }
        else {
            this.qrScanner.useBackCamera();
            //console.log("camSino", this.isBackMode);
        }
    };
    AddDarumaQrPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AddDarumaQrPage.prototype.doAlert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        });
        alert.present();
    };
    AddDarumaQrPage.prototype.ionViewWillLeave = function () {
        this.qrScanner.hide(); // hide camera preview
        this.scanSub.unsubscribe(); // stop scanning
        this.hideCamera();
    };
    AddDarumaQrPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    AddDarumaQrPage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    AddDarumaQrPage.prototype.goToFormDaruma = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__formulario_daruma_formulario_daruma__["a" /* FormularioDarumaPage */]);
    };
    AddDarumaQrPage.prototype.ionViewDidLoad = function () {
        this.loader.dismiss();
    };
    AddDarumaQrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-add-daruma-qr',template:/*ion-inline-start:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/add-daruma-qr/add-daruma-qr.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agregar Daruma</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n<div class="colorFondo2">\n  <ion-row class="fondoScannerAltura" ion-col ion-col-8 align-items-center\n    justify-content-center>\n    <div  class="cuadro">\n\n    </div>\n  </ion-row>\n</div>\n\n<ion-fab bottom right margin>\n  <button ion-fab><ion-icon name="md-options"></ion-icon></button>\n  <ion-fab-list side="top">\n    <button (click)="toggleFlashLight()" ion-fab><ion-icon name="flash">\n\n    </ion-icon></button>\n    <button ion-fab (click)="toggleCamera()"><ion-icon name="reverse-camera"></ion-icon> </button>\n\n  </ion-fab-list>\n</ion-fab>\n</ion-content>\n\n<!-- Footer -->\n<ion-footer>\n<ion-grid no-padding>\n  <ion-row no-padding>\n    <div ion-col col-12 text-center no-padding>\n      <small>Powered by <strong>Devstar Novatech.</strong></small>\n    </div>\n  </ion-row>\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/javierperez/Desktop/Daruma/darumaMacV3/src/pages/add-daruma-qr/add-daruma-qr.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_daruma_service_daruma_service__["a" /* DarumaServiceProvider */]])
    ], AddDarumaQrPage);
    return AddDarumaQrPage;
}());

//# sourceMappingURL=add-daruma-qr.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordValidatorProvider = (function () {
    function PasswordValidatorProvider(http) {
        this.http = http;
        console.log('Hello PasswordValidatorProvider Provider');
    }
    PasswordValidatorProvider.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    PasswordValidatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PasswordValidatorProvider);
    return PasswordValidatorProvider;
}());

//# sourceMappingURL=password-validator.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map