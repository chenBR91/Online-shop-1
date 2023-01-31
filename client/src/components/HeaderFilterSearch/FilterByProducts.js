import React, {useContext} from 'react'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductsContext from '../../ProductsContext';
import StoreContext from '../../StoreContext';


function FilterByProducts() {
    //const [age, setAge] = React.useState('');
    const { category, setCategory } = useContext(StoreContext)
    const { allProducts } = useContext(ProductsContext)

    const getCategoreis = allProducts.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);

    const showCategoreis = getCategoreis.map((category, index) => {
        return(
            <MenuItem key={index} value={category}>{category}</MenuItem>
        )
    })
  
    return (
      <div>
        <FormControl sx={{ m: 0, minWidth: 220 }}>
          <Select
            value={category}
            onChange={(e) => {setCategory(e.target.value)}}
            displayEmpty
            
          >
            <MenuItem value="all Products">
              <em>Filter by:</em>
            </MenuItem>
            {showCategoreis}
           
          </Select>
        </FormControl>
      </div>
    );
}

export default FilterByProducts;