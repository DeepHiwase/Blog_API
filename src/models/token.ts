/**
 * @copyright 2025 deephiwase
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Schema, model, Types } from 'mongoose';

interface ITOKEN {
  token: string;
  userId: Types.ObjectId;
}

const tokenSchema = new Schema<ITOKEN>({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export default model<ITOKEN>('Token', tokenSchema);
