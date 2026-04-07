package ma.ensa.backend.service;

import ma.ensa.backend.entity.Note;
import ma.ensa.backend.repo.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    @Autowired
    private NoteRepository repository;
    public List<Note> findAll() { return repository.findAll(); }
    public Note save(Note note) { return repository.save(note); }
}
