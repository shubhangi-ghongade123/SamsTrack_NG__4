import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css'],
})
export class EditSubjectComponent implements OnInit {
  role!: string;

  myForm!: FormGroup<any>;

  routerId: any;

  subjectId!: number;

  subjectName!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectService: SubjectService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.myForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
    });
  }

  ngOnInit(): void {
     this.role= String(localStorage.getItem('role'));
    this.routerId = this.activatedRoute.snapshot.paramMap.get('id');

    this.subjectService.getSubjectById(this.routerId).subscribe((response) => {
      this.subjectId = response.id;
      this.subjectName = response.name;
    });
  }

  onSubmit() {
    console.log('on submit ', this.myForm.value);

    this.subjectService
      .updateSubject(this.myForm.value)
      .subscribe((response) => {
        if (response != null) {
          alert('Subject Updated');
        } else {
          alert('Something Went Wrong');
        }
        this.router.navigate(['/get-all-subject']);
      });
  }
}
