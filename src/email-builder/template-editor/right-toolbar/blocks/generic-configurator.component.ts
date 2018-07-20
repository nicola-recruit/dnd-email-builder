import { Component, Input } from '@angular/core';
import { MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { MailSectionConfigurationBlockCategory } from 'email-builder/template-editor/template-editor.types';


@Component({
    selector: 'generic-configurator',
    templateUrl: './generic-configurator.component.html'
})
export class GenericConfigurator {

    public blockCategory:any = MailSectionConfigurationBlockCategory;

    @Input() public configurationBlock: MailSectionConfigurationBlock;

    constructor () {}
}
