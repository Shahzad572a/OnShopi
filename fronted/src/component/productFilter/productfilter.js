// import React from 'react'
// import { DropdownButton, Dropdown, Form, } from 'react-bootstrap';
// const Productfilter = () => {
    

//     const [selectedCategory, setSelectedCategory] = useState("");
// const [selectedColor, setSelectedColor] = useState("");
// const [priceRange, setPriceRange] = useState([0, 100]);


// const handleCategoryChange = (category) => {
//   setSelectedCategory(category);
// };

// const handleColorChange = (color) => {
//   setSelectedColor(color);
// };

// const handlePriceChange = (event) => {
//   setPriceRange([event.target.value[0], event.target.value[1]]);
// };

// const categories = ["All", "Electronics", "Clothing", "Beauty", "Sports"];
// const colors = ["All", "Red", "Blue", "Green", "Yellow"];
// const maxPrice = 100;
 

     
//       return (
//         // <div className="filters-column">
//         //   <DropdownButton title="Categories">
//         //     <Dropdown.Item href="#">Category 1</Dropdown.Item>
//         //     <Dropdown.Item href="#">Category 2</Dropdown.Item>
//         //     <Dropdown.Item href="#">Category 3</Dropdown.Item>
//         //   </DropdownButton>
//         //   <Form.Group>
//         //     <Form.Label>Price Range</Form.Label>
//         //     <Form.Control type="range" min={0} max={1000} />
//         //   </Form.Group>
//         //   <DropdownButton title="Color">
//         //     <Dropdown.Item className="color-circle red" />
//         //     <Dropdown.Item className="color-circle blue" />
//         //     <Dropdown.Item className="color-circle green" />
//         //   </DropdownButton>
//         // </div>

//         <Form>
//       <Form.Group controlId="formCategory">
//         <DropdownButton
//           title={selectedCategory === "" ? "Category" : selectedCategory}
//           variant="secondary"
//         >
//           {categories.map((category) => (
//             <Dropdown.Item
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//             >
//               {category}
//             </Dropdown.Item>
//           ))}
//         </DropdownButton>
//       </Form.Group>
//       <Form.Group controlId="formColor">
//         <DropdownButton
//           title={selectedColor === "" ? "Color" : selectedColor}
//           variant="secondary"
//         >
//           {colors.map((color) => (
//             <Dropdown.Item
//               key={color}
//               onClick={() => handleColorChange(color)}
//             >
//               {color}
//             </Dropdown.Item>
//           ))}
//         </DropdownButton>
//       </Form.Group>
//       <Form.Group controlId="formPriceRange">
//         <Form.Label>Price Range:</Form.Label>
//         <Form.Control
//           type="range"
//           min={0}
//           max={maxPrice}
//           value={priceRange}
//           onChange={handlePriceChange}
//           custom
//         />
//         <div>{`$${priceRange[0]} - $${priceRange[1]}`}</div>
//       </Form.Group>
//     </Form>
  
 
//       );
//     }

// export default Productfilter
