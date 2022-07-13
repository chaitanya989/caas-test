import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

export interface License {
  type: string;
  name: string;
  description: string;
  logo: string;
}

@Component({
  selector: 'app-application-form',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  public siteUrl: string = environment.url;
  private currDate = new Date();
  public submitted: boolean = false;
  public isSuccess: boolean = false;
  public appForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.appForm = this.formBuilder.group({
      applicantName: ['', Validators.required],
      nric: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contactNumber: ['', Validators.required],
      dateOfActivity: ['', Validators.required]
    });
  }

  get appFormControl() {
    return this.appForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.appForm.valid) {
      this.isSuccess = true;
    }
  }

}
