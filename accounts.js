//define function & add two objects, return account
function findAccountById(accounts, id) {
   let findId = accounts.find((account) => account.id === id);
   return findId;
}
//define function with 1 array that is sorted to provide account objects name: first and last
function sortAccountsByLastName(accounts) {
  let alphaName = accounts.sort((nameA,nameB) =>
  nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 :   -1); 
  return alphaName;
}
//define function with two parameters in order account object and an array of all book objects
//return a number that reps total times the acct id appears in any book's borrows array
function getTotalNumberOfBorrows(account, books) {
  let userId = account.id;
  let borrowArr = 0;
  let total = books.reduce((acc, book) => {
    let borrowRecord = book.borrows;
    let mapIds = borrowRecord.map((record) => record.id);
    if (mapIds.includes(userId)) acc++;
    return acc;
  }, borrowArr);
  
  return total;
}

//create a function with three parameters of objects
//return an array of book objects with authors of books currently checked out by account
  
function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id ===     account.id && acc.returned === false))
    .map(book => { const author = authors.find(author => author.id ===   book.authorId)
      book.author = author; 
      return book;         
 })  
} 
module.exports = {
 findAccountById,
 sortAccountsByLastName,
 getTotalNumberOfBorrows,
 getBooksPossessedByAccount
};