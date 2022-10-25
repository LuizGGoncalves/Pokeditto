package com.Pokeditto.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import java.util.*;

@RestControllerAdvice
public class ApiExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException ex) {
        Map<String, String> errorMap = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(erro -> {
            errorMap.put(((FieldError) erro).getField(), erro.getDefaultMessage());
        });
        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(UserNotFoundException.class)
    public Map<String, String> handleUserNotFound(UserNotFoundException ex) {
        Map<String, String> erroMap = new HashMap<>();
        erroMap.put("Errors", ex.getMessage());
        return erroMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ConstraintViolationException.class)
    public Map<String, Set<String>> handleConstraintViolation(ConstraintViolationException ex) {
        Map<String, Set<String>> errorMap = new HashMap<>();
        Set<String> errors = new HashSet<>();
        ex.getConstraintViolations().forEach((erro)->{
            errors.add(erro.getMessageTemplate());
        });
        errorMap.put("Errors",errors);
        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(DefaultException.class)
    public Map<String, String> handleDefault(DefaultException ex){
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("Errors",ex.getMessage());
        return errorMap;
    }

}
