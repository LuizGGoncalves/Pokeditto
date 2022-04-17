package com.Pokeditto.Controller;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.Pokemon;
import com.Pokeditto.Models.PokemonTemplate;
import com.Pokeditto.Models.dto.JogadorDto;
import com.Pokeditto.Repository.PokemonRepository;
import com.Pokeditto.Repository.PokemonTemplateRepository;
import com.Pokeditto.Service.JogadorService;
import com.Pokeditto.Service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    PokemonService pokemonService;
    @Autowired
    JogadorService jogadorService;
    @Autowired
    PokemonTemplateRepository pokemonTemplateRepository;

    @GetMapping()
    public ResponseEntity<?> pokemonList(){
        return new ResponseEntity<>(pokemonService.list(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> pokemonIndex(@PathVariable(value = "id") long id) throws UserNotFoundException {
        return new ResponseEntity<>(pokemonService.findById(id),HttpStatus.ACCEPTED);
    }

    @PostMapping("/{raca}")
    public ResponseEntity<?> pokemonPost(@PathVariable String raca,@RequestBody Pokemon pokemon, @AuthenticationPrincipal UserDetails principal){
        return new ResponseEntity<>(pokemonService.save(pokemon,raca,principal.getUsername()),HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> pokemonPut(@AuthenticationPrincipal UserDetails finale, @RequestBody Pokemon pokemon, @PathVariable(value = "id") long id) throws UserNotFoundException, DefaultException {
        Pokemon result = pokemonService.upDate(id,pokemon,finale.getUsername());
        if(result == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(result,HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> pokemonDelete(@AuthenticationPrincipal UserDetails finale, @PathVariable(value = "id") long id) throws DefaultException {
        pokemonService.delete(id,finale.getUsername());
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
