import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-button',
	imports: [],
	template: `
	    <button (click)="btnClicked.emit()" class="text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate text-sm">
	    	{{ label() }}
	    </button>
  	`,
	styles: ``
})
export class ButtonComponent {

	label = input('');

	btnClicked = output();

}
