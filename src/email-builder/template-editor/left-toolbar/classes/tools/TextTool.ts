import { TemplateEditorToolCategory, TemplateEditorTool } from 'email-builder/template-editor/template-editor.interfaces';

export class TextTool implements TemplateEditorTool {

    private category: TemplateEditorToolCategory;

    constructor (private iconName: string, private label: string) {
        this.category = TemplateEditorToolCategory.Text;
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