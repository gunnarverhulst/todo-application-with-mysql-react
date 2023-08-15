/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package io.root2code.todoapplicationwithmysqlreact.todo;

import io.root2code.todoapplicationwithmysqlreact.todo.repository.TodoRepository;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class TodoJpaResourceTest {

    @Mock
    private TodoRepository todoRepositoryMock;

    @InjectMocks
    private TodoJpaResource todoJpaResource;

    public TodoJpaResourceTest() {
    }

    @BeforeAll
    public static void setUpClass() {
    }

    @AfterAll
    public static void tearDownClass() {
    }

    @BeforeEach
    public void setUp() {
    }

    @AfterEach
    public void tearDown() {
    }

    @Test
    public void retrieveTodos_Gunz() {
        when(todoJpaResource.retrieveTodos("Gunz")).thenReturn(List.of(new Todo(1, "Gunz", "Learn Spring 6", LocalDate.now().plusMonths(6))));
        assertEquals("Gunz", todoJpaResource.retrieveTodos("Gunz").get(0).getUsername());
    }
    
    @Test
    public void findByUsername_listSize_1() {
        when(todoJpaResource.retrieveTodos("Gunz")).thenReturn(List.of(new Todo(1, "Gunz", "Learn Spring 6", LocalDate.now().plusMonths(6))));
        assertEquals(1, todoJpaResource.retrieveTodos("Gunz").size());
    }
    
    @Test
    public void findByUsername_listSize_2() {
        when(todoJpaResource.retrieveTodos("Gunz")).thenReturn(List.of(new Todo(1, "Gunz", "Learn Spring 6", LocalDate.now().plusMonths(6)), new Todo(2, "Gunz", "Learn Spring Boot 3", LocalDate.now().plusMonths(6))));
        assertEquals(2, todoJpaResource.retrieveTodos("Gunz").size());
    }
}
