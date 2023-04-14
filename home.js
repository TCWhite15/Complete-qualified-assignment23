//define function that has a single parameter, an array of book objects and return a number that reps the number of book ojects
function getTotalBooksCount(books) {
  return books.length;
}
//define function, has one parameter: accounts and returns a number that reps the number of account objects in the array
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
//define function, has one parameter: books; return a number that reps the number of books that are currently checked out of the lib--to find--look at first transaction object in the borrows array for each book
//if the trans says book is not returned: false, the book is borrowed
function getBooksBorrowedCount(books) {
  // Use filter to find all currently checked books
  let currentlyBorrowed = books.filter((book)=> book.borrows[0].returned == false);
  return currentlyBorrowed.length;
}

//define function; single parameter books, returns 5 or fewer objects for most common genres; ordered from most common to least common. Each object should have two keys: name and count; if there is a tie array should only contain five objects no more

function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  const result = [];
  const count = {};
  genre.forEach(function (index) {
    count[index] = (count[index] || 0) + 1;
  });
  for (let key in count) {
    result.push({
      name: key,
      count: count[key],
    });
  }
  result.sort((a, b) => (a.count < b.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const sliceEnd = books.length > 5 ? 5 : books.length;
  return books.map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    .sort((a,b) => b.count - a.count)
    .slice(0, sliceEnd);
  }

function getMostPopularAuthors(books, authors) {
  const result= [];
  authors.forEach(author => {
    const returnAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length;
      }
    })
    result.push(returnAuthor);
  })
  return result.sort((a,b) => b.count - a.count).slice(0, 5);
}
module.exports = {
 getTotalBooksCount,
 getTotalAccountsCount,
 getBooksBorrowedCount,
 getMostCommonGenres,
 getMostPopularBooks,
 getMostPopularAuthors,
 };