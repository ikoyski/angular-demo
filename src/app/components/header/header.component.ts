import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
	selector: 'app-header',
	imports: [PrimaryButtonComponent, RouterLink],
	template: `
	    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
	    	<a class="text-xl" routerLink="/">Angular Store</a>
	    	<app-primary-button 
	    		[label]="'Cart (' + itemCount() + ')'"
	    		routerLink="/cart"
	    	/>
	    </div>
  	`,
	styles: ``
})
export class HeaderComponent {

	cartService = inject(CartService);
	
	itemCount = computed(() => {
		var itemCount = 0.00;
		for (const cartItem of this.cartService.cartItems()) {
			itemCount += cartItem.quantity;
		}
		return itemCount;
	});
	
}
