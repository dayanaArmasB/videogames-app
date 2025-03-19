import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { provideHttpClient, withInterceptors  } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(NavbarComponent), // <-- Importa el Navbar aquí
    provideHttpClient(withInterceptors([]))
  ]
};
