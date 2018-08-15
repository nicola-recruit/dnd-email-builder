import { Component, Input } from '@angular/core';
import { DragAndDropEventService } from 'email-builder/template-editor/common/drag-and-drop-event.service';
import { MailTemplateSection, DragAndDropEventPayloadData } from 'email-builder/template-editor/template-editor.types';
import { MailSectionFactoryService } from 'email-builder/template-editor/common/mail-section-factory.service';
import { CanvasEventService } from 'email-builder/template-editor/common/canvas-event.service';
import { UserSignatureService } from 'email-builder/template-editor/common/user-signature.service';

@Component({
    selector: 'editor-canvas',
    templateUrl: './editor-canvas.component.html',
    styleUrls: ['./editor-canvas.component.scss']
})
export class EditorCanvas {

    @Input() public mailSections: MailTemplateSection[];

    constructor (private dragAndDropEventService: DragAndDropEventService, private canvasEventService: CanvasEventService, 
        private userSignatureService: UserSignatureService, private mailSectionFactoryService: MailSectionFactoryService) {
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
        return this.mailSectionFactoryService.buildMailSection(dragAndDropEventData.category);
    }

    public selectMailSection (section: MailTemplateSection): void {
        this.canvasEventService.setSelectedMailSection(section);
    }
}
