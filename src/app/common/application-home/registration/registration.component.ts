import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../../../shared/models/user";
import { RegistrationService } from "./registration.service";
import { LoginValidators } from "../../../shared/validators/login.validator";


@Component(
    {
        selector: "registration",
        templateUrl: "./registration.component.html"
    }
)
export class RegistrationComponent implements OnInit {

    user: User;
    registerUserForm: FormGroup;
    errorMessage: string;
    successMessage: string;
    constructor(private fb: FormBuilder, private registerService: RegistrationService) {

    }

    ngOnInit() {
        this.user = new User();
        this.createForm();

    }
    createForm() {

        this.registerUserForm = this.fb.group({
            email: [this.user.email, [Validators.required]],
            username: [this.user.username, [Validators.required], null],
            phone: [this.user.phone, [Validators.required, LoginValidators.validatePhoneNumber], null],
            password: [this.user.password, [Validators.required], null],
            confirmPassword: ['', [Validators.required], null]

        });
        console.log(this.user.email);
        console.log(this.user.username);

    }

    registerUser() {
        this.errorMessage = null;
        this.successMessage = null;
        this.user = this.registerUserForm.value as User;

        this.registerService.registerNewUser(this.user)
            .subscribe(
                message => {
                    this.successMessage = message;
                    this.registerUserForm.reset();
                }
                , error => this.errorMessage = error
            )

    }

}
