import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UrlConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/UrlConfigurationBlock';
import { BasicConfiguratorComponent } from './BasicConfiguratorComponent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'url-configurator',
    templateUrl: './url-configurator.component.html'
})
export class UrlConfigurator extends BasicConfiguratorComponent implements OnInit, OnDestroy {

    @Input() public configurationBlock: UrlConfigurationBlock;

    constructor (private formBuilder:FormBuilder) {
        super();
    }

    public ngOnInit (): void {
        this.initForm();
    }

    public ngOnDestroy (): void {
        this.destroyForm();
    }

    protected createFormGroup (configurationBlock: UrlConfigurationBlock): FormGroup {
        return this.formBuilder.group({
            url: [configurationBlock.url, [Validators.required, Validators.pattern('https?://.+$')]]
        });
    }

    protected storeOtherValuesIntoConfigurationBlock (): void {
        this.configurationBlock.updateModel();
    }
}
