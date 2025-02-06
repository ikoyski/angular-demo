import { Component, inject } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-products-list',
	imports: [ProductCardComponent],
	template: `
   		<div class="p-8 gap-4 grid 
   			grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
   		@for (product of productService.products(); track product.id) {
			<app-product-card [product]="product" />
		} 
   		</div>	
  	`,
	styles: ``
})
export class ProductsListComponent {
	
	async ngOnInit() {
		this.productService.fetchProducts();
	}
		
	productService = inject(ProductService);
		
}
