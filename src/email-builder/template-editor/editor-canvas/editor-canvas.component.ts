import { Component, Input } from '@angular/core';
import { DragAndDropEventService } from 'email-builder/template-editor/common/drag-and-drop-event.service';
import { MailTemplateSection, DragAndDropEventPayloadData } from 'email-builder/template-editor/template-editor.types';
import { MailSectionFactory } from 'email-builder/template-editor/common/classes/MailSectionFactory';
import { CanvasEventService } from 'email-builder/template-editor/common/canvas-event.service';

@Component({
    selector: 'editor-canvas',
    templateUrl: './editor-canvas.component.html',
    styleUrls: ['./editor-canvas.component.scss']
})
export class EditorCanvas {

    private mailSectionFactory: MailSectionFactory;

    @Input() public mailSections: MailTemplateSection[];

    constructor (private dragAndDropEventService: DragAndDropEventService, private canvasEventService: CanvasEventService) {
        this.mailSectionFactory = new MailSectionFactory();
    }

    public dragOver (event:DragEvent): void {
        event.preventDefault();
    }

    public drop (event:DragEvent): void {
        event.preventDefault();
        const dragAndDropEventData = this.dragAndDropEventService.getDataOnDropEvent(event);
        const newMailSection = this.createNewMailSection(dragAndDropEventData);
        this.mailSections.push(newMailSection);
    }

    private createNewMailSection (dragAndDropEventData: DragAndDropEventPayloadData): MailTemplateSection {
        return this.mailSectionFactory.buildMailSection(dragAndDropEventData.category);
    }

    public selectMailSection (section: MailTemplateSection): void {
        this.canvasEventService.setSelectedMailSection(section);
    }
}
