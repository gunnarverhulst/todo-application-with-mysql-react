package io.root2code.todoapplicationwithmysqlreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TodoApplicationWithMysqlReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoApplicationWithMysqlReactApplication.class, args);
	}
        
        // http://localhost:3000/ to 8100
        // Cross Origin Requests (CORS)
        // Allow all requests only from http://localhost:3000/ 
        
        @Bean
        public WebMvcConfigurer corsConfigurer(){
            return new WebMvcConfigurer(){
                public void addCorsMappings(CorsRegistry registry){
                    registry.addMapping("/**")
                            .allowedMethods("*")
                            .allowedOrigins("http://localhost:3000/");
                }
            };
        }

}
