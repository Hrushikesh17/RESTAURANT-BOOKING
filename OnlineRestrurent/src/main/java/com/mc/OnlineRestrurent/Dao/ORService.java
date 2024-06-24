package com.mc.OnlineRestrurent.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mc.OnlineRestrurent.Dto.Menu;
import com.mc.OnlineRestrurent.Repository.ORRepository;

@Repository
public class ORService {
    
	@Autowired
	ORRepository repo;
	
	
	///insert 
  public Menu insertMenu(Menu menu) {
	  repo.save(menu);
	  return menu;
  }
    //ViewAll 
	public List<Menu> viewAllMenu() {
          return repo.findAll();
	}
	//SearchMenu By Id 
	public Menu searchMenu( int id) {
			Optional<Menu> m = repo.findById(id);
			if(m.isPresent()) {
				System.out.println("object is present");
				return m.get();
			}
			return null;
		}
	//Delete 
//	public void removeMenu(int id) {
//	Menu m = searchMenu(id);
//	if(m!=null) {
//		repo.delete(m);
//		System.out.println("Deleted");
//	}
//	else {
//		System.out.println("id is not present");
//	}
//	}
	//Update 
		public String updateMenu(int id, int price, String name) {
			Menu m = searchMenu(id);
			if(m!=null) {
				m.setPrice(price);
				m.setName(name);
				repo.save(m);
				return "Updation Successfull..";
			}
			else {
				return "Task id not found";
			}
		}
		
		
		public Menu itemFindbyName(String name) {
			return repo.findByName(name);
		}
		
		public List<Menu> itemFindByPrice(int price) {
			return repo.findByPrice(price);
		}
		
		//StockUpdate 
				public String updateMenuStock(int id, boolean stock) {
					Menu m = searchMenu(id);
					if(m!=null) {
						m.setStock(stock);
						repo.save(m);
						return "Updation Successfull..";
					}
					else {
						return "Task id not found";
					}
				}

	
}
