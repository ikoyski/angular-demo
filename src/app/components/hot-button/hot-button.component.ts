import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-hot-button',
	imports: [],
	template: `
	    <button (click)="btnClicked.emit()" class="bg-orange-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90 text-sm">
	    	{{ label() }}
	    </button>
  	`,
	styles: ``
})
export class HotButtonComponent {
	
	label = input('');

	btnClicked = output();
	
}
