import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-products-detail',
	imports: [PrimaryButtonComponent, ButtonComponent], 
	template: `
	@for (product of productService.products(); track product.id) {
		@if (product.id == productId) {
			<div class="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6 relative">
		  		<div class="mx-auto">
		  			<img [src]="product.image" 
			  				class="w-[300px] h-[300px] object-contain mt-2" 
			  				alt="{{product.title}}" title="{{product.title}}" />
		  		</div>
		  		<div class="flex flex-col mt-2">
		  			<span class="text-md font-bold">
		  				{{product.title}}
		  			</span>
		  			<span>{{ 'PHP ' + product.price}}</span>
		  			<div class="text-md my-5 text-justify">
		  				{{product.description}}
		  			</div>
		  			
		  		@if (product.stock) {					
		  			<app-primary-button 
		  				label="Add to Cart" class="mt-3"
		  				(btnClicked)="cartService.addCartItem(product, 1)" />
		  		} @else {
					<app-button 
		  				label="Out of stock" class="mt-3" />
				}	  				
		  		</div>
		  		<span class="absolute top-2 right-3 font-bold" 
		  			[class]="product.stock ? 'text-green-500' : 'text-red-500'">
		  		@if (product.stock) {
					In stock
				} @else {
					Out of stock
				}
		  		</span>
		  	</div>
		}
	}
	`,
	styles: ``
})
export class ProductsDetailComponent {

	async ngOnInit() {
		if(this.productService.products().length == 0) {
			this.productService.fetchProducts();
		}
		
		this.route.params.subscribe(params => {
			this.productId = params['id'];
		});
	}

	cartService = inject(CartService);
	productService = inject(ProductService);

	productId = null;

	constructor(private route: ActivatedRoute) { }

}
