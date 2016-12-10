import { Component } from '@angular/core';
import {FormTextComponent} from './formComponents/formText.component';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl:'app.component.html'
})
export class AppComponent  {
    componentData: any;
    constructor() {
    }

    ngAfterViewInit() {
        this.componentData = {
            component: FormTextComponent,
            inputs: {
                showNum: 9
            }}
    }
}
