import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.warnUsersToAvoidConsole();
  }

  private warnUsersToAvoidConsole(): void{
    console.info(`
      This project is owned and managed by Mitagon...
    `)
    return console.warn(`
    WARNING!!! WARNING!!! WARNING!!!

      This area is mostly reserved for developers!!!
      Do not copy and paste any codes you are not sure of into
      this console, as hackers may user this to gain access to
      your account!
    `)
  }

  title = 'multi-player-game-series';
}
