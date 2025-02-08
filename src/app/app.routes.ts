import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ProductsListComponent
	},
	{
		path: 'cart',
		pathMatch: 'full',
		component: CartComponent
	},
	{
		path: 'products/:id',
		pathMatch: 'full',
		component: ProductsDetailComponent
	}
];
