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
    type: String,
    ref: 'Person'
  }],
  ancestors: [{
    type: String,
    ref: 'Person'
  }],
  children: [{
    type: String,
    ref: 'Person'
  }],
  grandchildren: [{
    type: String,
    ref: 'Person'
  }]

},
 {
  timestamps: true,
  versionKey: false

 });

export const PersonCollection = mongoose.model('Person', personSchema);

