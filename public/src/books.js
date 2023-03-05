// Returns the author object that has the matching ID.
function findAuthorById(authors, id) {
  let foundAuthor = null; 
  const findAuthor = authors.find((author) => {
    if (author.id === id)
    foundAuthor = author; 
  })
  return foundAuthor; 
}; 

// Returns the book object that has the matching ID.
function findBookById(books, id) { 
  let foundBook = null; 
  const findBook = books.find((book) => {
    if (book.id === id)
    foundBook = book;  
  })
  return foundBook; 
}; 

// parameter: array of book objects
// returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
// The first array contains book objects that represent the books _that are currently checked out_
// while the second array contains book objects that represent the books _that have been returned
// You can check for the return status by looking at the first transaction object in the `borrows` array
function partitionBooksByBorrowedStatus(books) {
  // filter books that are currently checked out
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false)
    // filter books that are returned
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true); 
    // return an array with the two arrays inside of it
  const borrowedStatus = [borrowedBooks, returnedBooks]; 
  return borrowedStatus; 
}; 

// should return an array for a book of all borrowers with their information and return status
// the returned array should be ten or fewer account objects
function getBorrowersForBook(book, accounts) {
  const returned = book.borrows[0].returned
  let getBorrow = book.borrows.map((borrow) => {
   let accountInfo = accounts.find((account) => account.id === borrow.id);
    accountInfo.returned = borrow.returned;
      return accountInfo})
 
  return getBorrow.slice(0, 10)
  }; 


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
