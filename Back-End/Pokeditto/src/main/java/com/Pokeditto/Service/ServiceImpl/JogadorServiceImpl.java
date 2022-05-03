package com.Pokeditto.Service.ServiceImpl;

import com.Pokeditto.Exception.DefaultException;
import com.Pokeditto.Exception.UserNotFoundException;
import com.Pokeditto.Models.Jogador;
import com.Pokeditto.Models.dto.JogadorDto;
import com.Pokeditto.Repository.JogadorRepository;
import com.Pokeditto.Repository.RoleRepository;
import com.Pokeditto.Service.JogadorService;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class JogadorServiceImpl implements UserDetailsService, JogadorService {

    @Autowired
    JogadorRepository jogadorRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    private Storage storage;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Jogador jogador = jogadorRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado"));
        return new org.springframework.security.core.userdetails.User(jogador.getEmail(), jogador.getPassword(),
                jogador.isEnabled(), jogador.isAccountNonExpired(), jogador.isAccountNonExpired(), jogador.isAccountNonLocked(), jogador.getAuthorities());
    }

    @Override
    public Jogador save(Jogador jogador) throws DefaultException {
        if (jogadorRepository.findByEmail(jogador.getEmail()).isPresent())
            throw new DefaultException("Email já cadastrado");
        jogador.setTransientpassword(jogador.getPassword());
        jogador.setPassword(bCryptPasswordEncoder.encode(jogador.getPassword()));
        jogador.setRoles(new HashSet<>());
        jogador.addRole(roleRepository.findById(62L)
                .orElseThrow(() -> new DefaultException("Nao foi possivel Permitir o Usuario")));
        return jogadorRepository.save(jogador);
    }

    @Override
    public Set<JogadorDto> list() {
        Set<JogadorDto> jogadorDtoList = new HashSet<>();
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.createTypeMap(Jogador.class, JogadorDto.class);
        modelMapper.validate();
        jogadorRepository.findAll().forEach((j) -> {
            jogadorDtoList.add(modelMapper.map(j, JogadorDto.class));
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
    public void delete(Long id) {
        Jogador jogador = jogadorRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado "));
        jogadorRepository.delete(jogador);
    }

    @Override
    public JogadorDto upDate(String email, JogadorDto jogadorDto) throws UserNotFoundException {
        Jogador jogador = jogadorRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("Usuario nao encontrado"));
        jogador.upDateFrom(modelMapper.map(jogadorDto, Jogador.class));
        return modelMapper.map(jogador, JogadorDto.class);
    }

    @Override
    public JogadorDto findByEmail(String email) {
        return modelMapper.map(jogadorRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado")), JogadorDto.class);
    }

    @Override
    public void jogadorChangePhoto(MultipartFile foto, String userEmail) throws IOException {
        byte[] bytes = foto.getBytes();
        Jogador jogador = jogadorRepository.findByEmail(userEmail).orElseThrow(() -> new UsernameNotFoundException("Usuario nao encontrado"));
        BlobId blobId = BlobId.of("pokeditto_images", jogador.getId() + ".jpg");
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setCacheControl("private, max-age=0").setContentType("image/jpeg").build();
        storage.create(blobInfo, bytes);
        jogador.setPhothoUrl("https://storage.googleapis.com/pokeditto_images/" + jogador.getId() + ".jpg");
        jogadorRepository.save(jogador);
    }

}
