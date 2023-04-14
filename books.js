//find function two parameters author and id that return the author that matches id
function findAuthorById(authors, id) {
   let findIdInt = authors.find((author) => author.id === id);
   return findIdInt;
}
//define function with two parameters book ojects string id that returns the book that matches the id
function findBookById(books, id) {
  let found = idFinder(books, id);
  return found;
}
function idFinder(array, id) {
  return array.find((index) => index.id == id);
}

//define function with single parameter books; return two arrays inside it. 1st array contains books that are chkd out 2nd array contains books returned
function partitionBooksByBorrowedStatus(books) {
  let currentlyChecked = books.filter((book) => book.borrows[0].returned == false);
  let currentlyReturned = books.filter((book) => book.borrows[0].returned == true);
  let result = [currentlyChecked, currentlyReturned];
  return result;
}
//define function with two parameters in order book, accounts; return array of 10 or less accounts. Each account object should include returned entry from transaction object in borrows array.
function getBorrowersForBook(book, accounts) {
    
  let bookResult = book.borrows.map(borrower => { 
  let bookResult = accounts.find(account => borrower.id === account.id )
    bookResult.returned = borrower.returned;
    return bookResult;
   })
   return bookResult.filter((borrower, index)=> bookResult.findIndex(item => item.id === borrower.id) === index);
 
}

module.exports = {
 findAuthorById,
 findBookById,
 partitionBooksByBorrowedStatus,
 getBorrowersForBook, 
 };