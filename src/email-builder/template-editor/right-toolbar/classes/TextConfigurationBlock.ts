import { MailSectionConfigurationBlockCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';

export class TextConfigurationBlock implements MailSectionConfigurationBlock {

    public category: MailSectionConfigurationBlockCategory;
    public fontSize: number;
    public fontColor: string;
    public italic: boolean;
    public underline: boolean;
    public bold: boolean;

    constructor () {
        this.category = MailSectionConfigurationBlockCategory.Text;
        this.fontSize = 8;
    }

    public toJSON (): any {
        const state = {
            category: this.category,
            fontSize: this.fontSize,
            fontColor: this.fontColor,
            italic: this.italic,
            bold: this.bold,
            underline: this.underline
        };
        return state;
    }

    public fromJSON (state: any): void {
        this.fontSize = state.fontSize;
        this.fontColor = state.fontColor;
        this.italic = state.italic;
        this.bold = state.bold;
        this.underline = state.underline;
    }
}