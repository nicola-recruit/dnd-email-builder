import { Component } from '@angular/core';
import { DragAndDropEventService } from '../common/drag-and-drop-event.service';

@Component({
    selector: 'editor-canvas',
    templateUrl: './editor-canvas.component.html',
    styleUrls: ['./editor-canvas.component.scss']
})
export class EditorCanvas {

    constructor (private dragAndDropEventService: DragAndDropEventService) {}

    public dragOver (event:DragEvent): void {
        event.preventDefault();
    }

    public drop (event:DragEvent): void {
        event.preventDefault();
        const templateTool = this.dragAndDropEventService.getDataOnDropEvent(event);
    }
}
