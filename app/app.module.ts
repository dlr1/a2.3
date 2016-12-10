import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {PageNotFoundComponent} from './pagenotfound';
import {AppComponent}  from './app.component';
import {RouterLink, RouterModule} from '@angular/router';

import {DynamicModule} from './dynamic/dynamic.module';
import {DynamicComponent} from './formComponents/dynamicComponent';
import {FormTextComponent} from './formComponents/formText.component';

import {BaseFormComponent} from './formComponents/baseform.component';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot([]), HttpModule, FormsModule, DynamicModule],
    declarations: [AppComponent, FormTextComponent, DynamicComponent, BaseFormComponent],
    entryComponents: [FormTextComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
