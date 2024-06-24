package com.mc.OnlineRestrurent.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mc.OnlineRestrurent.Dto.Menu;

public interface ORRepository extends JpaRepository<Menu, Integer>{
		
	
		@Query("select o from Menu o where o.name=?1")
		public Menu findByName(String name);
		
		@Query(value="Select * from menu where price=?1", nativeQuery = true)
		public List<Menu> findByPrice(int price);

}
