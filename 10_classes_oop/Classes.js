class User {
    constructor(userName, UsereEmail, UserPassword){


        this.userName = userName;
        this.UsereEmail = UsereEmail;
        this.UserPassword = UserPassword;

    }
     EncryptPassword() {
        return `**${this.UserPassword}**`
        
    }
    PrintDetail(){
       return `User Name is${this.userName} User Email ${this.UsereEmail} User Password${this.UserPassword}`
    }
}

const UserOne = new User('umar','umar@gmail.com', '1213')
 console.log(UserOne.EncryptPassword());

console.log(UserOne.PrintDetail());
