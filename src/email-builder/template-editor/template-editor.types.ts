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

export enum MailSectionConfigurationBlockCategory {
    PaddingAndColor,
    Orientation,
    TextFeature
}

export interface JSONConverter {
    toJSON (): any;
    fromJSON (state: any): void;
}

export interface MailSectionConfigurationBlock extends JSONConverter {
    category: MailSectionConfigurationBlockCategory;
}

export interface MailTemplateSection extends JSONConverter {
    uid: string;
    category: TemplateEditorToolCategory;
    getConfigurationBlocks (): MailSectionConfigurationBlock[];
}