package com.Pokeditto.Controller;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.dto.JogadorDto;
import com.Pokeditto.Repository.JogadorRepository;
import com.Pokeditto.Service.JogadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;



@RestController
@RequestMapping(value = "/jogador")
public class JogadorController {
    @Autowired
    JogadorRepository jogadorRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    JogadorService jogadorService;


    @GetMapping()
    public ResponseEntity<?> listJogadores() {
        return new ResponseEntity<>(jogadorService.list(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> indexjogador(@AuthenticationPrincipal UserDetails principal ,@PathVariable(value = "id") long id) throws UserNotFoundException {
        return new ResponseEntity<>(jogadorService.findById(id),HttpStatus.ACCEPTED);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void createJogador(@RequestBody @Valid Jogador jogador) throws DefaultException {
        jogadorService.save(jogador);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> upDateJogador(@RequestBody JogadorDto jogador, @PathVariable(value = "id") Long id) throws UserNotFoundException {
            return new ResponseEntity<>(jogadorService.upDate(id,jogador),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteJogador(@PathVariable(value = "id") Long id){
        jogadorService.delete(id);
    }

}
