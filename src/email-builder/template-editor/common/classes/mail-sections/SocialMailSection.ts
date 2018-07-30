import { BaseMailSection } from './BaseMailSection';
import { TemplateEditorToolCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/OrientationConfigurationBlock';
import { SocialIdConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/SocialIdConfigurationBlock';

export class SocialMailSection extends BaseMailSection {

    public facebook: string;
    public twitter: string;
    public googlePlus: string;
    public skype: string;
    protected orientationConfiguration: OrientationConfigurationBlock;
    protected socialIdConfiguration: SocialIdConfigurationBlock[];

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Social;
        this.orientationConfiguration = new OrientationConfigurationBlock();
        this.socialIdConfiguration = [new SocialIdConfigurationBlock('Facebook', this.setFacebookId), 
            new SocialIdConfigurationBlock('Twitter', this.setTwitterId), 
            new SocialIdConfigurationBlock('Google+', this.setGooglePlusId), 
            new SocialIdConfigurationBlock('Skype', this.setSkypeId)];
    }

    private setFacebookId (id: any): void {
        this.facebook = id;
    }

    private setTwitterId (id: any): void {
        this.twitter = id;
    }

    private setGooglePlusId (id: any): void {
        this.googlePlus = id;
    }

    private setSkypeId (id: any): void {
        this.skype = id;
    }

    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [...this.socialIdConfiguration, this.orientationConfiguration];
    };

    protected getJSONState (): any {
        const state = {
            facebook: this.facebook,
            twitter: this.twitter,
            googlePlus: this.googlePlus,
            skype: this.skype
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.facebook = state.facebook;
        this.twitter = state.twitter;
        this.googlePlus = state.googlePlus;
        this.skype = state.skype;
    }

    public getOrientationConfiguration (): OrientationConfigurationBlock {
        return this.orientationConfiguration;
    }
}