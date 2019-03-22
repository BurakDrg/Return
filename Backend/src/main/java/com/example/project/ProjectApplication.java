package com.example.project;

import com.example.project.repository.UserRepository;
import com.example.project.repository.ProductRepository;

import com.example.project.model.Product;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ProjectApplication  implements CommandLineRunner{


	@Autowired
	ProductRepository productRepository;

	@Autowired
	UserRepository userRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Product p1=new Product();
		p1.Name("Chai");
		p1.Price(20.0000);
		p1.Stock(100);

		Product p2=new Product();
		p2.Name("Chang");
		p2.Price(19.0000);
		p2.Stock(17);

		Product p3=new Product();
		p3.Name("Chef Anton's Cajun Seasoning");
		p3.Price(22.0000);
		p3.Stock(53);

		Product p4=new Product();
		p4.Name("Chef Anton's Gumbo Mix");
		p4.Price(21.3500);
		p4.Stock(0);

		Product p35=new Product();
		p35.Name("Steeleye Stout");
		p35.Price(18.0000);
		p35.Stock(20);

		Product p36=new Product();
		p36.Name("Gravad lax");
		p36.Price(26.0000);
		p36.Stock(11);

		Product p37=new Product();
		p37.Name("Côte de Blaye");
		p37.Price(263.5000);
		p37.Stock(17);

		Product p38=new Product();
		p38.Name("Côte de Blaye");
		p38.Price(263.5000);
		p38.Stock(17);

		Set<Product> products=new HashSet<>();
		products.add(p1);
		products.add(p2);
		products.add(p3);
		products.add(p4);
		products.add(p35);
		products.add(p36);
		products.add(p37);
		products.add(p38);

		productRepository.saveAll(products);
	}

}

