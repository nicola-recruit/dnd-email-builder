import { Component, Input } from '@angular/core';
import { MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { MailSectionConfigurationBlockCategory } from 'email-builder/template-editor/template-editor.types';


@Component({
    selector: 'generic-block',
    templateUrl: './generic-block.component.html'
})
export class GenericBlock {

    public blockCategory:any = MailSectionConfigurationBlockCategory;

    @Input() public configurationBlock: MailSectionConfigurationBlock;

    constructor () {}
}
