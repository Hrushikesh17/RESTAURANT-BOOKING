package com.mc.OnlineRestrurent.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mc.OnlineRestrurent.Dao.ORService;
import com.mc.OnlineRestrurent.Dto.Menu;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ORController {
     
	 @Autowired
     ORService ors;
	   
	   @PostMapping("/insert")
	   public Menu addMenu(@RequestBody Menu menu) {
		   ors.insertMenu(menu);
		   return menu;
	   }
	   @GetMapping("/view")
	   public List<Menu> view(){
		  return ors.viewAllMenu();
	   }
	   
	   @GetMapping("/search")
	   public Menu search(@RequestParam int id) {
		   return ors.searchMenu(id);
	   }
	   
//	   @DeleteMapping("/remove")
//	   public  void delete(@RequestParam int id) {
//		   ors.removeMenu(id);
//	   }
	   
	   @PutMapping("/update")
	   public String update(@RequestParam int id, @RequestParam int price, @RequestParam String name) {
		   return ors.updateMenu(id, price, name);
	   }
	   @GetMapping("/ftbn")
	   public Menu findItembname(@RequestParam String name) {
		   return ors.itemFindbyName(name);
	   }
	   @GetMapping("/ftbp")
	   public List<Menu> FindByPrice(@RequestParam int price) {
		   return ors.itemFindByPrice(price);
	   }
	   @PutMapping("/stockupdate")
	   public String stockUpdate(@RequestParam int id, @RequestParam boolean stock) {
		   return ors.updateMenuStock(id, stock);
	   }
}
