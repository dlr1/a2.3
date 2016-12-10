import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import {C1, C2} from '../dynamic/c1';

@Component({
  selector: 'base-form',
  template: `   
   <div #target></div>
  `
})
export class BaseFormComponent {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  formTypes: Array<{key:string, type:Component}> = [
      {key:'c1',type:C1},
      {key:'c2',type:C2}
  ]
  constructor(private cfr: ComponentFactoryResolver) {}

getComponent(key:String): any
{
    return this.formTypes.find(x=>x.key === key).type;
}
  ngAfterViewInit() {
    this.target.clear();
    
    let compFactory = this.cfr.resolveComponentFactory(this.getComponent('c1'));

    this.target.createComponent(compFactory);
    compFactory = this.cfr.resolveComponentFactory(this.getComponent('c2'));

    this.target.createComponent(compFactory);
    compFactory = this.cfr.resolveComponentFactory(this.getComponent('c2'));

    this.target.createComponent(compFactory);
  }
}