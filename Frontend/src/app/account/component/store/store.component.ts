import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listStoreDTO, storeDTO } from 'src/app/model/store.model';
import { AccountService } from 'src/app/services/account.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  host: { class: ' flex flex-col overflow-hidden' },
})
export class StoreComponent implements OnInit {
  // public stores = [
  //   {
  //     "id": "815595257275572",
  //     "code": "shop05",
  //     "name": "Baby shop",
  //     "avatarUrl": "https://tshop.tpos.dev/Upload/637546783369506683.png",
  //     "coverImageUrl": null,
  //     "address": "19 Bà hom",
  //     "provinceCode": "79",
  //     "districtCode": "775",
  //     "wardCode": "27349",
  //     "fullAddress": null,
  //     "phone": "0917854231",
  //     "email": "string",
  //     "shopManager": "Baby shark",
  //     "ownerId": "string",
  //     "isActive": true,
  //     "flag": 0,
  //     "ratingForService": 0,
  //     "ratingForProduct": 0,
  //     "likeCount": 2,
  //     "followCount": 0,
  //     "companyId": "string",
  //     "facebookUrl": null,
  //     "shopeeUrl": "https://shopee.vn/babyhopstore",
  //     "shopDescription": null
  //   },
  //   {
  //     "id": "8155298472159123",
  //     "code": "shop01",
  //     "name": "Bách hóa shop",
  //     "avatarUrl": "https://tshop.tpos.dev/Upload/637608455812370036.jpg",
  //     "coverImageUrl": null,
  //     "address": "15 Bà hom",
  //     "provinceCode": "79",
  //     "districtCode": "775",
  //     "wardCode": "27349",
  //     "fullAddress": null,
  //     "phone": "0937974922",
  //     "email": "string",
  //     "shopManager": "Vy Vy",
  //     "ownerId": "6687648839280521",
  //     "isActive": true,
  //     "flag": 0,
  //     "ratingForService": 0,
  //     "ratingForProduct": 0,
  //     "likeCount": 0,
  //     "followCount": 0,
  //     "companyId": "string",
  //     "facebookUrl": "string",
  //     "shopeeUrl": "string",
  //     "shopDescription": null
  //   },
  //   {
  //     "id": "8156593929457899",
  //     "code": "shop06",
  //     "name": "Cam Nguyen",
  //     "avatarUrl": null,
  //     "coverImageUrl": null,
  //     "address": "12 CN1 Tan Phu, HCM",
  //     "provinceCode": "string",
  //     "districtCode": "string",
  //     "wardCode": "string",
  //     "fullAddress": null,
  //     "phone": "0354309399",
  //     "email": "string",
  //     "shopManager": "Cam Nguyen",
  //     "ownerId": "string",
  //     "isActive": false,
  //     "flag": 0,
  //     "ratingForService": 0,
  //     "ratingForProduct": 0,
  //     "likeCount": 0,
  //     "followCount": 0,
  //     "companyId": "string",
  //     "facebookUrl": "string",
  //     "shopeeUrl": "https://shopee.vn/vntrade",
  //     "shopDescription": null
  //   },
  // ];
  stores:storeDTO[]=[];
  storesId:number[]=[];
  constructor(
      private storeService: StoreService,
      private accountService: AccountService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.getListStore()
   
  }
 
  getListStore():any {
    if(localStorage.getItem('accessToken')){

      this.storeService.getStore().subscribe(
        (res:listStoreDTO) => {
          this.stores = [...res.items]
        },
        err => {
          console.log(err)
        }
        )
      }
      else {
        this.router.navigate(['/account'])
      }
  }
  getId(id:any):any {
   localStorage.setItem('shopid',id)
    
  }
}
