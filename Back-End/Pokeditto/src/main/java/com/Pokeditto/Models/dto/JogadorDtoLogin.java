package com.Pokeditto.Models.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

public class JogadorDtoLogin implements Serializable {
    @NotNull(message = "O email é Obrigatorio")
    @Email(message = "O email deve ser Valido")
    @NotNull
    private String email;
    @NotNull
    private String password;

    public JogadorDtoLogin(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public JogadorDtoLogin() {
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }




    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JogadorDtoLogin entity = (JogadorDtoLogin) o;
        return Objects.equals(this.email, entity.email) &&
                Objects.equals(this.password, entity.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, password);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "email = " + email + ", " +
                "password = " + password + ")";
    }
}
