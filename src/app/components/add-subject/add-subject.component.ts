import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {


  subject!: Subject;

  myForm: FormGroup;
  role!: string;

  constructor(private subjectService: SubjectService, private router: Router) {
    this.myForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.role= String(localStorage.getItem('role'));
  }

  onSubmit() {
    this.subject = this.myForm.value;
    this.subjectService.addSubject(this.subject).subscribe((response) => {
      console.log('response from server', response);
      if(response!=null){
        alert('Subject Added ');
      }else{
        alert('Subject Already Exist with name = '+this.subject.name);
      }
      this.router.navigate(['/get-all-subject']);
    });
  }
}
