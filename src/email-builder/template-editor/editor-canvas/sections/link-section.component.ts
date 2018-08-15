import { Component, Input } from '@angular/core';
import { LinkMailSection } from '../classes/LinkMailSection';
import { TextBasedSectionComponent } from './TextBasedSectionComponent';

@Component({
    selector: 'link-section',
    templateUrl: './link-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class LinkSection extends TextBasedSectionComponent {

    @Input() public model: LinkMailSection;

    constructor () {
        super();
    }
}