export interface User {
  firstName: string;
  lastName: string;
  address: string ;
  email: string;
  phoneNumber: string;
  password : string
  verified : boolean ;

}
export class User implements User {

  constructor(firstName,lastName,address,email,PhoneNumber,password,verified) {
    this.firstName=firstName ;
    this.lastName=lastName ;
    this.address=address ;
    this.email=email ;
    this.phoneNumber=PhoneNumber ;
    this.password=password ;
    this.verified=verified ;

  }

}
