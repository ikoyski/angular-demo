import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	cartItems = signal<CartItem[]>([]);

	addCartItem(product: Product, quantity: number) {
		if (this.cartItems().find(item => item.product.id === product.id) !== undefined) {
			let itemIndex = this.cartItems().findIndex(item => item.product.id === product.id);
			this.cartItems()[itemIndex].quantity += quantity;
			this.cartItems.set([...this.cartItems()]);
		} else {
			this.cartItems.set([...this.cartItems(), {
				"product": product,
				"quantity": quantity
			}]);
		}
	}

	updateCartItemQuantity(product: Product, quantity: number) {
		if (quantity > 0) {
			if (this.cartItems().find(item => item.product.id === product.id) !== undefined) {
				let itemIndex = this.cartItems().findIndex(item => item.product.id === product.id);
				this.cartItems()[itemIndex].quantity = quantity;
				this.cartItems.set([...this.cartItems()]);
			}
		} else {
			this.removeCartItem(product.id);
		}
	}

	removeCartItem(id: number) {
		this.cartItems.set(this.cartItems().filter((c) => c.product.id !== id));
	}

	constructor() { }

}
