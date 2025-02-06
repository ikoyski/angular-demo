import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	products = signal<Product[]>([]);

	async fetchProducts() {
		let res = await fetch('https://fakestoreapi.com/products');
		let data = await res.json();
		this.products.set(data)
		
		/* set random stock value because fake data does not have it */ 
		let min = Math.ceil(0);
		let max = Math.floor(10);
		for (const item of this.products()) {
			if (item.id != 10 && item.id != 11) {
				item.stock =  Math.floor(Math.random() * (max - min)) + min;
			}
		}
	}

	constructor() { }
}
