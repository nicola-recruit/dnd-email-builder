import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EmailBuilderModule } from './email-builder/email-builder.module';

platformBrowserDynamic().bootstrapModule(EmailBuilderModule)
  .catch((error: string) => console.log(error));
