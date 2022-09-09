import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ServerResponseDto } from 'src/app/shared/interfaces/server-response-dto';
import { environment } from 'src/environments/environment';
import { CreateGameDto } from './create-game-dto';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  createGame(game: CreateGameDto): Observable<ServerResponseDto> {
    const url = `${environment.apiBaseUrl}games`;
    return this.http.post<ServerResponseDto>(url, game)
      .pipe(
        (catchError(this.handleError))
      )
  }

  private handleError(error: any) {
    console.log(error);
    return throwError((error: any) => new Error('Could not complete Action'+
    'Please Check Console for more details.'
    ));
  }
}
