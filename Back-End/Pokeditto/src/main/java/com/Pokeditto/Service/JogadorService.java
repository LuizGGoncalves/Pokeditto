package com.Pokeditto.Service;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.dto.JogadorDto;
import org.springframework.security.core.GrantedAuthority;

import java.util.Optional;
import java.util.Set;

public interface JogadorService {

     void save(Jogador jogador) throws DefaultException;
     Set<JogadorDto> list();
     JogadorDto findById(Long id) throws UserNotFoundException;
     void delete(Long id);
     JogadorDto upDate(Long id, JogadorDto jogadorDto) throws UserNotFoundException;
     Optional<Jogador> findByEmail(String email);
}
