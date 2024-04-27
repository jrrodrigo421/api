import mongoose, { Schema, Document } from 'mongoose';

export interface Professional extends Document {
  name: string;
  category: string;
  location: string;
  availability: string[];
}

const ProfessionalSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  availability: [{ type: String }],
});

export default mongoose.model('Professional', ProfessionalSchema);
