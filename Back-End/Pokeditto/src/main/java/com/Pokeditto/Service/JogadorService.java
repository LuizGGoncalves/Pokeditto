package com.Pokeditto.Service;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.dto.JogadorDto;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.Set;

public interface JogadorService {

     Jogador save(Jogador jogador) throws DefaultException;
     Set<JogadorDto> list();
     JogadorDto findById(Long id) throws UserNotFoundException;
     void delete(Long id);
     JogadorDto upDate(String email, JogadorDto jogadorDto) throws UserNotFoundException;
     JogadorDto findByEmail(String email);
     void jogadorChangePhoto(MultipartFile foto,String userEmail) throws IOException;
}
