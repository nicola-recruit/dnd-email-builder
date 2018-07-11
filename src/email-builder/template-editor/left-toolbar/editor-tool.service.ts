import { Injectable } from '@angular/core';
import { TemplateEditorTool, TemplateEditorToolFactory } from '../template-editor.interfaces';
import { TitleToolFactory } from './classes/toolFactories/TitleToolFactory';
import { TextToolFactory } from './classes/toolFactories/TextToolFactory';
import { DividerToolFactory } from './classes/toolFactories/DividerToolFactory';
import { ButtonToolFactory } from './classes/toolFactories/ButtonToolFactory';
import { LinkToolFactory } from './classes/toolFactories/LinkToolFactory';
import { ImageToolFactory } from './classes/toolFactories/ImageToolFactory';
import { SignatureToolFactory } from './classes/toolFactories/SignatureToolFactory';
import { SocialToolFactory } from './classes/toolFactories/SocialToolFactory';

@Injectable({
    providedIn: 'root',
})
export class EditorToolService {

    private editorToolRegistry: TemplateEditorTool[];

    constructor () {
        this.editorToolRegistry = this.buildEditorToolRegistry();
    }

    private buildEditorToolRegistry (): TemplateEditorTool[] {
        const toolFactories = [
            new TitleToolFactory(),
            new TextToolFactory(),
            new DividerToolFactory(),
            new ButtonToolFactory(),
            new LinkToolFactory(),
            new ImageToolFactory(),
            new SignatureToolFactory(),
            new SocialToolFactory()
        ];
        const toolRegistry = toolFactories.map( (factory: TemplateEditorToolFactory) => factory.buildTool() );
        return toolRegistry;
    }

    public getEditorToolRegistry (): TemplateEditorTool[] {
        return this.editorToolRegistry.slice(0);
    }
}