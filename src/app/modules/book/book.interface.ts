  
  //Task 1: Create a MongoDB interface

  export  interface IBook{
       title: string,
        author: string,
        genre: string,
        publicationYear: number,
        publisher: string,
        name: string,
        location: string,
        reviews: string,
        user: string,
        comment: string,
        rating: number,
        price: string,
     featured?: string,
   }