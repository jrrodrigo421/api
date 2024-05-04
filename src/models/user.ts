import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  address: string;
  city: string,
  cpf: number;
  phone: number,
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {type: String, required: true},
  city: {type: String, required: true},
  cpf: {type: Number, required: true},
  phone: {type: Number, required: true},
  
});

export default mongoose.model<User>('User', UserSchema);
