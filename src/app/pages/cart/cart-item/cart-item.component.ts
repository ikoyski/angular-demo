import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartItem } from '../../../models/cart-item.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
	selector: 'app-cart-item',
	imports: [ButtonComponent, RouterLink],
	template: `
    	<div class="bg-white shadow-md rounded-xl p-6 flex gap-4 items-center">
    		<a routerLink="/product/{{item().product.id}}" title="{{item().product.title}}" >
    			<img [src]="item().product.image" class="w-[50px] h-[50px] object-contain" />
    		</a>
    		<div class="flex flex-col">
    			<span class="text-md font-bold">
    				<a routerLink="/product/{{item().product.id}}" title="{{item().product.title}}" >
    					{{ item().product.title }}
    				</a>
    			</span>
    			<span class="text-sm">{{ 'PHP ' + item().product.price }}</span>
    		</div>
    		<div class="flex-1"></div>
    		<input type="text" class="border w-9 px-1" name="quantity" value="{{ item().quantity }}" />
    		<app-button label="Update" (btnClicked)="cartService.removeCartItem(item().product.id)" />
    		<app-button label="X" (btnClicked)="cartService.removeCartItem(item().product.id)" />    		
    	</div>
  	`,
	styles: ``
})
export class CartItemComponent {

	cartService = inject(CartService);

	item = input.required<CartItem>();

}
