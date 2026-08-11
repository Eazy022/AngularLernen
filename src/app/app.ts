import {Component} from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  template: ` <h1>It is going Forward!!</h1><main>
       <main>
      <header class="brand-name">
        <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home />
      </section>
    </main>`,
  styleUrls: ['./app.css'],
})
export class App {
 };


