import { Component, Input } from '@angular/core';
import { TitleMailSection } from '../classes/TitleMailSection';
import { TextBasedSectionComponent } from './TextBasedSectionComponent';

@Component({
    selector: 'title-section',
    templateUrl: './title-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class TitleSection extends TextBasedSectionComponent {

    @Input() public model: TitleMailSection;

    constructor () {
        super();
    }
}