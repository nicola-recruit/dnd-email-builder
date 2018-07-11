import { Component } from '@angular/core';
import { EditorToolService } from './editor-tool.service';
import { TemplateEditorTool } from '../template-editor.interfaces';

@Component({
    selector: 'left-toolbar',
    templateUrl: './left-toolbar.component.html'
})
export class LeftToolbar {

    public toolList: TemplateEditorTool[];

    constructor (private editorToolService: EditorToolService) {
        this.toolList = editorToolService.getEditorToolRegistry();
    }

    public drag (ev:Event): void {
        console.log(ev.type);
      }
}
