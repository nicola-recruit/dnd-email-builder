import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MccColorPickerModule } from 'material-community-components';

import { TemplateEditor } from './template-editor.component';
import { LeftToolbar } from './left-toolbar/left-toolbar.component';
import { TemplateToolCard } from './left-toolbar/template-tool-card.component';

import { RightToolbar } from './right-toolbar/right-toolbar.component';
import { GenericBlock } from './right-toolbar/blocks/generic-block.component';

import { EditorCanvas } from './editor-canvas/editor-canvas.component';
import { GenericSection } from './editor-canvas/sections/generic-section.component';
import { TitleSection } from './editor-canvas/sections/title-section.component';
import { PaddingColorConfigurationBlock } from './right-toolbar/blocks/padding-color-configuration-block.component';


@NgModule({
    declarations: [
        TemplateEditor,
        LeftToolbar,
        TemplateToolCard,
        EditorCanvas,
        GenericSection,
        TitleSection,
        RightToolbar,
        GenericBlock,
        PaddingColorConfigurationBlock
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MccColorPickerModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        TemplateEditor
    ],
    providers: [],
    bootstrap: []
})
export class TemplateEditorModule { }
