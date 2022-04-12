package com.Pokeditto.Models;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull(message = "O Nome é Obrigatorio")
    @Length(min = 3, max = 35, message = "O nome deve conter de 3 a 35 caracteres")
    private String name;
    @NotNull(message = "O Status nao pode ser nulo")
    @Range(min = 1, max = 100,message = "Ataque deve estar  entre 1 a 100")
    private float ataque;
    @NotNull(message = "O Status nao pode ser nulo")
    @Range(min = 1, max = 100,message = "Defesa deve estar  entre 1 a 100")
    private float defesa;
    @NotNull(message = "O Status nao pode ser nulo")
    @Range(min = 1, max = 100,message = "Vida deve estar  entre 1 a 100")
    private float vida;
    @NotNull
    private long dono;

    public void upDateFrom(Pokemon pokemon) {
        if (pokemon.getName() != null) this.setName(pokemon.getName());
        if (pokemon.getAtaque() != 0) this.setAtaque(pokemon.getAtaque());
        if (pokemon.getDefesa() != 0) this.setDefesa(pokemon.getDefesa());
        if (pokemon.getVida() != 0) this.setVida(pokemon.getVida());

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getDono() {
        return dono;
    }

    public void setDono(long dono) {
        this.dono = dono;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getAtaque() {
        return ataque;
    }

    public void setAtaque(float ataque) {
        this.ataque = ataque;
    }

    public float getDefesa() {
        return defesa;
    }

    public void setDefesa(float defesa) {
        this.defesa = defesa;
    }

    public float getVida() {
        return vida;
    }

    public void setVida(float vida) {
        this.vida = vida;
    }
}
