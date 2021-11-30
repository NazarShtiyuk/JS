//  Створити карту користувача(User Card):
class UserCard {

    constructor(key, balance, transactionLimit, historyLogs) {
        this.key = key;
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = historyLogs;
    }

    getCardOptions() {
        return {
            key: this.key,
            balance: this.balance,
            transactionLimit: this.transactionLimit,
            historyLogs: this.historyLogs
        }
    }

    operation(operationType, credits, operationTime) {
        return {
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        };
    }

    putCredit(putCredit) {
        this.historyLogs.push(this.operation('Receirved credits', putCredit, '30/11/2021, 18:35'));
        return this.balance += putCredit;
    }

    takeCredit(takeCredit) {
        this.historyLogs.push(this.operation('Withdrawal of credits', takeCredit, '30/11/2021, 19:35'));
        return this.balance -= takeCredit;
    }

    setTransactionLimit(setTransactionLimit) {
        this.historyLogs.push(this.operation('Transaction limit change', setTransactionLimit, '30/11/2021, 17:35'));
        return this.transactionLimit = setTransactionLimit;
    }

    transferCredits(transferCredits, user) {
        if (this.balance > transferCredits) {
            this.balance -= (transferCredits + (transferCredits * 0.005));
            return user.balance += transferCredits;
        } else {
            console.log(`На балансі недостатньо коштів!`)
        }
    }
}

// let card1 = new UserCard(2, 500, 100, []);
// let card2 = new UserCard(1, 200, 1000, []);
// card1.getCardOptions();
// card2.getCardOptions();
// card1.putCredit(100);
// card1.takeCredit(150);
// card1.setTransactionLimit(500);
// card1.transferCredits(280, card2);
// console.log(card1);
// console.log(card2);


//  Створити UserAccount:
class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }
    addCard(key) {
        if (this.cards.length <= 3 && key < 4 && key > 0) {
            return this.cards.push(new UserCard(key, 100, 100, []));
        } else {
            console.log(`У користувача ${name} більше уже є 3 картки або key не входить в проміжок від 1 до 3!`)
        }
    }
    getCardByKey(key) {
        for (let i = 0; i < this.cards.length; i++) {
            if (i === key - 1) {
                return this.cards[i];
            }
        }
    }
}
let user = new UserAccount('bob', []);
user.addCard(1);
user.addCard(2);
user.addCard(3);

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredit(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredit(50);

console.log(user);
console.log(user.getCardByKey(2));
