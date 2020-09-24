const { TestScheduler } = require('jest');
const Account = require('./Account');

test("Initial Zero", () =>{
    // Given
    let account = new Account()

    // When

    // Then
    expect(0).toEqual(account.getBalance())


});

test("Transfer Positive", () =>{
    // Given
    let account = new Account()

    // When
    account.transfer(500);

    // Then
    expect(500).toEqual(account.getBalance())


});

test("Transfer Negative", () =>{
    // Given
    let account = new Account()

    // When
    account.transfer(-100);

    // Then
    expect(-100).toEqual(account.getBalance())


});

test("Transfer Multiple", () =>{
    // Given
    let account = new Account()

    // When
    account.transfer(100);
    account.transfer(200);
    account.transfer(-50);

    // Then
    expect(250).toEqual(account.getBalance())


});

