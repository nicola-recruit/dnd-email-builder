import { Component, Input } from '@angular/core';
import { TitleMailSection } from 'email-builder/template-editor/common/classes/mail-sections/TitleMailSection';
import { TitleAndTextSectionComponent } from './TitleAndTextSectionComponent';

@Component({
    selector: 'title-section',
    templateUrl: './title-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class TitleSection extends TitleAndTextSectionComponent {

    @Input() public model: TitleMailSection;

    constructor () {
        super();
    }
}