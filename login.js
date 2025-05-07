// Trabalhando no login....

// Finalizando sistema de login.
class LoginSystem {
  constructor(name, email, address, phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }

  signInClient(clientNameAuth) {
    if (clientNameAuth === this.name) {
      console.log(`Welcome ${this.name}! You are signed!`);
    } else {
      console.log(`You dont have signed up. Please sign up.`);
    }
  }

  signUpNewClient(newClientName) {
    console.log("You are signed up!!");
  }
}
