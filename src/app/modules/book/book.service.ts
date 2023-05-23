import { IBook } from "./book.interface";
import User from "./book.model";

// Task 2: Retrieve books from the "Books" collection with a specific genre, such as "Fantasy"
export const getUsersFromDB = async (): Promise<IBook[]> => {
  const users = await User.find({ genre: "Fantasy" });
  return users;
};

// Task 3: Retrieve books from the "Books" collection with genre "Sci-Fi" and published by "Roli Books"
export const getSciFiBooksFromDB = async (): Promise<IBook[]> => {
  const users = await User.find({
    genre: "Sci-Fi",
    "publisher.name": "Roli Books"
  });
  return users;
};

//Task 4: Retrieve books from the "Books"
export const updateFeaturedBooksInDB = async () => {
  const books = await User.aggregate([{
    $match: {
      rating: { $gte: 4 }
    }
  }, {
    $addFields: {
      featured: {
        $cond: {
          if: { $gt: ['$rating', 4.5] },
          then: 'BestSeller', else: 'Popular'
        }
      }
    }
  },
  {
    $merge: { into: "books" }
  }
  ]);
  return books;
};


// task 5 

export const UpdatePriceFromDB = async () => {
  const books = await User.updateMany({
    publicationYear: { $gt: 2020 },
    price: { $type: "string" }
  },
    [{ $set: { price: { $toInt: "$price" } } }]);
  return books;
}
