import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
	selector: 'app-cart',
	imports: [CartItemComponent, OrderSummaryComponent],
	template: `
	    <div class="p-6 flex flex-col gap-4">
	    	<h2 class="text-2xl">Shopping Cart</h2>
	@if (cartService.cartItems().length > 0) {
	    @for (item of cartService.cartItems(); track item.product) {
			<app-cart-item [item]="item" />
		}
			<app-order-summary />
	} @else {
			<div class="bg-white shadow-md rounded-xl p-6 flex gap-4 items-top">
				<div class="mx-auto">Your cart is empty</div>
			</div>
	}
			
	    </div>	    
  	`,
	styles: ``
})
export class CartComponent {

	cartService = inject(CartService);

}
