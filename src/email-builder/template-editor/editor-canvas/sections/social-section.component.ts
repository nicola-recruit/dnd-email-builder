import { Component, Input } from '@angular/core';
import { SocialMailSection } from 'email-builder/template-editor/common/classes/mail-sections/SocialMailSection';

@Component({
    selector: 'social-section',
    templateUrl: './social-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class SocialSection {

    @Input() public model: SocialMailSection;

    constructor () {
    }

    public buildStyle (): any {

        const style = {};

        style['text-align'] = this.getTextAlignment();

        return style;
    }

    private getTextAlignment (): string {
        const orientation = this.model.getOrientationConfiguration();
        return orientation.orientation;
    }
}