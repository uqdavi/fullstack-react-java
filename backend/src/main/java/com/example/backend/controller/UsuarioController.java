package com.example.backend.controller;

import com.example.backend.model.Usuario;
import com.example.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return repository.save(usuario);
    }
}