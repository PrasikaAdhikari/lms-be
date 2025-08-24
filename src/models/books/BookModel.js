import Book from "./BookSchema.js";

// create book
export const insertBook = (bookObj) => {
  return Book(bookObj).save();
};

// get all book
export const getAllBooks = (filterObj) => {
  return Book.find(filterObj);
};

//update book
export const updateBookById = (_id, bookObj) => {
  return Book.findByIdAndUpdate(_id, bookObj);
};
//delte book
export const deleteBook = (_id) => {
  return Book.findByIdAndDelete(_id);
};
