import { Component, Input } from '@angular/core';
import { TitleMailSection } from 'email-builder/template-editor/common/classes/mail-sections/TitleMailSection';

@Component({
    selector: 'title-section',
    templateUrl: './title-section.component.html'
})
export class TitleSection {

    @Input() public model: TitleMailSection;

    constructor () {}

    public getBackgroundColor (): string {
        const paddingAndColorConfiguration = this.model.getPaddingAndColorConfiguration();
        return paddingAndColorConfiguration.backgroundColor;
    }

    public getPadding (): number {
        const paddingAndColorConfiguration = this.model.getPaddingAndColorConfiguration();
        return paddingAndColorConfiguration.padding;
    }
}