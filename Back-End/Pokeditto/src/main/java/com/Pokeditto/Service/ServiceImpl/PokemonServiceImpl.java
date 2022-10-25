package com.Pokeditto.Service.ServiceImpl;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.Pokemon;
import com.Pokeditto.Repository.JogadorRepository;
import com.Pokeditto.Repository.PokemonRepository;
import com.Pokeditto.Repository.PokemonTemplateRepository;
import com.Pokeditto.Service.JogadorService;
import com.Pokeditto.Service.PokemonService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PokemonServiceImpl implements PokemonService {

    @Autowired
    PokemonRepository pokemonRepository;
    @Autowired
    JogadorRepository jogadorRepository;
    @Autowired
    JogadorService jogadorService;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    PokemonTemplateRepository pokemonTemplateRepository;


    @Override
    public Pokemon save(Pokemon pokemon, String raca, String emailUsuario) {
        Pokemon newPokemon = modelMapper.map(pokemonTemplateRepository.findByRaca(raca),Pokemon.class);
        Jogador jogador = jogadorRepository.findByEmail(emailUsuario).orElseThrow(()-> new UsernameNotFoundException("Pokemon nao encontrado"));
        newPokemon.setDono(jogador.getId());
        newPokemon.setName(pokemon.getName());
        return pokemonRepository.save(newPokemon);
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
    public void delete(Long id, String jogadorEmail) throws DefaultException {
       Jogador jogador = jogadorRepository.findByEmail(jogadorEmail).orElseThrow(()-> new UsernameNotFoundException("Jogador nao encontrado"));
       Pokemon pokemonDb = pokemonRepository.findById(id).orElseThrow(()-> new DefaultException("Pokemon nao encontrado"));
       if(jogador.getPokemons().contains(pokemonDb)){
           jogador.getPokemons().remove(pokemonDb);
           jogadorRepository.save(jogador);
       }else {
           throw new DefaultException("Pokemon nao existente/Nao pertence ao Jogador");
       }

        }

    @Override
    public Pokemon upDate(Long id, Pokemon pokemon,String userEmail) throws DefaultException {
        Jogador jogador =  jogadorRepository.findByEmail(userEmail).orElseThrow(()-> new UsernameNotFoundException("Pokemon nao encontrado"));
        Pokemon pokemonDb = pokemonRepository.findById(id).orElseThrow(()-> new DefaultException("Pokemon nao encontrado"));
        if (jogador.getPokemons().contains(pokemonDb)){
            pokemonDb.upDateFrom(pokemon);
            return pokemonRepository.save(pokemonDb);
        }else{
            throw new DefaultException("Nao foi possivel editar o pokemon");
        }
    }
}
