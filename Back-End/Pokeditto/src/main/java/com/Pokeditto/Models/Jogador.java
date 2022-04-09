package com.Pokeditto.Models;

import org.hibernate.validator.constraints.Length;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table
public class Jogador implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull(message = "O Nome é Obrigatorio")
    @Length(min = 3, max = 35, message = "O nome deve conter de 3 a 35 caracteres")
    private String name;
    @NotNull(message = "O email é Obrigatorio")
    @Email(message = "O email deve ser Valido")
    private String email;
    @NotNull
    @Length(min = 3,max = 20,message = "A senha deve conter de 3 a 20 caracteres")
    private String Password;
    @OneToMany(targetEntity = Pokemon.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "dono", referencedColumnName = "id")
    private Set<Pokemon> pokemons;


    public void upDateFrom(Jogador jogador) {
        if (jogador.getName() != null) this.setName(jogador.getName());
        if (jogador.getEmail() != null) this.setEmail(jogador.getEmail());
        if (jogador.getPassword() != null) this.setPassword(jogador.getPassword());
        if (jogador.getPokemons() != null) this.setPokemons(jogador.getPokemons());
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String hashPassword) {
        this.Password = hashPassword;
    }

    public Set<Pokemon> getPokemons() {
        return pokemons;
    }

    public void setPokemons(Set<Pokemon> pokemons) {
        this.pokemons = pokemons;
    }

    public void setId(long id) {
        this.id = id;
    }
}
