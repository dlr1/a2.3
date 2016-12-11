import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {C1, C2} from '../dynamic/c1';
import {FormTextComponent} from './formText.component';

@Component({
  selector: 'base-form',
  moduleId: module.id,
  templateUrl: 'baseForm.template.html'     
})
export class BaseFormComponent {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
 public myForm: FormGroup; // our form model

  formTypes: Array<{key:string, type:Component}> = [
      {key:'c1',type:C1},
      {key:'c2',type:C2},
      {key:'ft',type:FormTextComponent}
  ]
  constructor(private cfr: ComponentFactoryResolver, private _fb:FormBuilder) {
    this.myForm = this._fb.group({});
  }

getComponent(key:String): any
{
    return this.formTypes.find(x=>x.key === key).type;
}
  ngAfterViewInit() {
    setTimeout(() => {
        this.target.clear();
    
    let compFactory = this.cfr.resolveComponentFactory(this.getComponent('c1'));

    this.target.createComponent(compFactory);
    compFactory = this.cfr.resolveComponentFactory(this.getComponent('c2'));

    this.target.createComponent(compFactory);
    compFactory = this.cfr.resolveComponentFactory(this.getComponent('ft'));
    
    let ctrl = this.target.createComponent(compFactory);
    ctrl.instance.data = {label:'aaa',placeholder:'enter something'};
    }, 0);
  
  }
}