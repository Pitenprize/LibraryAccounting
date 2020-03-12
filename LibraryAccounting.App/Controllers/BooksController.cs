using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LibraryAccounting.Core.Interfaces;
using LibraryAccounting.Core.Models;

namespace LibraryAccounting.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository bookRepository;

        public BooksController(IBookRepository bookRepository)
        {
            this.bookRepository = bookRepository;
        }

        [HttpGet]
        [Route("get")]
        public async Task<IEnumerable<Book>> Get()
        {
            return await this.bookRepository.GetAll();
        }

        [HttpGet]
        [Route("get/{id}")]
        public async Task<Book> Get(int bookId)
        {
            return await this.bookRepository.GetById(bookId);
        }
    }
}