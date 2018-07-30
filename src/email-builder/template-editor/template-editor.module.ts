import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule, MatInputModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MccColorPickerModule } from 'material-community-components';

import { TemplateEditor } from './template-editor.component';
import { LeftToolbar } from './left-toolbar/left-toolbar.component';
import { TemplateToolCard } from './left-toolbar/template-tool-card.component';

import { RightToolbar } from './right-toolbar/right-toolbar.component';
import { GenericConfigurator } from './right-toolbar/blocks/generic-configurator.component';
import { PaddingColorConfigurator } from './right-toolbar/blocks/padding-color-configurator.component';
import { TextConfigurator } from './right-toolbar/blocks/text-configurator.component';
import { OrientationConfigurator } from './right-toolbar/blocks/orientation-configurator.component';
import { UrlConfigurator } from './right-toolbar/blocks/url-configurator.component';

import { EditorCanvas } from './editor-canvas/editor-canvas.component';
import { GenericSection } from './editor-canvas/sections/generic-section.component';
import { TitleSection } from './editor-canvas/sections/title-section.component';
import { TextSection } from './editor-canvas/sections/text-section.component';
import { DividerSection } from './editor-canvas/sections/divider-section.component';
import { ButtonSection } from './editor-canvas/sections/button-section.component';
import { LinkSection } from './editor-canvas/sections/link-section.component';
import { SignatureSection } from './editor-canvas/sections/signature-section.component';

@NgModule({
    declarations: [
        TemplateEditor,
        LeftToolbar,
        TemplateToolCard,
        EditorCanvas,
        GenericSection,
        TitleSection,
        TextSection,
        DividerSection,
        ButtonSection,
        LinkSection,
        SignatureSection,
        RightToolbar,
        GenericConfigurator,
        PaddingColorConfigurator,
        TextConfigurator,
        OrientationConfigurator,
        UrlConfigurator
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
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
