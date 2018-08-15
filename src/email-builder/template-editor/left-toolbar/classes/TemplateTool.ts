import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';

export class TemplateTool {

    constructor (private iconName: string, private label: string, private category: TemplateEditorToolCategory) {
    }

    public getCategory (): TemplateEditorToolCategory {
        return this.category;
    }

    public getIconName (): string {
        return this.iconName;
    }

    public getLabel (): string {
        return this.label;
    }
}