import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { Base64 } from '@ionic-native/base64';
import { Items } from '../mocks/providers/items';
import { Settings, Api } from '../providers';
import { MyApp } from './app.component';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { PipesModule } from 'w-ng5';
import { PropertiesProvider } from '../providers/properties/properties';
import { SignupServiceProvider } from '../providers/signup-service/signup-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { BookingServiceProvider } from '../providers/booking-service/booking-service';
import { ModalServiceProvider } from '../providers/modal-service/modal-service';
import { ListstadiumServiceProvider } from '../providers/liststadium-service/liststadium-service';
import { ListFutsalFieldServiceProvider } from '../providers/list-futsal-field-service/list-futsal-field-service';
import { InputFutsalFieldServiceProvider } from '../providers/input-futsal-field-service/input-futsal-field-service';
import { DetailFutsalFieldServiceProvider } from '../providers/detail-futsal-field-service/detail-futsal-field-service';
import { ListFieldServiceProvider } from '../providers/list-field-service/list-field-service';
import { DetailFieldServiceProvider } from '../providers/detail-field-service/detail-field-service';
import { ListBookingServiceProvider } from '../providers/list-booking-service/list-booking-service';
import { DetailBookingServiceProvider } from '../providers/detail-booking-service/detail-booking-service';

// import {DashboardPage} from '../pages/dashboard/dashboard';



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    Items,
    ImagePicker,
    Crop,
    Base64,
    Camera,
    SplashScreen,
    StatusBar,
    DatePipe,
    CurrencyPipe,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PropertiesProvider,
    SignupServiceProvider,
    LoginServiceProvider,
    ProfileServiceProvider,
    BookingServiceProvider,
    ModalServiceProvider,
    ListstadiumServiceProvider,
    ListFutsalFieldServiceProvider,
    InputFutsalFieldServiceProvider,
    DetailFutsalFieldServiceProvider,
    ListFieldServiceProvider,
    DetailFieldServiceProvider,
    ListBookingServiceProvider,
    DetailBookingServiceProvider
  ]
})
export class AppModule { }
