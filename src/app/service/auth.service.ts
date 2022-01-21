
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    
   }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
        return this.http.post<UserLogin>('https://blogdootaviotonello.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
      return this.http.post<User>('https://blogdootaviotonello.herokuapp.com/usuarios/cadastrar', user)
    
  }
}
