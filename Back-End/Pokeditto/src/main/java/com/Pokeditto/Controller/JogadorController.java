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
import org.springframework.web.multipart.MultipartFile;


import javax.validation.Valid;
import java.io.IOException;


@RestController
@CrossOrigin
@RequestMapping(value = "/jogador")
public class JogadorController {
    @Autowired
    JogadorRepository jogadorRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    JogadorService jogadorService;


    @GetMapping("/online")
    public ResponseEntity<?> jogadorLogado(@AuthenticationPrincipal UserDetails principal){
        return new ResponseEntity<>(jogadorService.findByEmail(principal.getUsername()),HttpStatus.ACCEPTED);
    }

    @GetMapping()
    public ResponseEntity<?> listJogadores() {
        return new ResponseEntity<>(jogadorService.list(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> indexjogador(@AuthenticationPrincipal UserDetails principal, @PathVariable(value = "id") long id) throws UserNotFoundException {
        return new ResponseEntity<>(jogadorService.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping()
    public ResponseEntity<?> createJogador(@RequestBody @Valid Jogador jogador) throws DefaultException {
        return new ResponseEntity<>(jogadorService.save(jogador),HttpStatus.CREATED);
    }
    @PostMapping("/foto")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void upLoadFoto(@RequestParam MultipartFile foto, @AuthenticationPrincipal UserDetails principal) throws IOException {
        jogadorService.jogadorChangePhoto(foto,principal.getUsername());
    }

    @PutMapping()
    public ResponseEntity<?> upDateJogador(@AuthenticationPrincipal UserDetails principal, @RequestBody JogadorDto jogador) throws UserNotFoundException {
        return new ResponseEntity<>(jogadorService.upDate(principal.getUsername(), jogador), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteJogador(@PathVariable(value = "id") Long id) {
        jogadorRepository.findById(id).ifPresent((j) -> {
            j.setEnabled(false);
            jogadorRepository.save(j);
        });
    }

    @DeleteMapping()
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteSelfJogador(@AuthenticationPrincipal UserDetails principal) {
        jogadorRepository.findByEmail(principal.getUsername()).ifPresent((j) -> {
            j.setAccountNonLocked(false);
            jogadorRepository.save(j);
        });
    }
}
