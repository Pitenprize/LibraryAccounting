export class Book {
    constructor(
        public id: number,
        public name: string,
        public author: string,
        public publisher: string,
        public publicationYear: number,
        public pageCount: number,
        public quantity: number
    ) { }
}