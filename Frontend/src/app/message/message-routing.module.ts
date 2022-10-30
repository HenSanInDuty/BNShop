import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from '../order/component/order-detail/order-detail.component';
import { OrderRefundDetailComponent } from '../order/component/order-refund/order-refund-detail/order-refund-detail.component';
import { OrderRefundListComponent } from '../order/component/order-refund/order-refund-list/order-refund-list.component';
import { OrderRefundComponent } from '../order/component/order-refund/order-refund.component';
import { OrderComponent } from '../order/component/order/order.component';
import { OrderListComponent } from '../order/order-list/order-list.component';
import { AddProductComponent } from '../product/component/add-product/add-product.component';
import { ProductListComponent } from '../product/component/product-list/product-list.component';
import { ReviewProductComponent } from '../review-store/component/review-product/review-product.component';
import { ReviewStoreComponent } from '../review-store/component/review-store/review-store.component';
import { ReviewTransportersComponent } from '../review-store/component/review-transporters/review-transporters.component';
import { ReviewComponent } from '../review-store/review/review.component';
import { ChatComponent } from './component/chat/chat.component';
import { DasboardComponent } from './component/dasboard/dasboard.component';
import { ModalBlockComponent } from './component/modal-block/modal-block.component';
import { ModalCusComponent } from './component/modal-cus/modal-cus.component';
import { ModalUnblockComponent } from './component/modal-unblock/modal-unblock.component';
import { RemoveMessageComponent } from './component/remove-message/remove-message.component';
import { SettingMessageComponent } from './component/setting-message/setting-message.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  {
    path: 'admin',
      component: LayoutAdminComponent,
      children: 
      [
        { path: '',  component: DasboardComponent,},
        { path: 'chat', component: ChatComponent,  },
        { path: 'setting-message', component: SettingMessageComponent },
        { path: 'order', 
            component: OrderListComponent,   
            children: 
            [
                { path: 'order-list', component: OrderComponent },
                { path: 'order-detail', component: OrderDetailComponent },
                { path: 'order-refund', component: OrderRefundComponent, 
                children: 
                [
                    { path: '', component: OrderRefundListComponent },                
                    { path: 'order-refund-detail', component: OrderRefundDetailComponent },                
                    // { path: '', redirectTo: '/admin/order/order-list', pathMatch: 'full' },   
                ] 
              },
            ] 
        },
        { path: 'review', component: ReviewComponent, children:
            [
              
              { path: 'reviewStore', component: ReviewStoreComponent },
              { path: 'reviewProduct', component: ReviewProductComponent },
              { path: 'reviewTransporters', component: ReviewTransportersComponent },
            ]
        },
        { path: 'product', component: ReviewComponent, children:
            [
              
              { path: 'productList', component: ProductListComponent },
              { path: 'productAdd', component: AddProductComponent },
             
            ]
        },
      
      ],
  },
  { path: 'modal', component: ModalBlockComponent },
  { path: 'unmodal', component: ModalUnblockComponent },
  { path: 'remove', component: RemoveMessageComponent },
  { path: 'list-message', component: ModalCusComponent },
  { path: '**', redirectTo: 'admin/chat' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
