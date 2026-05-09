// models/Finance.js
const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema(
  {
    account: {
      accountNumber: { type: String, required: true, unique: true },
      accountName: { type: String, required: true },
      accountType: {
        type: String,
        enum: ["Savings", "Current", "Salary", "NRI", "Fixed Deposit"],
        required: true,
      },
      ifscCode: { type: String, required: true },
      bankName: { type: String, required: true },
      branch: { type: String },
    },
    transaction: {
      transactionId: { type: String, required: true, unique: true },
      type: {
        type: String,
        enum: ["Credit", "Debit", "UPI", "NEFT", "RTGS", "IMPS", "Net Banking"],
        required: true,
      },
      amount: { type: Number, required: true },
      currency: { type: String, default: "INR" },
      date: { type: Date, required: true },
      description: { type: String },
      status: {
        type: String,
        enum: ["Success", "Pending", "Failed", "Reversed"],
        required: true,
      },
    },
    upiId: { type: String },
    pan: {
      type: String,
      uppercase: true,
      match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"],
    },
    creditScore: { type: Number, min: 300, max: 900 },
    loan: {
      hasLoan: { type: Boolean, default: false },
      loanType: {
        type: String,
        enum: [
          "Home Loan",
          "Car Loan",
          "Personal Loan",
          "Education Loan",
          "Business Loan",
        ],
      },
      loanAmount: { type: Number },
      emi: { type: Number },
      tenure: { type: String },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Finance", financeSchema);
