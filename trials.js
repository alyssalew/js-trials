// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set("home", "510-867-5309");
phoneNumbers.set("mobile", "415-555-1212");
phoneNumbers.set("business", "415-123-4567");

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function printInfo(accountHolder, accountNumber, businessName) {
    console.log(`Account Holder Name: ${accountHolder}`);
    console.log(`Account Holder Number: ${accountNumber}`);
    console.log(`Business Name: ${businessName}`);
}


// Add function to print all addresses, including a header
function showAddresses(addresses){
    console.log("Addresses");
    for (let address of addresses){
        console.log(`\t ${address}`);
    }

}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers) {
    console.log("Phone Numbers:");
    for (let phoneNumber of phoneNumbers) {
        console.log(phoneNumber[0] + ": " + phoneNumber[1]);
    }
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
    transactions.set(date, amount);
}

// Use the function to add transactions
addTransaction("May-2", -500)
addTransaction("May-13", 1200)
addTransaction("May-15", -100)
addTransaction("May-21", -359)
addTransaction("May-29", 2200)


// Add function to show balance status
function showBalanceStatus(amount){
    console.log(`balance: ${amount}`);
    if (amount < 0){
        console.log("You are overdrawn!");
    }
    else if (amount < 20){
        console.log("Warning: You are close to zero balance.");
    }
    else{
        console.log("Thank you for your business!");
    }
}

// Add function to show transactions
function showTransactions(transactions, beginningBalance) {
    console.log(`Beginning Balance: ${beginningBalance}`);
    let newBalance;

    for (let transaction of transactions) {
        let transactionType;


        if (transaction[1] < 0) {
            transactionType = "withdrawal"
        }
        else {
            transactionType = "deposit"
        }

        newBalance = beginningBalance + transaction[1];

        if (newBalance <0){
            newBalance = newBalance - 25;
            console.log('$25 fee for overdraw :(');
        }

        console.log(`Transaction Date: ${transaction[0]},
                    ${transactionType}, ${transaction[1]},
                      ${newBalance}`);
    }

    console.log(newBalance);
    showBalanceStatus(newBalance);
}

let startingBalance = 26000;
showTransactions(transactions, startingBalance);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = {
    'Account Holder': accountHolder,
    'Account Number': accountNumber,
    'Business Name': businessName,
    'Addresses': addresses,
    'Phone Numbers': phoneNumbers,
    'Transactions': transactions,
    'Starting Balance': startingBalance
};

// Function to add customer attributes

function addProperties(faveMelon="Cantaloupe", numPets=2) {
    customer["Favorite Melon"] = faveMelon;
    customer["Number of Pets"] = numPets;
}


// Add attributes for this user
addProperties('Casaba', 2);


// ///////////////////////////////////////////////////////
// Getting a Business Loan
function returnInterestRate(income, customer){
    let preferredCustomer = false;
    if (customer['Favorite Melon'] === 'Casaba'
        || customer['Number of Pets']  >= 5) {
        preferredCustomer = true;
    };
    if (income < 100000){
        if preferredCustomer{
            return '5%';
        }
        else{
            return '8%';
        }
    }
    else if(income < 200000){
         if preferredCustomer{
            return '4%';
        }
        else{
            return '7%';
        }
    }
    else{
        return '4%';
    }
}

// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours




