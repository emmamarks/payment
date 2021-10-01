const database = {}

const addUser = (username) => {
    if (typeof username !== 'string') return "Username is not defined";
    if(database.hasOwnProperty(username)) return "This username already exists"
    database[username] = {
        username,
        wallet: 0
    }
    return database[username];
};
const depositMoney = (username, amount) => {
    if(!username || !amount) return "Username and amount are required";
    if(typeof amount !== "number") return "Amount must be a number";
    if(!database[username]) return "User does not exist";

    database[username].wallet = database[username].wallet + Number(amount);
    return "Amount deposited successfully";
};
const sendMoney = (sender, receiver, amount) => {
    if(!sender || !receiver || !amount) return "Sender, receiver and amount are required";
    if(typeof amount !== "number") return "Amount must be a number";

    if(!database[sender]) return "Sender does not exist";
    if(!database[receiver]) return "Receiver does not exist";

    if(database[sender].wallet < Number(amount)) return "Insufficient balance";

    database[sender].wallet = database[sender].wallet - Number(amount);
    database[receiver].wallet = database[receiver].wallet + Number(amount);

    return "Amount transferred to receiver successfully";
};
const checkBalance = (username) => {
    if(!database[username]) return "User does not exist";

    return database[username].wallet;
}

const newuser = 'Jacob';
console.log(addUser(newuser))
console.log(checkBalance(newuser))
console.log(depositMoney(newuser, 50));
console.log(checkBalance(newuser))
console.log(addUser('Emma'))
console.log(sendMoney('Jacob', 'Emma', 10))
console.log(checkBalance(newuser))
console.log(checkBalance('Emma'))