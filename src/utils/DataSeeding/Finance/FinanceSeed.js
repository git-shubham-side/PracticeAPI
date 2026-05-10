// unused removed later: manual seed script is not part of the current app flow
const Finance = require("../../../models/Finance");
const generateFinanceData = require("../../DataGeneration/Finance/financeGeneration");
const mongoose = require("mongoose");
const connDb = require("../../../connectDB/db");
// connDb(); // unused removed later

async function financeDataSeeding() {
  try {
    const data = generateFinanceData(100);
    const res = await Finance.insertMany(data);
    console.log("Data Inserted Successfully");
    await mongoose.disconnect();
  } catch (err) {
    console.log("Error While Inserting");
    console.log(err.message);
  }
}

// financeDataSeeding();
