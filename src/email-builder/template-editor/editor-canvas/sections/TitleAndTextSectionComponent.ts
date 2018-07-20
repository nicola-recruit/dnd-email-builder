import { TitleAndTextMailSection } from 'email-builder/template-editor/common/classes/mail-sections/TitleAndTextMailSection';

export class TitleAndTextSectionComponent {

    public model: TitleAndTextMailSection;

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

    private getBackgroundColor (): string {
        const paddingAndColorConfiguration = this.model.getPaddingAndColorConfiguration();
        return paddingAndColorConfiguration.backgroundColor;
    }

    private getPadding (): string {
        const paddingAndColorConfiguration = this.model.getPaddingAndColorConfiguration();
        return paddingAndColorConfiguration.padding.toString() + 'px';
    }

    private getFontColor (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.fontColor;
    }

    private getFontSize (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.fontSize.toString() + 'pt';
    }

    private getUnderline (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.underline ? 'underline' : '';
    }

    private getBold (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.bold ? 'bold' : '';
    }

    private getItalic (): string {
        const textConfiguration = this.model.getTextConfiguration();
        return textConfiguration.italic ? 'italic' : '';
    }

    private getTextAlignment (): string {
        const orientationConfiguration = this.model.getOrientationConfiguration();
        return orientationConfiguration.orientation;
    }
}