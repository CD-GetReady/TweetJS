class Account {

    constructor(){
        this.balance = 0;
    }

    transfer(amount){
        this.balance += amount;
    }

    getBalance(){
        return this.balance
    }
}

module.exports = Account;