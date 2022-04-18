package com.Pokeditto.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table
public class PokemonTemplate {
    @Id
    private Long id;
    @NotNull()
    private  float ataque;
    @NotNull()
    private float defesa;
    @NotNull()
    private  float vida;
    @NotNull
    private  String tipo;
    @NotNull
    @Column(unique = true)
    private  String raca;

    public PokemonTemplate() {
    }

    public PokemonTemplate(Long id, float ataque, float defesa, float vida, String tipo, String raca) {
        this.id = id;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vida = vida;
        this.tipo = tipo;
        this.raca = raca;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }
}
