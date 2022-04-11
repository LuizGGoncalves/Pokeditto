package com.Pokeditto.Service.ServiceImpl;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.Pokemon;
import com.Pokeditto.Models.dto.JogadorDto;
import com.Pokeditto.Repository.JogadorRepository;
import com.Pokeditto.Repository.PokemonRepository;
import com.Pokeditto.Service.JogadorService;
import com.Pokeditto.Service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class PokemonServiceImpl implements PokemonService {

    @Autowired
    PokemonRepository pokemonRepository;
    @Autowired
    JogadorRepository jogadorRepository;
    @Autowired
    JogadorService jogadorService;


    @Override
    public Pokemon save(Pokemon pokemon) {
        return pokemonRepository.save(pokemon);
    }

    @Override
    public List<Pokemon> list() {
        return pokemonRepository.findAll();
    }

    @Override
    public Pokemon findById(Long id) {
        return pokemonRepository.findById(id).orElseThrow(()-> new UsernameNotFoundException("Pokemon nao encontrado"));
    }

    @Override
    public void delete(Long id, String jogadoEmail) throws DefaultException {
       Jogador jogador = jogadorRepository.findByEmail(jogadoEmail).orElseThrow(()-> new UsernameNotFoundException("Jogador nao encontrado"));
       boolean errorStas = true;
        for (Pokemon pokemon: jogador.getPokemons()) {
            if (pokemon.getId() == id) {
                pokemonRepository.delete(pokemon);
                errorStas = false;
            }
            if (errorStas) throw new DefaultException("Nao foi possivel deletar o Pokemon");
        }
    }

    @Override
    public Pokemon upDate(Long id, Pokemon pokemon,String userEmail){
        Set<Pokemon> pokmeonsUser =  jogadorService.findByEmail(userEmail).getPokemons();
        for (Pokemon p: pokmeonsUser){
            if(p.getId() == id){
                p.upDateFrom(pokemon);
                return p;
            }
        }
        return null;
    }
}
