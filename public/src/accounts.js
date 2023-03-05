// return the accounts object that matches the input id 
function findAccountById(accounts, id) {
  let account = null; 
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      account = accounts[i];    
    }; 
  }; 
  return account; 
}; 

// returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name
function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1: -1); 
  return accounts; 
}; 

// Returns a number that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  let total = 0; 
  let id = account.id; 
  const getTotal = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === id) {
        total ++; 
      }
    })
  })
  return total; 
}; 

// Returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account
function getBooksPossessedByAccount(account, books, authors) {
  let findBook = books.filter(book => book.borrows.find(thisBook => (thisBook.id === account.id && !thisBook.returned)))
 
  findBook.forEach(book => {
     let addAuthor = authors.find(author => book.authorId === author.id)
     book["author"] = addAuthor
  })
   return findBook; 
}; 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
