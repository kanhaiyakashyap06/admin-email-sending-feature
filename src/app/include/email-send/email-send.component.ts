import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/_service/common.service';

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.scss']
})
export class EmailSendComponent implements OnInit {
  userKycstatus: [] = []
  sendemail: any
  sendemailForm!: FormGroup
  constructor(private commonService: CommonService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getKycstatus()
    this.cerateForm()
  }
  /*
  getKycstatus()
  // for get user kyc status list
  ----------------------------------
  cerateForm()
  // for form field
  -----------------------------------
  sendEmailtouser()
  //for send email to user
  */
  getKycstatus() {
    this.commonService.getKycdetail().subscribe(data => {
      this.userKycstatus = data.result
    })
  }
  cerateForm() {
    this.sendemailForm = this.fb.group({
      bulkEmailFor: ['', Validators.required],
      message: ['', Validators.required],
      subject: ['', Validators.required]
    })
  }
  get bulkEmailFor(): any {
    return this.sendemailForm.get('bulkEmailFor');
  }
  get message(): any {
    return this.sendemailForm.get('message');
  }
  get subject(): any {
    return this.sendemailForm.get('subject');
  }

  sendEmailtouser() {
    if (!this.sendemailForm.valid) {
      this.sendemailForm.markAllAsTouched();
    }
    else {
      this.commonService.postEmailtouser(this.sendemailForm.value).subscribe(data => {
        this.sendemail = data
        if (this.sendemail.statusCode == 200) {
          alert(this.sendemail.result)
          this.router.navigateByUrl('/')
        }
      })
    }
  }

}
