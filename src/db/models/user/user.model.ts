import {model, Schema, Document} from 'mongoose';
import validator from 'validator';

interface IUser {
  name: string,
  email: string,
  password: string
}

interface IUserDocument extends IUser, Document { };

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        validate(value: string): boolean {
          if (validator.isEmpty(value)) {
            throw new Error('Invalid');
          } else return true;
        },
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: function(value: string): boolean {
          if (!validator.isEmail(value)) {
            throw new Error('Email is invalid');
          } else {
            return true;
          }
        },
      },
      password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value: string): boolean {
          if (value.toLowerCase().includes('password')) {
            throw new Error('Password cannot contain password');
          } else return true;
        },
      },
    },
    {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}},
);

const UserModel = model<IUserDocument>('user', userSchema);

export {IUser, UserModel, IUserDocument};
