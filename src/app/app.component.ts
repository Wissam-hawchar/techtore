import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService:AuthService){

  }
  isloggedin(){
    return this.authService.isAuthenticatedUser();
  }
  sideopened: boolean=true;
  openside(e:any) {
    this.sideopened= !this.sideopened;
  }
}
