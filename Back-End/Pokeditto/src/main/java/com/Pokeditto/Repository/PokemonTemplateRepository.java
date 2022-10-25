package com.Pokeditto.Repository;

import com.Pokeditto.Models.PokemonTemplate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonTemplateRepository extends JpaRepository<PokemonTemplate, Long> {
    PokemonTemplate findByRaca(String raca);
}
