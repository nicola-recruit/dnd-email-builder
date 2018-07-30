import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SocialIdConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/SocialIdConfigurationBlock';
import { BasicConfiguratorComponent } from './BasicConfiguratorComponent';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'socialid-configurator',
    templateUrl: './socialid-configurator.component.html'
})
export class SocialIdConfigurator extends BasicConfiguratorComponent implements OnInit, OnDestroy {

    @Input() public configurationBlock: SocialIdConfigurationBlock;

    constructor (private formBuilder:FormBuilder) {
        super();
    }

    public ngOnInit (): void {
        this.initForm();
    }

    public ngOnDestroy (): void {
        this.destroyForm();
    }

    protected createFormGroup (configurationBlock: SocialIdConfigurationBlock): FormGroup {
        return this.formBuilder.group({
            socialid: [configurationBlock.socialid]
        });
    }

    protected storeOtherValuesIntoConfigurationBlock (): void {
        this.configurationBlock.updateModel();
    }
}
