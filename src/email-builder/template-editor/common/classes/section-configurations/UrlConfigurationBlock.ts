import { MailSectionConfigurationBlockCategory, MailSectionConfigurationBlock, UrlBasedMailTemplateSection } from 'email-builder/template-editor/template-editor.types';

export class UrlConfigurationBlock implements MailSectionConfigurationBlock {

    public category: MailSectionConfigurationBlockCategory;
    public model: UrlBasedMailTemplateSection;
    public url: string;

    constructor (model: UrlBasedMailTemplateSection) {
        this.category = MailSectionConfigurationBlockCategory.Url;
        this.model = model;
        this.url = model.url;
    }

    public toJSON (): any {
        return {};
    }

    public fromJSON (state: any): void {}

    public updateModel (): void {
        this.model.url = this.url;
    }
}
