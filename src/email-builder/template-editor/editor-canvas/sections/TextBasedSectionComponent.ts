import { TextBasedMailSection } from 'email-builder/template-editor/common/classes/mail-sections/TextBasedMailSection';

export class TextBasedSectionComponent {

    public model: TextBasedMailSection;

    constructor () {}

    public buildStyle (): any {
        const style = {};

        style['background-color'] = this.getBackgroundColor();
        style['padding'] = this.getPadding();
        style['color'] = this.getFontColor();
        style['font-size'] = this.getFontSize();
        style['text-decoration'] = this.getUnderline();
        style['font-weight'] = this.getBold();
        style['font-style'] = this.getItalic();
        style['text-align'] = this.getTextAlignment();

        return style;
    }

    public shouldBeHidden (): boolean {
        return this.model.editable;
    }

    protected getBackgroundColor (): string {
        const paddingAndColorConfiguration = this.model.getPaddingAndColorConfiguration();
        return paddingAndColorConfiguration.backgroundColor;
    }

    protected getPadding (): string {
        const paddingAndColorConfiguration = this.model.getPaddingAndColorConfiguration();
        return paddingAndColorConfiguration.padding.toString() + 'px';
    }

    protected getFontColor (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.fontColor;
    }

    protected getFontSize (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.fontSize.toString() + 'pt';
    }

    protected getUnderline (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.underline ? 'underline' : '';
    }

    protected getBold (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.bold ? 'bold' : '';
    }

    protected getItalic (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.italic ? 'italic' : '';
    }

    protected getTextAlignment (): string {
        const orientationConfiguration = this.model.getOrientationConfiguration();
        return orientationConfiguration.orientation;
    }
}