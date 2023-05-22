import User from "./user.model";

 //data query from database
 export const createUserToDB= async () => {
    const user = await new User({
       title: "Book 1",
      author: ["Author 1", "Author 2"],
      genre: "Mystery",
      publicationYear: 2020,
      publisher: { 
        name: "Publisher A",
        location: "City A" },
      reviews: [
         {
            user: "User 1", 
            comment: "Great book!" },
         { 
            user: "User 2", 
            comment: "Interesting plot" }
      ],
      rating: 4.5,
      price: "90"

    });
  await user.save();
  return user;
 };