import { MailSectionConfigurationBlockCategory, ModelPropertyUpdateCallback } from 'email-builder/template-editor/template-editor.types';
import { PropertyConfigurationBlock } from './PropertyConfigurationBlock';

export class UrlConfigurationBlock extends PropertyConfigurationBlock {

    public url: string;

    constructor (modelPropertyUpdateCallback: ModelPropertyUpdateCallback) {
        super(modelPropertyUpdateCallback);
        this.category = MailSectionConfigurationBlockCategory.Url;
    }
    public updateModel (): void {
        this.modelPropertyUpdateCallback(this.url);
    }
}
