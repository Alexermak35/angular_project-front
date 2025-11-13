import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user-service';
import { FormsModule } from '@angular/forms';
import { zip } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {


  formData = {
    username: '',
    email: '',
    phone: '',
    fullName: '',
    address: '',
    zipcode: '',
    city: ''
  };






  ngOnInit() {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        this.formData.username = user.username || '';
        this.formData.email = user.email || '';
        this.formData.phone = user.phone || '';
        this.formData.fullName = user.fullName || '';
        this.formData.address = user.address || '';
        this.formData.zipcode = user.zipcode || '';
        this.formData.city = user.city || '';
        console.log('Loaded user data:', this.formData);

        this.textFullName = user.fullName;
        this.textAddress = user.address;
        this.textZipcode = user.zipcode;
        this.textCity = user.city;
      } catch (e) {
        console.error('Error parsing stored user data:', e);
      }
    }
  }



  private timeoutFullName: any;
  textFullName: string = this.formData.fullName;

  onFullNameChange(value: string) {
    clearTimeout(this.timeoutFullName);
    this.timeoutFullName = setTimeout(() => {
      this.formData.fullName = value;
      this.userService.updateUserFullName(value).subscribe({
        next: (res) => {
          console.log('✅ Full name update success:', res);
          alert('Full name updated successfully!');
        },
        error: (err) => {
          console.error('❌ Full name update failed:', err);
          alert('Failed to update full name. Please try again.');
        }
      });

      console.log("User finished typing:", value);
    }, 3000);
  }
  private timeoutAddress: any;
  textAddress: string = '';
  onAdressChange(value: string) {
    clearTimeout(this.timeoutAddress);
    this.timeoutAddress = setTimeout(() => {
      this.formData.address = value;
      this.userService.updateUserAddress(value).subscribe({
        next: (res) => {
          console.log('✅ Address update success:', res);
          alert('Address updated successfully!');
        },
        error: (err) => {
          console.error('❌ Address update failed:', err);
          alert('Failed to update address. Please try again.');
        }
      });
      console.log("User finished typing address:", value);
    }, 3000);
  }

  private timeoutZipcode: any;
  textZipcode: string = ''
  onZipcodeChange(value: string) {
    clearTimeout(this.timeoutZipcode);
    this.timeoutZipcode = setTimeout(() => {
      this.formData.zipcode = value;
      this.userService.updateUserZipcode(value).subscribe({
        next: (res) => {
          console.log('✅ Zipcode update success:', res);
          alert('Zipcode updated successfully!');
        },
        error: (err) => {
          console.error('❌ Zipcode update failed:', err);
          alert('Failed to update zipcode. Please try again.');
        }
      });

      console.log("User finished typing zipcode:", value);
    }, 3000);
  }

  private timeoutCity: any;
  textCity: string = '';
  onCityChange(value: string) {
    clearTimeout(this.timeoutCity);
    this.timeoutCity = setTimeout(() => {
      this.formData.city = value;
      this.userService.updateUserCity(value).subscribe({
        next: (res) => {
          console.log('✅ City update success:', res);
          alert('City updated successfully!');
        },
        error: (err) => {
          console.error('❌ City update failed:', err);
          alert('Failed to update city. Please try again.');
        }
      });
      console.log("User finished typing city:", value);
    }, 3000);
  }


  role: string = '';
  applyCustomerRole() {
    this.role = 'Regular customer';
    this.userService.updateUserRole(this.role).subscribe({
      next: (res) => {
        console.log('✅ Role update success:', res);
        alert('Role updated to Regular Customer!');

      },
      error: (err) => {
        console.error('❌ Role update failed:', err);
        alert('Failed to update role. Please try again.');
      }
    });
  }

  applyStudentRole() {
    this.role = 'Student';
    this.userService.updateUserRole(this.role).subscribe({
      next: (res) => {
        console.log('✅ Role update success:', res);
        alert('Role updated to Student!');
      },
      error: (err) => {
        console.error('❌ Role update failed:', err);
        alert('Failed to update role. Please try again.');
      }
    });
  }

  applyCompanyRole() {
    this.role = 'Company';
    this.userService.updateUserRole(this.role).subscribe({
      next: (res) => {
        console.log('✅ Role update success:', res);
        alert('Role updated to Company!');

      },
      error: (err) => {
        console.error('❌ Role update failed:', err);
        alert('Failed to update role. Please try again.');
      }
    });
  }

  changePhoneNumber(phoneNumber: string) {

    this.userService.updateUserPhoneNumber(phoneNumber).subscribe({
      next: (res) => {
        console.log('✅ Phone number update success:', res);
        alert('Phone number updated successfully!');

      },
      error: (err) => {
        console.error('❌ Phone number update failed:', err);
        alert('Failed to update phone number. Please try again.');
      }
    });
  }

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
