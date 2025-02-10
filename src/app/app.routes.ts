import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/profiles/login/login.component';
import { SignupComponent } from './pages/profiles/signup/signup.component';
import { ChangePasswordComponent } from './pages/profiles/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/profiles/forgot-password/forgot-password.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { OrdersDetailComponent } from './pages/orders-detail/orders-detail.component';

export const routes: Routes = [
	{
		path: '',
		title: 'Angular Store',
		redirectTo: '/products',
		pathMatch: 'full'
	},
	{
		path: 'products',
		title: 'Products',
		pathMatch: 'full',
		component: ProductsListComponent
	},
	{
		path: 'products/:id',
		title: 'Product In Detail',
		pathMatch: 'full',
		component: ProductsDetailComponent
	},
	{
		path: 'cart',
		title: 'Shopping Cart',
		pathMatch: 'full',
		component: CartComponent
	},	
	{
		path: 'login',
		title: 'Login',
		pathMatch: 'full',
		component: LoginComponent
	},
	{
		path: 'signup',
		title: 'Signup',
		pathMatch: 'full',
		component: SignupComponent
	},
	{
		path: 'change-password',
		title: 'Change Password',
		pathMatch: 'full',
		component: ChangePasswordComponent
	},
	{
		path: 'forgot-password',
		title: 'Forgot Password',
		pathMatch: 'full',
		component: ForgotPasswordComponent
	},
	{
		path: 'orders',
		title: 'Orders',
		pathMatch: 'full',
		component: OrdersListComponent
	},
	{
		path: 'orders/:id',
		title: 'Order In Detail',
		pathMatch: 'full',
		component: OrdersDetailComponent
	},
];
