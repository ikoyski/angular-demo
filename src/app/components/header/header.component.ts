import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
	selector: 'app-header',
	imports: [PrimaryButtonComponent, RouterLink],
	template: `
	    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
	    	<a class="text-xl" routerLink="/">My Angular Store</a>
	    	<app-primary-button 
	    		[label]="'Cart (' + cartService.cart().length + ')'"
	    		routerLink="/cart"
	    	/>
	    </div>
  	`,
	styles: ``
})
export class HeaderComponent {

	cartService = inject(CartService);

}
