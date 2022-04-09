package com.Pokeditto.Controller;

import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Pokemon;
import com.Pokeditto.Repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    @Autowired
    PokemonRepository pokemonRepository;

    @GetMapping()
    public ResponseEntity<?> pokemonList(){
        return new ResponseEntity<>(pokemonRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> pokemonIndex(@PathVariable(value = "id") long id) throws UserNotFoundException {
        Pokemon pokemon = pokemonRepository.findById(id);
        if(pokemon == null) throw new UserNotFoundException("Pokemon nao encotnrado");
        return new ResponseEntity<>(pokemon,HttpStatus.ACCEPTED);
    }

    @PostMapping()
    public ResponseEntity<?> pokemonPost(@Valid @RequestBody Pokemon pokemon){
        return new ResponseEntity<>(pokemonRepository.save(pokemon), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> pokemonPut(@RequestBody Pokemon pokemon, @PathVariable(value = "id") long id) throws UserNotFoundException {
        Pokemon oldPokemon = pokemonRepository.findById(id);
        if(oldPokemon == null ) throw new UserNotFoundException("Pokemon nao encotnrado");
        oldPokemon.upDateFrom(pokemon);
        return new ResponseEntity<>(pokemonRepository.save(oldPokemon), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> pokemonDelete(@PathVariable(value = "id") long id) throws UserNotFoundException {
        Pokemon pokemon = pokemonRepository.findById(id);
        if (pokemon == null ) throw new UserNotFoundException("Usuario nao encontrado");
        pokemonRepository.delete(pokemon);
        return new ResponseEntity<>(pokemon,HttpStatus.ACCEPTED);
    }
}
