package com.Pokeditto.Models;

import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.*;

@Entity
@Table
public class Jogador implements Serializable , UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull(message = "O Nome é Obrigatorio")
    @Length(min = 3, max = 35, message = "O nome deve conter de 3 a 35 caracteres")
    private String name;
    @NotNull(message = "O email é Obrigatorio")
    @Email(message = "O email deve ser Valido")
    @Column(unique = true)
    @NotNull
    private String email;
    @NotNull
    private String password;
    @OneToMany(targetEntity = Pokemon.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "dono", referencedColumnName = "id")
    private Set<Pokemon> pokemons;
    private boolean isAccountNonExpired = true;
    private boolean isAccountNonLocked = true;
    private boolean isEnabled = true;
    private boolean credentialsNonExpired= true;
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    private Set<Role> roles;


    public Jogador() {
    }

    public Jogador(long id, String name, String email, String password, Set<Pokemon> pokemons) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.pokemons = pokemons;
        this.roles = new HashSet<>();
    }
    public void upDateFrom(Jogador jogador) {
        Optional<Jogador> optional = Optional.ofNullable(jogador);
        optional.map(Jogador::getName).ifPresent(this::setName);
        optional.map(Jogador::getEmail).ifPresent(this::setEmail);
        optional.map(Jogador::getPassword).ifPresent(this::setPassword);
        optional.map(Jogador::getPokemons).ifPresent(this::setPokemons);
    }

    public void addRole(String role){
         this.getRoles().add(new Role("USER"));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Jogador jogador = (Jogador) o;
        return id == jogador.id && name.equals(jogador.name) && email.equals(jogador.email) && password.equals(jogador.password) && pokemons.toString().equals(jogador.pokemons.toString());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, email, password, pokemons);
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

    public void setPassword(String hashPassword) {
        this.password = hashPassword;
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

    public void setAccountNonExpired(boolean accountNonExpired) {
        isAccountNonExpired = accountNonExpired;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        isAccountNonLocked = accountNonLocked;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        this.getRoles().forEach(r -> authorities.add(new SimpleGrantedAuthority(r.getName())));
        return authorities;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.isEnabled;
    }

}
