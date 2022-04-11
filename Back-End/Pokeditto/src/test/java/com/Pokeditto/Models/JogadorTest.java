package com.Pokeditto.Models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.HashSet;

class JogadorTest {

    @Test
    void upDateFrom() {
        Jogador j1 = new Jogador(21,"Pedro","Teste@gmail.com","123456",new HashSet<>());
        Jogador j2 = new Jogador(21,"Marcelo",null,null,null);
        j1.upDateFrom(j2);
        Jogador j3 = new Jogador(21,"Marcelo","Teste@gmail.com","123456",new HashSet<>());
        Assertions.assertTrue(j3.equals(j1));
    }
}