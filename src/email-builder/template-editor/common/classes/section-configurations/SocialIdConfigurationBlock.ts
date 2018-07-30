import { MailSectionConfigurationBlockCategory, ModelPropertyUpdateCallback } from 'email-builder/template-editor/template-editor.types';
import { PropertyConfigurationBlock } from './PropertyConfigurationBlock';

export class SocialIdConfigurationBlock extends PropertyConfigurationBlock {

    public socialid: string;

    constructor (public label:string, modelPropertyUpdateCallback: ModelPropertyUpdateCallback) {
        super(modelPropertyUpdateCallback);
        this.category = MailSectionConfigurationBlockCategory.SocialId;
    }
    public updateModel (): void {
        this.modelPropertyUpdateCallback(this.socialid);
    }
}
