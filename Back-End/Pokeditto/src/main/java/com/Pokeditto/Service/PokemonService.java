package com.Pokeditto.Service;


import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;

import com.Pokeditto.Models.Pokemon;

import java.util.List;


public interface PokemonService {

    Pokemon save(Pokemon pokemon, String raca, String emailUsuario);
    List<Pokemon> list();
    Pokemon findById(Long id) throws UserNotFoundException;
    void delete(Long id, String jogadoEmail) throws DefaultException;
    Pokemon upDate(Long id, Pokemon pokemon,String userEmail) throws UserNotFoundException, DefaultException;
}
