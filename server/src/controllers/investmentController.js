const mongoose = require("mongoose");
const { use } = require("../routes/authRoutes");
const Schema = mongoose.Schema;

const investmentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true }, // Ex: 'ações', 'fundos', 'CDBs'
  initialAmount: { type: Number, required: true },
  annualRate: { type: Number, required: true }, // Taxa de rendimento anual (%)
  adminFee: { type: Number, required: true }, // Taxa de administração (%)
  performanceFee: { type: Number }, // Taxa de performance (%)
  taxRate: { type: Number, required: true }, // Imposto sobre o rendimento (%)
  startDate: { type: Date, required: true },
  endDate: { type: Date },
});

