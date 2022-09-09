import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUserDto } from '../interfaces/new-user-dto';
import { ServerResponseDto } from '../interfaces/server-response-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * API base URL
   */
  private readonly APIBaseURL = environment.apiBaseUrl;

  constructor(
   private http: HttpClient
  ) {}

  /**
   * Handle all api errors
   * @param error
   */
  private handleAPIErrors(error: Error) {
    console.error(
      `AN ERROR OCCURED... Expand this tab to see details `,
      error
    );
    const genericAPIErrorMessage = `An error occured. Please see console
      for details`;

    return throwError(() => new Error(genericAPIErrorMessage))
  }

  createNewUser(newUser: NewUserDto): Observable <ServerResponseDto> {
    return this.http.post<ServerResponseDto>(this.APIBaseURL, newUser)
      .pipe(
        tap((response) => {
          console.log(response)
        }),
        catchError((this.handleAPIErrors))
      )
  }


}
