import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent {

constructor(private loginService:LoginService,private router:Router){}

  logout() {
    localStorage.getItem('');
    this.router.navigate(['']);
  }
}
