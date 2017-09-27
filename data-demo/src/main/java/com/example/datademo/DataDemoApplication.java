package com.example.datademo;

import java.util.HashSet;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import com.example.datademo.domain.Category;
import com.example.datademo.domain.CategoryRepository;
import com.example.datademo.domain.Product;
import com.example.datademo.domain.ProductRepository;

@SpringBootApplication
@RestController
public class DataDemoApplication {

	private static final Logger logger = LoggerFactory.getLogger(CommandLineAppStartupRunner.class);
	public static void main(String[] args) {
		SpringApplication.run(DataDemoApplication.class, args);
	}
	
	
	@Component
	public class CommandLineAppStartupRunner implements CommandLineRunner {
		@Autowired
		private ProductRepository pRepo;
		@Autowired
		private CategoryRepository cateRepo;
		
	    @Override
	    public void run(String...args) throws Exception {
	    	logger.info("################################### Started Initiating Data ##################################");
	        createCategories();
	        addProduct();
	        logger.info("################################### End Initiating Data ##################################");
	    }
	    
	    private void createCategories() {
			Category cate = new Category();
			cate.setName("Category 1");
			cate.setCode("cate-1");
			cateRepo.save(cate);
			
			cate = new Category();
			cate.setName("Category 2");
			cate.setCode("cate-2");
			cateRepo.save(cate);
			
			  cate = new Category();
			cate.setName("Category 3");
			cate.setCode("cate-3");
			cateRepo.save(cate);
			
			  cate = new Category();
			cate.setName("Category 4");
			cate.setCode("cate-4");
			cateRepo.save(cate);
		}
	    
	    /**
	     * For many to many relations, needs to be aware of 'bidirectional consistency problem'. Learn more from below link:
	     * https://stackoverflow.com/questions/13370221/jpa-hibernate-detached-entity-passed-to-persist
	     */
	    @Transactional
	    private void addProduct() {
	    	Category cate1 = cateRepo.getByCode("cate-1");
			Category cate2 = cateRepo.getByCode("cate-2");
			Category cate3 = cateRepo.getByCode("cate-3");
			Category cate4 = cateRepo.getByCode("cate-4");
			
			Product product;
			for (int i = 0; i < 300000; i++) {
				product = new Product();
				product.setName("product "+i);
				product.setCode("p-"+i);
				product.setPrice(19L);
				product.setCategories(new HashSet<>());
				product.getCategories().add(cate1);
				product.getCategories().add(cate2);
				pRepo.save(product);
			}
			
			for (int i = 300000; i < 800000; i++) {
				product = new Product();
				product.setName("product "+i);
				product.setCode("p-"+i);
				product.setPrice(19L);
				product.setCategories(new HashSet<>());
				product.getCategories().add(cate1);
				product.getCategories().add(cate3);
				pRepo.save(product);
			}
			
			for (int i = 800000; i < 1000000; i++) {
				product = new Product();
				product.setName("product "+i);
				product.setCode("p-"+i);
				product.setPrice(19L);
				product.setCategories(new HashSet<>());
				product.getCategories().add(cate3);
				product.getCategories().add(cate2);
				pRepo.save(product);
			}
			
			for (int i = 0; i < 20; i++) {
				product = new Product();
				product.setName("iphone");
				product.setCode("pp-"+i);
				product.setPrice(19L);
				product.setCategories(new HashSet<>());
				product.getCategories().add(cate4);
				product.getCategories().add(cate2);
				pRepo.save(product);
			}
			
		}
	}
}
