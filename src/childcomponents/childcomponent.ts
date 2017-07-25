import { Component, Input,OnChanges,SimpleChange } from '@angular/core';
@Component({
    selector:'child-component',
    template:`<h2>{{text}}</h2>
    <button (click)="changetext()">Change</button>
    <h3> this is ChildComponent </h3>`
})
export class ChildComponent implements OnChanges {
    @Input() text :string;

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        console.log(changes);
    }

    changetext(){
        this.text = 'child change';
    }
}