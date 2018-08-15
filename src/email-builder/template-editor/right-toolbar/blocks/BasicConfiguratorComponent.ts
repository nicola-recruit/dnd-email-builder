import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';

export abstract class BasicConfiguratorComponent {

    public formChangesSubscription: Subscription;
    public configurationFormGroup: FormGroup;
    public configurationBlock: MailSectionConfigurationBlock;

    constructor () {}

    protected abstract createFormGroup (configurationBlock: MailSectionConfigurationBlock): FormGroup;

    protected initForm (): void {
        this.configurationFormGroup  = this.createFormGroup(this.configurationBlock);
        this.formChangesSubscription = this.configurationFormGroup.valueChanges.subscribe((valueChanges: any) => {
            this.updateConfigurationBlock();
        });
    }

    protected destroyForm (): void {
        this.formChangesSubscription.unsubscribe();
    }

    protected updateConfigurationBlock (): void {
        this.storeFormValuesIntoConfigurationBlock();
        this.storeOtherValuesIntoConfigurationBlock();
    }

    protected storeOtherValuesIntoConfigurationBlock (): void {}

    protected storeFormValuesIntoConfigurationBlock (): void {
        Object.assign(this.configurationBlock, this.configurationFormGroup.value);
    }
}