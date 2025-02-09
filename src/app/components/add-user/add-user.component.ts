import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {

  user!: User;

  myForm: FormGroup;
  role!: string;

  constructor(private adminService: AdminService,private router: Router) {
    this.myForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      role: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.role= String(localStorage.getItem('role'));
  }

  onSubmit() {
    this.user = this.myForm.value;
    console.log('before service ', this.user);
    this.adminService.addUser(this.user).subscribe((response) => {
      console.log('response from server', response);

      if(response!='Registered'){
        alert('User Already Exists');
      }else{
        alert(response);
      }

      this.router.navigate(['/get-all-user']);
    });
  }
}
