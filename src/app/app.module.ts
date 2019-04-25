import { RegistroPage } from './../pages/registro/registro';
import { RecuperarPage } from './../pages/recuperar/recuperar';
import { InicioLoginPage } from './../pages/inicio-login/inicio-login';
import { FormularioDarumaPage } from './../pages/formulario-daruma/formulario-daruma';
import { DetalleDarumaPage } from './../pages/detalle-daruma/detalle-daruma';
import { DarumasGralPage } from './../pages/darumas-gral/darumas-gral';
import { CambioPassPage } from './../pages/cambio-pass/cambio-pass';
import { AjustesPage } from './../pages/ajustes/ajustes';
import { AddDarumaQrPage } from './../pages/add-daruma-qr/add-daruma-qr';
import { AcercaPage } from './../pages/acerca/acerca';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
import { QRScanner } from "@ionic-native/qr-scanner";
import { DatePipe } from '@angular/common';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { DarumaServiceProvider } from '../providers/daruma-service/daruma-service';
import { PasswordValidatorProvider } from '../providers/password-validator/password-validator';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp
    ,
    AcercaPage,
    AddDarumaQrPage,
    AjustesPage,
    CambioPassPage,
    DarumasGralPage,
    DetalleDarumaPage,
    FormularioDarumaPage,
    InicioLoginPage,
    RecuperarPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(
      {name: "darumaBDM"}
    ),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcercaPage,
    AddDarumaQrPage,
    AjustesPage,
    CambioPassPage,
    DarumasGralPage,
    DetalleDarumaPage,
    FormularioDarumaPage,
    InicioLoginPage,
    RecuperarPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    DatePipe,
    InAppBrowser,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DarumaServiceProvider,
    PasswordValidatorProvider
  ]
})
export class AppModule {}
