package io.root2code.todoapplicationwithmysqlreact.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String>{
    
    Optional<User> findUserByUsername(String username);
}
