package com.Pokeditto.Controller;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Repository.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(value = "/jogador")
public class JogadorController {
    @Autowired
    JogadorRepository jogadorRepository;

    @GetMapping()
    public ResponseEntity<?> listJogadores() {
        return new ResponseEntity<>(jogadorRepository.findAll(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> indexjogador(@PathVariable(value = "id") long id) throws UserNotFoundException {
        if (jogadorRepository.findById(id) != null) {
            return new ResponseEntity<>(jogadorRepository.findById(id), HttpStatus.ACCEPTED);
        }
        throw new UserNotFoundException("Usuario nao encontrado" + id);
        }

    @PostMapping()
    public ResponseEntity<?> createJogador(@RequestBody @Valid Jogador jogador) {
        return new ResponseEntity<>(jogadorRepository.save(jogador), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> upDateJogador( @RequestBody Jogador jogador, @PathVariable(value = "id") long id) throws UserNotFoundException {
            Jogador oldJogador = jogadorRepository.findById(id);
            if(oldJogador == null) {
                throw new UserNotFoundException("Usuario nao encontrado" + id);
            }
            oldJogador.upDateFrom(jogador);
            return new ResponseEntity<>(jogadorRepository.save(oldJogador),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public Jogador deleteJogador(@PathVariable(value = "id") long id) throws UserNotFoundException {
        Jogador jogador = jogadorRepository.findById(id);
        if( jogador == null) throw new UserNotFoundException("Usuario nao encontrado" + id);
        jogadorRepository.delete(jogador);
        return jogador;
    }

}
