package com.Pokeditto.Service.ServiceImpl;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.dto.JogadorDto;
import com.Pokeditto.Repository.JogadorRepository;
import com.Pokeditto.Service.JogadorService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class JogadorServiceImpl implements UserDetailsService, JogadorService {

    @Autowired
    JogadorRepository jogadorRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Jogador jogador = jogadorRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado"));
        return new org.springframework.security.core.userdetails.User(jogador.getEmail(),jogador.getPassword(),
                jogador.isEnabled(),jogador.isAccountNonExpired(),jogador.isAccountNonExpired(), jogador.isAccountNonLocked(),jogador.getAuthorities());
    }

    @Override
    public void save(Jogador jogador) throws DefaultException {
        if(jogadorRepository.findByEmail(jogador.getEmail()).isPresent()) throw new DefaultException("Email já cadastrado");
        jogador.setPassword(bCryptPasswordEncoder.encode(jogador.getPassword()));
        jogador.setRoles(new HashSet<>());
        jogador.addRole("User");
        jogadorRepository.save(jogador);
    }

    @Override
    public Set<JogadorDto> list() {
        Set<JogadorDto> jogadorDtoList = new HashSet<>();
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.createTypeMap(Jogador.class,JogadorDto.class);
        modelMapper.validate();
        jogadorRepository.findAll().forEach((j) -> {
            jogadorDtoList.add(modelMapper.map(j,JogadorDto.class));
        });
        return jogadorDtoList;
    }

    @Override
    public JogadorDto findById(Long id) throws UserNotFoundException {
        Jogador jogador = jogadorRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Usuario nao encontrado" + id));
        return modelMapper.map(jogador, JogadorDto.class);
    }

    @Override
    public void delete(Long id){
        Jogador jogador = jogadorRepository.findById(id)
                .orElseThrow(()-> new UsernameNotFoundException("Usuario nao encontrado "));
        jogadorRepository.delete(jogador);
    }

    @Override
    public JogadorDto upDate(Long id, JogadorDto jogadorDto) throws UserNotFoundException {
        Jogador jogador = jogadorRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Usuario nao encontrado" + id));
        jogador.upDateFrom(modelMapper.map(jogadorDto, Jogador.class));
        return modelMapper.map(jogador, JogadorDto.class);
        }

    @Override
    public JogadorDto findByEmail(String email) {
        return modelMapper.map(jogadorRepository.findByEmail(email), JogadorDto.class);
    }

}