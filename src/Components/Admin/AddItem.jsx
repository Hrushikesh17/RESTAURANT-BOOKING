import React, { useRef } from 'react'
import '../../Style/AddItem.css'
const AddItem = () => {
  const item = useRef()
  const price = useRef()
  const id = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if the input fields are empty
    if (!item.current.value.trim() || !price.current.value.trim()) {
      alert("Please enter a valid item and price.");
    } else {
      const itemData = {
        name: item.current.value,
        price: price.current.value,
        id:id.current.value
      };
  
      fetch("http://localhost:8080/insert", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
      })
      .then(response => {
        if (response.ok) {
          alert('Item is added');
        } else {
          throw new Error('Failed to add item');
        }
      })
      .catch(error => {
        console.error('Error adding item:', error);
        alert('Failed to add item. Please try again.');
      });
    }
  };
  
  return (
    <div>
      <div className="login-box">

        <form onSubmit={handleSubmit}>
        <div className="user-box">
            <input type="number" ref={id} required="" />
            <label>ID</label>
          </div>
          <div className="user-box">
            <input type="text" ref={item} required="" />
            <label>Item</label>
          </div>
          <div className="user-box">
            <input type="text" ref={price} required="" />
            <label>Price</label>
          </div><center>
            <button>
              Add
              <span></span>
            </button></center>
        </form>
      </div>
    </div>
  )
}

export default AddItem
