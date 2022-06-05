import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  createGameForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    rules: [null, Validators.required],
    maximumPlayers: [null, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createGame() {

  }

}
