import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, ButtonComponent, RouterLink],
  template: `
  	<div class="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6 relative">
  		<div class="mx-auto">
  			<a routerLink="/product/{{product().id}}" title="{{product().title}}" >
	  			<img [src]="product().image" 
	  				class="w-[200px] h-[100px] object-contain mt-2" 
	  				alt="{{product().title}}" title="{{product().title}}" />
	  		</a>
  		</div>
  		<div class="flex flex-col mt-2">
  			<span class="text-md font-bold overflow-hidden truncate">
  				<a routerLink="/product/{{product().id}}" title="{{product().title}}" >
  					{{product().title}}
  				</a>
  			</span>
  			<span class="text-sm">{{ 'PHP ' + product().price}}</span>
  		@if (product().stock) {
  			<app-primary-button 
  				label="Add to Cart" class="mt-3"
  				(btnClicked)="cartService.addToCart(product())" />
  		} @else {
			<app-button 
  				label="Out of stock" class="mt-3" />
		}
  				
  		</div>
  		
  		<span class="absolute top-2 right-3 text-sm font-bold" 
  			[class]="product().stock ? 'text-green-500' : 'text-red-500'">
  		@if (product().stock) {
			In stock
		} @else {
			Out of stock
		}
  		</span>
  	</div>
  `,
  styles: ``
})
export class ProductCardComponent {
	
	cartService = inject(CartService);

	product = input.required<Product>();
	
}
