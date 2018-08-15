import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';

import { TemplateEditorModule } from './template-editor/template-editor.module';
import { EmailBuilder } from './email-builder.component';

@NgModule({
    declarations: [
        EmailBuilder
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatToolbarModule,
        TemplateEditorModule
    ],
    providers: [],
    bootstrap: [EmailBuilder]
})
export class EmailBuilderModule { }
