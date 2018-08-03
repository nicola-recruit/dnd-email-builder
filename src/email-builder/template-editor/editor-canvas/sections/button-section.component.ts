import { Component, Input } from '@angular/core';
import { ButtonMailSection } from '../classes/ButtonMailSection';
import { TextBasedSectionComponent } from './TextBasedSectionComponent';

@Component({
    selector: 'button-section',
    templateUrl: './button-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class ButtonSection extends TextBasedSectionComponent {

    @Input() public model: ButtonMailSection;

    constructor () {
        super();
    }

    public buildButtonStyle (): any {
        const style = {
            'text-align': 'center',
            'box-shadow': '5px 5px 5px black',
            'border-radius': '5px',
            'display': 'inline-block'
        };

        style['background-color'] = this.getBackgroundColor();
        style['padding'] = this.getPadding();
        style['color'] = this.getFontColor();
        style['font-size'] = this.getFontSize();
        style['text-decoration'] = this.getUnderline();
        style['font-weight'] = this.getBold();
        style['font-style'] = this.getItalic();

        return style;
    }

    public buildButtonOrientation (): any {

        const orientation = {};

        orientation['text-align'] = this.getTextAlignment();

        return orientation;
    }
}