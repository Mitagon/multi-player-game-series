import { Injectable } from '@angular/core';
import { NewUserDto } from '../shared/interfaces/new-user-dto';
import { ServerResponseDto } from '../shared/interfaces/server-response-dto';
import * as bcrypt from 'bcryptjs';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }
  /**
   * user password regex is the same across the entire project
   */
  public readonly userPasswordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
  /**
   * userName regex is the same across the entire project
   */
  public readonly userNameRegex = "^@?(\w){1,15}$";
  /**
   * @param userPassword
   * @returns hashed userPassword
   */
  hashUserPassword (userPassword: string): string {
    return bcrypt.hashSync(userPassword, 8)
  }

  createNewUser (newUser: NewUserDto): Observable<ServerResponseDto> {
    const hashedPassword = this.hashUserPassword(newUser.password);
    newUser.password = hashedPassword;
    return this.apiService.createNewUser(newUser);
  }
}
