package com.Pokeditto.Repository;

import com.Pokeditto.Models.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
    Pokemon findById(long id);
}
