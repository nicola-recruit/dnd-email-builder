import { Component, Input } from '@angular/core';
import { SignatureMailSection } from '../classes/SignatureMailSection';

@Component({
    selector: 'signature-section',
    templateUrl: './signature-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class SignatureSection {

    @Input() public model: SignatureMailSection;

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