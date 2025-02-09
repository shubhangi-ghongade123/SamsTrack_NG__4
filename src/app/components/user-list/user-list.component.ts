import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
role!:string;
  users: any[] = [];
  constructor(private adminService: AdminService, private router: Router,private loginService:LoginService) {}



  ngOnInit() {
    this.role= String(localStorage.getItem('role'));
    this.adminService.getAllUsers().subscribe((list) => {
      this.users = list;
      if (this.users.length===0) {
        alert('User Not Exist');
      }
      this.router.navigate(['/admin-dashboard']);
    });
  }
}
