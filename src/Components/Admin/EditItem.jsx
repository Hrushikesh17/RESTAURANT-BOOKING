import React, { useState, useEffect,useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../Style/Edit.css'
const EditItem = () => {
    const [item, setItem] = useState(null); // Initialize task state to null
    let params = useParams();
    let itemid = params.id;

    useEffect(() => {
      const fetchData = async () => {
        try {
          let response = await fetch(`http://localhost:8080/search?id=${itemid}`);
          let data = await response.json();
          setItem(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [itemid]); // Add taskid as a dependency to useEffect

    const name = useRef()
    const price = useRef()
    
   
    const actualpage = useNavigate()

    const submitUpdateHandle = async (e) => {
        e.preventDefault();
        const itemData = {
          "name": name.current.value,
          "price": price.current.value,
        };
      
        try {
          await fetch(`http://localhost:8080/update?id=${itemid}&name=${name.current.value}&price=${price.current.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemData)
          });
          alert(`${name.current.value} updated`);
          actualpage("/adminPortal/view");
        } catch (error) {
          console.error('Error updating Item:', error);
          // Handle error appropriately, e.g., show error message to user
        }
      };
      

    return (
      <div>
        {item && ( // Render viewCard only if task is not null
          <div className='viewCard'>
            <h1>This Your Old Item</h1>
            <div class="card">
              <p class="cookieHeading">{item.name}</p>
              <p class="cookieDescription">{item.price}.</p>
            </div>             
          </div>
        )}
    
          <form class="form" onSubmit={submitUpdateHandle}>
       <p class="form-title">update Item Details</p>
        <div class="input-container">
          <input type="text" ref={name} placeholder="Enter ItemName"/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="number"ref={price} placeholder="Enter price"/>
        </div>
         <button type="submit" class="submit">
        Update Item
      </button>
   </form>



          
      </div>
    );
};

export default EditItem;
