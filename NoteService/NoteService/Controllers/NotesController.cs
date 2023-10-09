using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NoteService.Model;

namespace NoteService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class NotesController : ControllerBase
    {
        static List<Note> notes = null;
        Random rd;
        public NotesController()
        {
            if (notes == null)
            {
                notes = new List<Note>();
            }
            Random rd = new Random();

        }


        public List<Note> Get()
        {
            return notes;
        }


        [HttpGet("{id}")]
        public IActionResult GetNoteById(int id)
        {
            Note obj =  notes.FirstOrDefault(x => x.id == id);
            if (obj == null)
                return NotFound();
            else
                return Ok(obj);
        }

       [HttpPost]
        public IActionResult AddNote(Note note)
        {
            notes.Add(note);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult EditNote(int id, Note product)
        {
            Note obj = notes.FirstOrDefault(x => x.id == id);
            if (obj != null)
            {
                foreach (Note temp in notes)
                {
                    if (obj.id == id)
                    {
                        obj.description = product.description;
                    }
                }
                return Ok();
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteNote(int id)
        {
            Note obj = notes.FirstOrDefault(x => x.id == id);
            if (obj != null)
            {
                notes.Remove(obj);
                return Ok();
            }
            return NotFound();
        }

    }
}
