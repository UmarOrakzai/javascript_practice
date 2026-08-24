function User(username, userLogedCount, logedIn){

    this.username = username;
    this.userLogedCount = userLogedCount;
    this.logedIn = logedIn;

}


const userOne = new User('umar',12, true);

const userTwo =  new User('khan', 12, false);