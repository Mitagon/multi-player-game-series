import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from './game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  submitting: boolean = false;
  createGameForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    rules: [null, Validators.required],
    maximumPlayers: [null, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  createGame() {
    this.submitting = true;
    this.gameService.createGame(this.createGameForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.submitting = false;
        },
        (error: string) => {
          console.log(error)
          this.submitting = false;
        }
      )
  }

}
