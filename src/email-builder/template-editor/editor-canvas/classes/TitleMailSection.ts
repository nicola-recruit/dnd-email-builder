import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';
import { TextConfigurationBlock } from 'email-builder/template-editor/right-toolbar/classes/TextConfigurationBlock';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/right-toolbar/classes/OrientationConfigurationBlock';

import { TextBasedMailSection } from './TextBasedMailSection';

export class TitleMailSection extends TextBasedMailSection {

    public title: string;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Title;
        this.title = '<Click and edit>';
    }

    protected buildTextConfiguration (): TextConfigurationBlock {
        const textConfiguration = new TextConfigurationBlock();
        textConfiguration.fontSize = 24;
        return textConfiguration;
    }

    protected buildOrientationConfiguration (): OrientationConfigurationBlock {
        const orientationConfiguration = new OrientationConfigurationBlock();
        orientationConfiguration.orientation = orientationConfiguration.center;
        return orientationConfiguration;
    }

    protected getJSONState (): any {
        const state = {
            title: this.title
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.title = state.title;
    }
}