import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: any = []
  productList: any = new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
    return this.productList.asObservable()
  }

  addToCart(product: any){
    this.cartList.push(product)
    this.productList.next(this.cartList)
  }

  removeFromCart(product: any){
    this.cartList.map((cartItem: any, index: any) => {
      if(product.id === cartItem.id){
        this.cartList.splice(index, 1)
      }
    })
    this.productList.next(this.cartList)
  }
}
