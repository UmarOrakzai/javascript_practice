class User{
    constructor(username){
        this.username = username

    }

    UserName(){
        console.log(`${this.username}`);
        
    }
}

class Teacher  extends User{
    constructor(username, userEmail, userPassword){
        super(username)
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    TeacherCourse(){
        console.log(`The new course is added by ${this.username}`);
        
    }
}

const TeacherOne = new Teacher('umar','umar@gmail.com','3452')
TeacherOne.TeacherCourse()