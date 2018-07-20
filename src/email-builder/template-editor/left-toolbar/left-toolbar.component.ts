import { Component } from '@angular/core';
import { LeftToolbarService } from './left-toolbar.service';
import { TemplateTool } from './classes/TemplateTool';
import { DragAndDropEventService } from 'email-builder/template-editor/common/drag-and-drop-event.service';

@Component({
    selector: 'left-toolbar',
    templateUrl: './left-toolbar.component.html'
})
export class LeftToolbar {

    public toolList: TemplateTool[];

    constructor (private leftToolbarService: LeftToolbarService, private dragAndDropEventService: DragAndDropEventService) {
        this.toolList = leftToolbarService.getEditorToolRegistry();
    }

    public drag (event: DragEvent, currentTool: TemplateTool): void {
        const payload = {
            category: currentTool.getCategory()
        };
        this.dragAndDropEventService.setDataOnDragEvent(event, payload);
    }
}
