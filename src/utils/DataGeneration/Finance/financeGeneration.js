const { faker } = require("@faker-js/faker/locale/en_IN");

function buildPan() {
  return (
    faker.string.alpha({ length: 5, casing: "upper" }) +
    faker.string.numeric(4) +
    faker.string.alpha({ length: 1, casing: "upper" })
  );
}

function buildFinanceRecord(index) {
  const uniqueSuffix = `${Date.now()}${index}${faker.string.numeric(4)}`;

  return {
    id: faker.string.uuid(),
    account: {
      accountNumber: uniqueSuffix.slice(-12),
      accountName: faker.person.fullName(),
      accountType: faker.helpers.arrayElement([
        "Savings",
        "Current",
        "Salary",
        "NRI",
        "Fixed Deposit",
      ]),
      ifscCode: faker.helpers.replaceSymbols("????0######"),
      bankName: faker.helpers.arrayElement([
        "State Bank of India",
        "HDFC Bank",
        "ICICI Bank",
        "Axis Bank",
        "Punjab National Bank",
        "Bank of Baroda",
        "Kotak Mahindra Bank",
        "Canara Bank",
        "Union Bank of India",
        "IndusInd Bank",
      ]),
      branch: `${faker.location.city()} Branch`,
    },
    transaction: {
      transactionId: `TXN${uniqueSuffix}`,
      type: faker.helpers.arrayElement([
        "Credit",
        "Debit",
        "UPI",
        "NEFT",
        "RTGS",
        "IMPS",
        "Net Banking",
      ]),
      amount: parseFloat(
        faker.finance.amount({ min: 100, max: 500000, dec: 2 }),
      ),
      currency: "INR",
      date: faker.date.between({ from: "2023-01-01", to: "2026-12-31" }),
      description: `A ${faker.helpers.arrayElement(["deposit", "transfer", "payment"])} of INR ${faker.finance.amount({ min: 100, max: 500000, dec: 2 })} via ${faker.helpers.arrayElement(["UPI", "NEFT", "IMPS"])}`,
      status: faker.helpers.arrayElement([
        "Success",
        "Pending",
        "Failed",
        "Reversed",
      ]),
    },
    upiId: `${faker.internet.username().toLowerCase()}@upi`,
    pan: buildPan(),
    creditScore: faker.number.int({ min: 300, max: 900 }),
    loan: {
      hasLoan: faker.datatype.boolean(),
      loanType: faker.helpers.arrayElement([
        "Home Loan",
        "Car Loan",
        "Personal Loan",
        "Education Loan",
        "Business Loan",
      ]),
      loanAmount: parseFloat(
        faker.finance.amount({ min: 50000, max: 5000000, dec: 2 }),
      ),
      emi: parseFloat(faker.finance.amount({ min: 1000, max: 50000, dec: 2 })),
      tenure: `${faker.number.int({ min: 1, max: 30 })} years`,
    },
  };
}

const generateFinanceData = (count = 100) =>
  Array.from({ length: count }, (_, index) => buildFinanceRecord(index));

module.exports = generateFinanceData;
