import { Component, Input } from '@angular/core';
import { DividerMailSection } from 'email-builder/template-editor/common/classes/mail-sections/DividerMailSection';

@Component({
    selector: 'divider-section',
    templateUrl: './divider-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class DividerSection {

    @Input() public model: DividerMailSection;

    constructor () {}
}