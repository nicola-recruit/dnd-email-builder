import { Component, Input } from '@angular/core';
import { TextMailSection } from 'email-builder/template-editor/common/classes/mail-sections/TextMailSection';
import { TitleAndTextSectionComponent } from './TitleAndTextSectionComponent';

@Component({
    selector: 'text-section',
    templateUrl: './text-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class TextSection extends TitleAndTextSectionComponent {

    @Input() public model: TextMailSection;

    constructor () {
        super();
    }
}