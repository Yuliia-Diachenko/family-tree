import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  parents: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }],
  ancestors: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }],
  children: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }],
  grandchildren: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }]

},
 {
  timestamps: true,

 });

export const PersonCollection = mongoose.model('Person', personSchema);

