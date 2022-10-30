import { MessageModule } from './message/message.module';
import { AccountModule } from './account/account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReviewStoreModule } from './review-store/review-store.module';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
;


@NgModule({
  declarations: [AppComponent],
  imports: [
    AccountModule,
    MessageModule,
    OrderModule,
    ProductModule,
    ReviewStoreModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
