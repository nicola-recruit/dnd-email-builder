import { Component, Input } from '@angular/core';
import { TextMailSection } from 'email-builder/template-editor/common/classes/mail-sections/TextMailSection';
import { TextBasedSectionComponent } from './TextBasedSectionComponent';

@Component({
    selector: 'text-section',
    templateUrl: './text-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class TextSection extends TextBasedSectionComponent {

    @Input() public model: TextMailSection;

    constructor () {
        super();
    }
}