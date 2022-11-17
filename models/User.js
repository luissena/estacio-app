const mongoose = require("mongoose");

// Criando Schema | Duvida: Pode deixar algum em branco para atualizar depois?

const userSchema = mongoose.Schema({
  email: { type: String, required: true, minlength: 3, maxlength: 100 },
  password: { type: String, required: true, minlength: 1, maxlength: 200 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
