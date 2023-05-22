    import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';
    
    //creating schema using interface
const userSchema = new Schema<IUser>({
    title: {
        type: String,
        required: true
    },
author:[ { 
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
});


//Creating model using interface

 const User = model<IUser>('myUser', userSchema);

 export default User;