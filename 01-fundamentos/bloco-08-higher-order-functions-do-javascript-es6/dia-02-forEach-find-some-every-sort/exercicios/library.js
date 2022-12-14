const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

function authorBornIn(year) {
    return books.find((element) => element.author.birthYear === year).author.name;
}

function smallerName() {
    let nameBook = books[0].name;

    books.forEach((element) => {
        if (element.name.length < nameBook.length) {
            nameBook = element.name;
        }
    });

    return nameBook;
}

function getNamedBook() {
   return books.find((element) => element.name.length === 26);
}

function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => a.releaseYear - b.releaseYear);
}

function everyoneWasBornOnSecXX() {
    return books.every((element) => element.birthYear > 1900 && element.birthYear < 2000);
}

function someBookWasReleaseOnThe80s() {
    return books.some((element) => element.releaseYear > 1980 && element.releaseYear < 1989);
}

function authorUnique() {
    return books.every((element) => element.birthYear)
}

function authorUnique() {
    return !books.every((i) => (books.some((j) => i.author.birthYear === j.author.birthYear && i.author.name !== j.author.name)));
}

// console.log(authorBornIn(1947));
// console.log(smallerName());
// console.log(getNamedBook());
// console.log(booksOrderedByReleaseYearDesc());
// console.log(everyoneWasBornOnSecXX());
// console.log(someBookWasReleaseOnThe80s());
console.log(authorUnique());
