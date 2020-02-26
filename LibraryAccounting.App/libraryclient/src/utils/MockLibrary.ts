import { Book } from '../types/Book';

export class MockLibrary {
    private static books: Book[] = [
        new Book("Последнее Желание", "Анджей Сапковский", "ЭКСМО", 2011, 320, 2),
        new Book("Изучаем Java", "Кэти Сьерра", "ЭКСМО", 2012, 450, 1),
        new Book("Назови меня своим именем", "Андре Асиман", "Popcorn Books", 2000, 362, 4),
        new Book("Я все еще здесь", "Клели Авит", "Синдбад", 2019, 256, 4),
        new Book("Смерть в душе", "Жан-Поль Сартр", "Neoclassic", 2018, 448, 2),
        new Book("Легкий способ жить бнз долгов", "Аленн Карр", "Добрая книга", 2015, 256, 1),
    ]

    public static getBooks() {
        return this.books;
    }
}