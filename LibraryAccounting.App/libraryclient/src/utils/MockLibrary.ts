import { Book } from '../types/Book';

export class MockLibrary {
    private static books: Book[] = [
        new Book(1, "Последнее Желание", "Анджей Сапковский", "ЭКСМО", 2011, 320, 2),
        new Book(2, "Изучаем Java", "Кэти Сьерра", "ЭКСМО", 2012, 450, 1),
        new Book(3, "Назови меня своим именем", "Андре Асиман", "Popcorn Books", 2000, 362, 4),
        new Book(4, "Я все еще здесь", "Клели Авит", "Синдбад", 2019, 256, 4),
        new Book(5, "Смерть в душе", "Жан-Поль Сартр", "Neoclassic", 2018, 448, 2),
        new Book(6, "Легкий способ жить без долгов", "Аленн Карр", "Добрая книга", 2015, 256, 1),
    ]

    public static getBooks() {
        return this.books;
    }
}