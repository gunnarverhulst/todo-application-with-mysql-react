package io.root2code.todoapplicationwithmysqlreact.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;


// Database - end goal
// Start with List of todos
// A TodoRepository component has been created for connection with the H2 database
// All handling logic of the H2 database can now be found in the TodoControllerJpa component

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Integer id;
    private String username;
    @Size(min=5, message="Enter at least 10 characters")
    private String description;
    private LocalDate creationDate;
    private LocalDate targetDate;
    private boolean isCompleted;

    public Todo() {
    }
        
    public Todo(Integer id, String username, String description,LocalDate targetDate) {
        super();
        this.id = id;
        this.username = username;
        this.description = description;
        this.creationDate = LocalDate.now();
        this.targetDate = targetDate;
        this.isCompleted = false;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDate getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    @Override
    public String toString() {
        return "Todo [id=" + id + ", username=" + username + ", description=" + description + ", creationDate=" + creationDate + ", targetDate=" + targetDate + ", isCompleted=" + isCompleted + "]";
    }

}