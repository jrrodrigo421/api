import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
name: string;
email: string;
// Outros campos conforme necessário
}

const UserSchema: Schema = new Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
// Defina outros campos conforme necessário
});

export default mongoose.model('User', UserSchema);