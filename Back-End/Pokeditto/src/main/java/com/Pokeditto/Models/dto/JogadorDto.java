package com.Pokeditto.Models.dto;

import com.Pokeditto.Models.Pokemon;
import org.hibernate.validator.constraints.Length;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;


public class JogadorDto implements Serializable {
    private long id;
    @NotNull(message = "O Nome é Obrigatorio")
    @Length(min = 3, max = 35, message = "O nome deve conter de 3 a 35 caracteres")
    private String name;
    @NotNull(message = "O email é Obrigatorio")
    @Email(message = "O email deve ser Valido")
    private String email;
    private Set<Pokemon> pokemons;

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPokemons(Set<Pokemon> pokemons) {
        this.pokemons = pokemons;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Set<Pokemon> getPokemons() {
        return pokemons;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JogadorDto entity = (JogadorDto) o;
        return Objects.equals(this.id, entity.id) &&
                Objects.equals(this.name, entity.name) &&
                Objects.equals(this.email, entity.email) &&
                Objects.equals(this.pokemons, entity.pokemons);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, email, pokemons);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id = " + id + ", " +
                "name = " + name + ", " +
                "email = " + email + ", " +
                "pokemons = " + pokemons + ")";
    }

}
