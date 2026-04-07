package ma.ensa.backend.ws.facade;

import ma.ensa.backend.entity.Note;
import ma.ensa.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin("*")
public class NoteFacade {
    @Autowired
    private NoteService service;

    @GetMapping("/")
    public List<Note> getAll() { return service.findAll(); }

    @PostMapping("/")
    public Note save(@RequestBody Note note) { return service.save(note); }
}