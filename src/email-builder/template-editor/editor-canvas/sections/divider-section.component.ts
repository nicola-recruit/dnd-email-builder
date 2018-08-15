import { Component, Input } from '@angular/core';
import { DividerMailSection } from '../classes/DividerMailSection';

@Component({
    selector: 'divider-section',
    templateUrl: './divider-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class DividerSection {

    @Input() public model: DividerMailSection;

    constructor () {}
}