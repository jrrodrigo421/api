// src/models/professional.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Professional extends Document {
  name: string;
  category: string;
  location: string;
  availability: string[];
  // Outros campos conforme necessário
}

const ProfessionalSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  availability: [{ type: String }],
  // Defina outros campos conforme necessário
});

export default mongoose.model('Professional', ProfessionalSchema);
