import { Component } from '@angular/core';
import { MailSectionLoaderService } from 'email-builder/template-editor/common/mail-section-loader.service';
import { MailTemplateSection } from 'email-builder/template-editor/template-editor.types';

@Component({
    selector: 'template-editor',
    templateUrl: './template-editor.component.html'
})
export class TemplateEditor {

    private mailTemplateSections: MailTemplateSection[];

    constructor (private mailSectionLoaderService: MailSectionLoaderService) {
        mailSectionLoaderService.loadMailSections().subscribe((mailTemplateSections: MailTemplateSection[]) => this.mailTemplateSections = mailTemplateSections);
    }
}
