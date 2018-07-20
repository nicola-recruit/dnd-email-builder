import { Component, Input } from '@angular/core';
import { MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';


@Component({
    selector: 'generic-section',
    templateUrl: './generic-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class GenericSection {

    public toolCategory:any = TemplateEditorToolCategory;

    @Input() public sectionModel: MailTemplateSection;

    constructor () {}
}
