import { MailSectionConfigurationBlockCategory, ModelPropertyUpdateCallback } from 'email-builder/template-editor/template-editor.types';
import { PropertyConfigurationBlock } from './PropertyConfigurationBlock';

export class UploadedImageConfigurationBlock extends PropertyConfigurationBlock {

    public uploadedImageName: string;

    constructor (modelPropertyUpdateCallback: ModelPropertyUpdateCallback) {
        super(modelPropertyUpdateCallback);
        this.category = MailSectionConfigurationBlockCategory.UploadedImage;
    }
    public updateModel (): void {
        console.log('Configuration block updated with ' + this.uploadedImageName);
        this.modelPropertyUpdateCallback(this.uploadedImageName);
    }
}
