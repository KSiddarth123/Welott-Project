import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for API requests
import { environment } from '../../environments/environment'; // Import environment for API URL

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  captchaError: boolean = false;
  isMenuOpen = false;
  submissionError: string | null = null;
  submissionResponse: string | null = null;
  isSubmitting: boolean = false;
  thankYouMessage: string | null = null;
  actualCaptcha: string = ''; // Holds the generated captcha
  captchaImageUrl: string = this.generateCaptchaUrl(); // Initialize with a generated URL
  captchaInvalidMessage: string | null = null; // Message for invalid captcha

  @ViewChildren('formInput') formInputs!: QueryList<ElementRef>;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.phoneValidator]], // Custom phone validator
      message: [''],
      captcha: ['', Validators.required] // Captcha validation added
    });
  }

  ngOnInit(): void {
    this.handleFieldFocus();
    this.generateCaptcha(); // Generate captcha when component is initialized
    this.setupMenuToggle(); // Call the menu toggle setup
  }

  setupMenuToggle() {
    const menuToggle = document.querySelector<HTMLAnchorElement>('.mtoggle');
    const mainNav = document.getElementById('main_nav') as HTMLElement;

    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        mainNav.classList.toggle('visible');
      });
    }
  }

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    const phoneRegex = /^[0-9]+$/;
    if (control.value && !phoneRegex.test(control.value)) {
      return { invalidPhone: true };
    }
    return null;
  }

  generateCaptcha() {
    // Generate a random 5-character alphanumeric captcha (letters and numbers)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) { // Generate 5 characters
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.actualCaptcha = captcha; // Set the captcha value
  }

  handleFieldFocus() {
    this.contactForm.valueChanges.subscribe(() => {
      this.focusNextInvalidField();
    });
  }

  focusNextInvalidField() {
    const controls = this.contactForm.controls;
    const keys = Object.keys(controls);
    for (let i = 0; i < keys.length - 1; i++) {
      const currentControl = controls[keys[i]];
      const nextControl = controls[keys[i + 1]];

      if (currentControl.valid && !nextControl.touched) {
        this.formInputs.toArray()[i + 1].nativeElement.focus();
        break;
      }
    }
  }

  onSubmit() {
    console.log('Form submitted'); // Log to confirm form submission
    this.isSubmitting = true; // Set submitting state to true

    if (this.contactForm.valid) {
        // Reset the captchaInvalidMessage at the start of the submission
        this.captchaInvalidMessage = null;

        // Check captcha validation
        if (this.contactForm.value.captcha !== this.actualCaptcha) {
            this.captchaError = true; // Set captcha error
            this.captchaInvalidMessage = ' * You have entered a wrong verification code!'; // Set message
            this.refreshCaptcha(); // Refresh captcha on error
            this.focusFirstInvalidField(); // Focus the first invalid field
            this.isSubmitting = false; // Reset submitting state
            return; // Exit the function early if captcha is invalid
        }

        // If everything is valid, make API request
        const formValues = this.contactForm.value; // Collect form values
        console.log('Sending request with values:', formValues); // Log form values for debugging

        this.http.post(`${environment.apiUrl}/contact`, formValues).subscribe({
            next: (response: any) => {
                console.log('Response received:', response); // Log response for debugging
                this.submissionResponse = response.message; // Show success message
                this.contactForm.reset(); // Reset the form
                this.isSubmitting = false; // Reset submitting state
            },
            error: (error) => {
                console.error('Error occurred:', error); // Log error for debugging
                this.submissionError = 'There was an error submitting your message. Please try again later.'; // Show error message
                this.isSubmitting = false; // Reset submitting state
            }
        });
    } else {
        this.submissionError = 'Please fill in all required fields.'; // Show validation error
        this.focusFirstInvalidField(); // Focus on the first invalid field
        this.isSubmitting = false; // Reset submitting state
    }
}

  refreshCaptcha() {
    this.generateCaptcha(); // Generate a new captcha when the user enters the wrong one
    this.captchaImageUrl = this.generateCaptchaUrl(); // Optionally refresh the captcha image too
  }

  generateCaptchaUrl(): string {
    const randomParam = Math.random(); // Prevent caching by appending a random parameter
    return `https://welott.com/index.php?option=com_chronoforms5&act=render&action=load_captcha&chronoform=quote&action_id=6&tvout=ajax&rand=${randomParam}`;
  }

  getErrorMessage(control: string): string | null {
    const field = this.contactForm.get(control);
    if (field && field.invalid && (field.dirty || field.touched)) {
      if (field.hasError('required')) {
        return 'This field is required.';
      } else if (field.hasError('email')) {
        return 'Please enter a valid email.';
      } else if (field.hasError('invalidPhone')) {
        return 'Please enter a valid phone number.';
      }
    }
    return null;
  }

  clearError(control: string) {
    const field = this.contactForm.get(control);
    if (field && field.invalid) {
      field.markAsUntouched();
      this.submissionError = null;
    }
  }

  closeTooltip(control: string) {
    const field = this.contactForm.get(control);
    if (field) {
      field.setErrors(null);
    }
  }

  focusFirstInvalidField() {
    const invalidControl = Object.keys(this.contactForm.controls).find(controlName =>
      this.contactForm.controls[controlName].invalid
    );

    if (invalidControl) {
      const inputElement = document.getElementById(invalidControl);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }
}
