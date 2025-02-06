import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
	selector: 'app-cart-item',
	imports: [ButtonComponent, RouterLink],
	template: `
    	<div class="bg-white shadow-md rounded-xl p-6 flex gap-4 items-center">
    		<a routerLink="/product/{{item().id}}" title="{{item().title}}" >
    			<img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
    		</a>
    		<div class="flex flex-col">
    			<span class="text-md font-bold">
    				<a routerLink="/product/{{item().id}}" title="{{item().title}}" >
    					{{ item().title }}
    				</a>
    			</span>
    			<span class="text-sm">{{ 'PHP ' + item().price }}</span>
    		</div>
    		<div class="flex-1"></div>
    		<app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)" />
    	</div>
  	`,
	styles: ``
})
export class CartItemComponent {

	cartService = inject(CartService);

	item = input.required<Product>();
	
}
