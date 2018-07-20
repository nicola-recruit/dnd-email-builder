import { TemplateEditorToolCategory, MailTemplateSection, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';

export abstract class BaseMailSection implements MailTemplateSection {

    public uid: string;
    public category: TemplateEditorToolCategory;

    constructor () {}

    protected abstract getJSONState (): any;

    public toJSON (): any {
        const state = {
            uid: this.uid,
            category: this.category,
            configurationBlocks: this.getConfigurationBlockJSON()
        };
        return Object.assign({}, state, this.getJSONState());
    }

    protected abstract setJSONState (state: any): void;

    public fromJSON (state: any): void {
        this.uid = state.uid;
        this.updateConfigurationBlocksFromJSON(state.configurationBlocks);
        this.setJSONState(state);
    }

    public abstract getConfigurationBlocks (): MailSectionConfigurationBlock[];

    private getConfigurationBlockJSON (): any[] {
        const configurationBlocks = this.getConfigurationBlocks();
        const configurationBlockJSON = 
            configurationBlocks.map((configurationBlock: MailSectionConfigurationBlock) => configurationBlock.toJSON());
        return configurationBlockJSON;
    }

    private updateConfigurationBlocksFromJSON (configurationBlockJSON: any[]): void {
        const configurationBlocks = this.getConfigurationBlocks();
        configurationBlockJSON.forEach((configurationBlockJSON: any) => {
            const currentConfigurationBlock = 
                configurationBlocks.find((currentConfigurationBlock: MailSectionConfigurationBlock) => currentConfigurationBlock.category === configurationBlockJSON.configuration);
            if (currentConfigurationBlock) {
                currentConfigurationBlock.fromJSON(configurationBlockJSON);
            }
        });
    }
}