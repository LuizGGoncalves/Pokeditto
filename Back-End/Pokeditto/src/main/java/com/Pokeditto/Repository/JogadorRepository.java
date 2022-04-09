package com.Pokeditto.Repository;

import com.Pokeditto.Models.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JogadorRepository extends JpaRepository<Jogador, Long>{
    Jogador findById(long id);
}
