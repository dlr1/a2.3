import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import {C1, C2} from './c1';

@NgModule({
    imports: [],
    declarations: [C1, C2],
    entryComponents: [C1, C2]
})
export class DynamicModule {
    

}
// export class DynamicModule {

//     constructor(){

//     }

//   static withComponents(components: any[]) {
//     return {
//       ngModule: DynamicModule,
//       providers: [
//         { 
//           provide: ANALYZE_FOR_ENTRY_COMPONENTS,
//           useValue: components,
//           multi: true
//         }
//       ]
//     }
//   }
// }
