import { Component, Input, Host, HostListener, ElementRef } from '@angular/core';
import { MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';
import { EditorCanvas } from 'email-builder/template-editor/editor-canvas/editor-canvas.component';


@Component({
    selector: 'generic-section',
    templateUrl: './generic-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class GenericSection {

    public toolCategory:any = TemplateEditorToolCategory;

    @Input() public sectionModel: MailTemplateSection;

    constructor (@Host() private editorCanvas: EditorCanvas, private elementReference: ElementRef) {}

    public handleClickEventOnComponent (): void {
        this.sectionModel.setAsEditable();
        this.editorCanvas.selectMailSection(this.sectionModel);
    }

    @HostListener('document:mousedown', ['$event.target']) 
    public handleClickEventOutsideComponent (target: any): void {
        if (!this.elementReference.nativeElement.contains(target)) {
            this.sectionModel.setAsReadonly();
        }
    }
}
