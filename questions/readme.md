```sh
Question 1.

MongoDB is a type of database that stores data in collections, which are similar to tables in traditional relational databases. A model in MongoDB is an object that represents a collection and provides methods for interacting with it. An interface is a set of methods that define how the model can be used, and a schema is a blueprint for the structure of the data that will be stored in the collection.

By creating a model with an interface and schema, developers can define the structure of the data that will be stored in the collection. This helps ensure that data is consistent and follows a specific format, which can make it easier to query and analyze. It also helps prevent errors and inconsistencies in the data.
```

```sh
Question 2.

Field filtering in MongoDB is a technique used to specify which fields to include or exclude in the returned documents. This can be useful when you want to retrieve only a specific set of fields from a large document or when you want to exclude sensitive or unnecessary data.

o specify which fields to include or exclude, you can use the projection parameter in MongoDB queries. The projection parameter takes a document that defines which fields to include or exclude. 

To include specific fields, we can use the following syntax:

```
db.collection.find({}, { field1: 1, field2: 1 })
```

This query will return documents that only include the field1 and field2 fields.
```

```sh
Question 3.


In MongoDB models, instance methods are functions that are defined on individual documents in a collection. These methods can be used to manipulate or access data specific to that document.

For example:

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  }
});

blogPostSchema.methods.like = function() {
  this.likes++;
  return this.save();
};


Now, when we have a specific blog post document, we can call the "like" method on it to increment the likes field:


const post = await BlogPost.findById(postId);
await post.like();
```

```sh
Question 4.

In MongoDB queries, comparison operators are used to compare values and retrieve documents that meet certain criteria. The following are examples of how to use some of the most commonly used comparison operators:

1. $ne (not equal to): This operator is used to retrieve documents where a particular field is not equal to a specified value.

Example: Retrieve all documents where the "age" field is not equal to 25.

```
db.collection.find({ age: { $ne: 25 } })
```



2. $gt (greater than): This operator is used to retrieve documents where a particular field is greater than a specified value.

Example: Retrieve all documents where the "age" field is greater than 30.

```
db.collection.find({ age: { $gt: 30 } })
```




3. $lt (less than): This operator is used to retrieve documents where a particular field is less than a specified value.

Example: Retrieve all documents where the "age" field is less than 20.

```
db.collection.find({ age: { $lt: 20 } })
```



4. $gte (greater than or equal to): This operator is used to retrieve documents where a particular field is greater than or equal to a specified value.

Example: Retrieve all documents where the "age" field is greater than or equal to 25.

```
db.collection.find({ age: { $gte: 25 } })
```



5. $lte (less than or equal to): This operator is used to retrieve documents where a particular field is less than or equal to a specified value.

Example: Retrieve all documents where the "age" field is less than or equal to 40.

```
db.collection.find({ age: { $lte: 40 } })
```
```

```sh
Question 5.

The "$in" and "$nin" operators are used in MongoDB to match or exclude values against an array of values. 

The "$in" operator is used to match documents where the value of a field matches any value in a specified array. For example, if we have a collection of products and we want to find all products that have either "red" or "blue" as their color, we can use the "$in" operator as follows:

```
db.products.find({color: {$in: ["red", "blue"]}})
```

This will return all documents where the "color" field matches either "red" or "blue".
```
