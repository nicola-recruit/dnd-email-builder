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

export interface DragAndDropEventPayloadData {
    category: TemplateEditorToolCategory;
}