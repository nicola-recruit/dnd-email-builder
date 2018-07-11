import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material';

import { TemplateEditor } from './template-editor.component';
import { LeftToolbar } from './left-toolbar/left-toolbar.component';
import { TemplateToolCard } from './left-toolbar/template-tool-card.component';

import { EditorCanvas } from './editor-canvas/editor-canvas.component';

@NgModule({
    declarations: [
        TemplateEditor,
        LeftToolbar,
        TemplateToolCard,
        EditorCanvas
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        TemplateEditor
    ],
    providers: [],
    bootstrap: []
})
export class TemplateEditorModule { }
