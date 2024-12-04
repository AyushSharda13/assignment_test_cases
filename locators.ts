// locators.ts

export const HomepageLocators = {
    loginLink: 'a#login2',   
    signupLink: 'a#signin2', 
    phoneCategory: 'a:has-text("Phones")',  
    laptopCategory: 'a:has-text("Laptops")', 
    cartButton: 'a#cart',  
  };
  
  export const LoginLocators = {
    usernameField: 'input[name="username"]',
    passwordField: 'input[name="password"]',
    loginButton: 'button:has-text("Log in")',
    loginErrorMessage: 'div.alert.alert-danger', 
    userProfile: 'div#user-profile', 
  };
  
  export const SignUpLocators = {
    usernameField: 'input[name="username"]',
    passwordField: 'input[name="password"]',
    confirmPasswordField: 'input[name="confirmpassword"]',
    signUpButton: 'button:has-text("Sign up")',
    signUpSuccessMessage: 'div#sign-up-success', 
    passwordMismatchMessage: 'div.alert.alert-danger', 
  };
  