import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { DividerTool } from '../tools/DividerTool';

export class DividerToolFactory implements TemplateEditorToolFactory {

    public buildTool (): DividerTool {
        return new DividerTool('drag_handle', 'Divider');
    }
}