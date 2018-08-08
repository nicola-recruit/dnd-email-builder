import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UploadedImageConfigurationBlock } from '../classes/UploadedImageConfigurationBlock';
import { BasicConfiguratorComponent } from './BasicConfiguratorComponent';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from 'email-builder/template-editor/common/file-upload.service';

@Component({
    selector: 'uploaded-image-configurator',
    templateUrl: './uploaded-image-configurator.component.html'
})
export class UploadedImageConfigurator extends BasicConfiguratorComponent implements OnInit, OnDestroy {

    @Input() public configurationBlock: UploadedImageConfigurationBlock;
    private fileToUpload: File;

    constructor (private formBuilder:FormBuilder, private fileUploadService: FileUploadService) {
        super();
    }

    public ngOnInit (): void {
        this.initForm();
    }

    public ngOnDestroy (): void {
        this.destroyForm();
    }

    protected createFormGroup (configurationBlock: UploadedImageConfigurationBlock): FormGroup {
        return this.formBuilder.group({
        });
    }

    protected storeOtherValuesIntoConfigurationBlock (): void {
        this.configurationBlock.updateModel();
    }

    public handleFileToUpload (files: FileList): void {
        this.fileToUpload = files.item(0);
        this.fileUploadService.postFile(this.fileToUpload).subscribe((fileName: string) => {
            console.log('Subscriber called with ' + fileName);
            this.configurationBlock.uploadedImageName = fileName;
            this.configurationBlock.updateModel();
        });
    }
}
