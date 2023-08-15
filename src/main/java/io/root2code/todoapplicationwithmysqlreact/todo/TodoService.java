package io.root2code.todoapplicationwithmysqlreact.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    
    private static List<Todo> todos = new ArrayList();
    
    private static int todosCount = 0;
    
    static {
        todos.add(new Todo(++todosCount, "Gunz", "Learn Spring 6", LocalDate.now().plusMonths(6)));
        todos.add(new Todo(++todosCount, "Gunz", "Lampenslinger ophangen", LocalDate.now().plusMonths(1)));
        todos.add(new Todo(++todosCount, "Gunz", "Overkapping verplaatsen",  LocalDate.now().plusMonths(3)));
    }
    
    public List<Todo> findByUsername(String username){
        Predicate<? super Todo> predicate = 
                todo -> todo.getUsername().equals(username);
        return todos.stream().filter(predicate).toList();
    }
    
    public void deleteById(int id){
        // todo -> todo.getId() == id
        Predicate<? super Todo> predicate = 
                todo -> todo.getId() == id;
        todos.removeIf(predicate);
    }
    
    
    public Todo addTodo(String username, String description, LocalDate targetDate){
        Todo todo = new Todo(++todosCount, username, description, targetDate);
        System.out.println("todo id in backend: " + todo.getId());
        todos.add(todo);
        return todo;
    }
    
    public void updateTodo(Todo todo){
        deleteById(todo.getId());
        todos.add(todo);
    }

    public Todo findById(int id) {
        // todo -> todo.getId() == id
        Predicate<? super Todo> predicate = 
                todo -> todo.getId() == id;
        Todo todo = todos.stream().filter(predicate).findFirst().get();
        return todo;
    }
    
}
