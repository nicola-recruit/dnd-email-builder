import { TemplateTool } from './TemplateTool';
import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';

export class TemplateToolRegistryFactory {

    constructor () {}

    public buildToolRegistry (): TemplateTool[] {
        const toolRegistry = [];

        toolRegistry.push(new TemplateTool('touch_app', 'Button', TemplateEditorToolCategory.Button));
        toolRegistry.push(new TemplateTool('drag_handle', 'Divider', TemplateEditorToolCategory.Divider));
        toolRegistry.push(new TemplateTool('insert_photo', 'Image', TemplateEditorToolCategory.Image));
        toolRegistry.push(new TemplateTool('insert_link', 'Link', TemplateEditorToolCategory.Link));
        toolRegistry.push(new TemplateTool('fingerprint', 'Signature', TemplateEditorToolCategory.Signature));
        toolRegistry.push(new TemplateTool('share', 'Social', TemplateEditorToolCategory.Social));
        toolRegistry.push(new TemplateTool('notes', 'Text', TemplateEditorToolCategory.Text));
        toolRegistry.push(new TemplateTool('title', 'Title', TemplateEditorToolCategory.Title));

        return toolRegistry;
    }
}

