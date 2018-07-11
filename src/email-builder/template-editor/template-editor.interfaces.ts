export enum TemplateEditorToolCategory {
    Title,
    Text,
    Divider,
    Button,
    Link,
    Image,
    Signature,
    Social
}

export interface TemplateEditorTool {
    getCategory (): TemplateEditorToolCategory;
    getIconName (): string;
    getLabel (): string;
}

export interface TemplateEditorToolFactory {
    buildTool (): TemplateEditorTool;
}