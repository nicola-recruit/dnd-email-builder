import { BaseMailSection } from './BaseMailSection';
import { TemplateEditorToolCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/right-toolbar/classes/OrientationConfigurationBlock';
import { UploadedImageConfigurationBlock } from 'email-builder/template-editor/right-toolbar/classes/UploadedImageConfigurationBlock';

export class ImageMailSection extends BaseMailSection {

    public imageName: string;
    protected orientationConfiguration: OrientationConfigurationBlock;
    protected uploadedImageConfiguration: UploadedImageConfigurationBlock;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Image;
        this.orientationConfiguration = new OrientationConfigurationBlock();
        this.uploadedImageConfiguration = new UploadedImageConfigurationBlock(this.setImageName.bind(this));
        console.log('New image section');
    }
    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [this.uploadedImageConfiguration, this.orientationConfiguration];
    };

    protected getJSONState (): any {
        const state = {
            imageUid: this.imageName
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.imageName = state.imageUid;
    }

    public getOrientationConfiguration (): OrientationConfigurationBlock {
        return this.orientationConfiguration;
    }

    private setImageName (imageName: string): void {
        this.imageName = imageName;
        console.log('Updated model with ' + this.imageName);
    }

    public hasImageName (): boolean {
        console.log('Checking model with ' + this.imageName);
        return !!this.imageName;
    }
}