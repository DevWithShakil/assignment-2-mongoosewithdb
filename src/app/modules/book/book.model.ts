import { Schema, model } from 'mongoose';
import { IBook } from './book.interface';

//Task 1: creating schema
const userSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true
    },
    author: [{
        type: String,
        required: true
    },
    ],

    genre: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    },

    publisher: {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },

    },
    reviews: [
        {
            user: {
                type: String,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],


    rating: {
        type: Number,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    // New Field
    featured: {
        type: String,
        required: true
    },
});


//Task 1: Creating model using interface

const User = model<IBook>('books', userSchema);

export default User;