**PROJECT TITLE:User Registration with Validation**

**PROBLEM STATEMENT**

In many web applications, users are often able to submit incomplete or invalid registration details, leading to data inconsistencies, security issues, and poor user experience. A lack of proper input validation can cause problems such as incorrect email formats, weak passwords, or mismatched confirmation passwords.

This project aims to develop a User Registration Form using AngularJS that ensures accurate and secure data entry through real-time validation. The system validates all input fields — name, email, password, and confirm password — before allowing submission, ensuring that only valid and correctly formatted data is accepted.
# User Registration with Validation

**Tools:** AngularJS (1.x)  
**Functionality:** Form with name, email, password, confirm password. Validations for required fields, email format, password pattern, and matching passwords. Submit button disabled until valid.

## Features
- Real-time validation messages  
- Password and confirm password match check  
- Disabled submit button until valid  
- Success message on registration  
- Table displays registered users

## Setup Guide
1. Create a folder `UserRegistration`.  
2. Add two files:  
   - `index.html` → HTML code  
   - `app.js` → AngularJS controller code  
3. Keep both files in the same folder.  
4. Open `index.html` in a browser.  
5. Fill the form → Register → See success message and user table.

## Notes
- Data is client-side only; refresh clears users.  
- Passwords are not displayed in the table.  
- Can be extended with backend or localStorage.
