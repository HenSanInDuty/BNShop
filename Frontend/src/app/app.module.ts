import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TDS_I18N, vi_VN } from 'tds-ui/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Đa ngôn ngữ
import localeVi from '@angular/common/locales/vi';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '@core/lib.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { TDSEchartsModule } from 'tds-report';
import { THRMApiModule } from '@commom/hrm/thrm-api.module';
import { environment } from 'src/environments/environment';
import { InterceptorCore } from '@core/authentication/HttpInterceptor';

// Thiết lập tiếng Việt
registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    ScrollingModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
    TDSEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    THRMApiModule.forRoot({rootUrl:environment.apiBNShop})
  ],

  providers: [{ provide: TDS_I18N, useValue: vi_VN },{provide: LOCALE_ID, useValue: 'vi-VN' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
