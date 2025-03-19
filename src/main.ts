import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Asegúrate de importar bien las rutas
import { provideHttpClient } from '@angular/common/http'; // ✅ IMPORTA ESTO
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ AGREGA ESTO AQUÍ
  ] 
  
}).catch(err => console.error(err));
