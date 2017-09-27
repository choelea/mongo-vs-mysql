package com.example.datademo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.datademo.domain.Category;
import com.example.datademo.domain.CategoryRepository;
import com.example.datademo.domain.ProductRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DataDemoApplicationTests {

	@Autowired
	private ProductRepository pRepo;
	@Autowired
	private CategoryRepository cateRepo;
	
	
	@Test
	public void createCategories() {
		Category cate;
		for (int i = 10; i < 300000; i++) {
			cate = new Category();
			cate.setName("Category "+i);
			cate.setCode("cate-"+i);
			cateRepo.save(cate);
		}
	}
	
	
}
