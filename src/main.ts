import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { App } from './app/app';
import { appConfig } from './app/app.config';
import { JwtInterceptor } from './app/interceptors/jwt.interceptor';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withInterceptorsFromDi()), // active les intercepteurs de DI
    {
      provide: HTTP_INTERCEPTORS, // ✅ c'est ce token qu'il faut
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
