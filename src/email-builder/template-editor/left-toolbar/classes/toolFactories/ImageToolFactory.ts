import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { ImageTool } from '../tools/ImageTool';

export class ImageToolFactory implements TemplateEditorToolFactory {

    public buildTool (): ImageTool {
        return new ImageTool('insert_photo', 'Image');
    }
}