import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../../models/cart-item.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
	selector: 'app-cart-item',
	imports: [ButtonComponent, RouterLink, FormsModule],
	template: `
    	<div class="bg-white shadow-md rounded-xl p-6 flex gap-4 items-top">
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
    			<div class="flex text-sm items-center">
	    			Qty: &nbsp; <input type="number" class="border w-13 px-1 text-right" [(ngModel)]="item().quantity" />&nbsp; 
		    		<app-button label="Update" (btnClicked)="cartService.updateCartItemQuantity(item().product, item().quantity)" />
		    	</div>    		
    		</div>
    		<div class="flex-1"></div>
    		<div class="flex">
	    		<app-button label="X" class="align-top" (btnClicked)="cartService.removeCartItem(item().product.id)" />
	    	</div> 
    	</div>
  	`,
	styles: ``
})
export class CartItemComponent {

	cartService = inject(CartService);

	item = input.required<CartItem>();

}
