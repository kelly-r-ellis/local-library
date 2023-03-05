
//returns a _number_ that represents the number of book objects inside of the array
function getTotalBooksCount(books) {
  let count = 0; 
  for (let i = 0; i < books.length; i++) {
    count = count + 1; 
  } 
  return count; 
}; 

// Returns a _number_ that represents the number of account objects inside of the array
function getTotalAccountsCount(accounts) {
  let count = 0; 
  for (let i = 0; i < accounts.length; i++) {
    count = count + 1; 
  }
  return count; 
}; 

// Returns a _number_ that represents the number of books that are currently checked out of the library
// This number can be found by looking at the first transaction object in the `borrows` array of each book
// If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.
function getBooksBorrowedCount(books) {
  let count = 0; 
  books.forEach((book) => {
    const borrow = book.borrows; 
    if (borrow[0].returned === false) {
      count = count + 1;
    }
  }); 
  return count; 
}; 

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre); 

  let commonGenres = genres.reduce((acc, genre) => {
    if (!acc[genre]){
      acc[genre] = {name: genre, count: 0}
    } 
      acc[genre].count++; 
    return acc;  
  }, []); 
  return Object.values(commonGenres).sort((genreA, genreB) => genreB.count - genreA.count).slice(0, 5)
}

function getMostPopularBooks(books) {
  // create an empty array 
  let mostPopular = []; 
  // loop through books array
  books.forEach((book) => {
  // add the book title and length of borrows to the array 
   mostPopular.push({name: book.title, count: book.borrows.length}); 
}); 
  return Object.values(mostPopular).sort((bookA, bookB)=> bookB.count - bookA.count).slice(0, 5) 
}; 

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];

  // Define helper function to get books by author
  function getAuthorById(authorId) {
    return books.filter((book) => book.authorId === authorId);
  }

  authors.forEach((author) => {
    const { first, last } = author.name;
    let authorObject = { name: `${first} ${last}`, count: 0 };

    // Get books by author
    const authorsById = getAuthorById(author.id);

    // Count the number of times the author's books have been borrowed
    authorsById.forEach((book) => {
      authorObject.count += book.borrows.length;
    });

    popularAuthors.push(authorObject);
  });

  // Sort by count in descending order and return the top 5
  return popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
