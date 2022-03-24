import { useState } from 'react'
import './newProduct.css'

const NewProduct = () => {
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
    }
    
    return (
        <div className='newProduct'>
            <h1 className='addProductTitle'>New Product</h1>
            <form className='addProductForm'>
                <div className='addProductItem'>
                    <label>Image</label>
                    <input type="file" id="file" onChange={setFile(e => e.target.files[0])}/>
                </div>
                <div className='addProductItem'>
                    <label>Title</label>
                    <input name="title" type="text" placeholder="Title" onChange={handleChange}/>
                </div>
                <div className='addProductItem'>
                    <label>Description</label>
                    <input name="description" type="text" placeholder="Description" onChange={handleChange}/>
                </div>
                <div className='addProductItem'>
                    <label>Price</label>
                    <input name="price" type="number" placeholder="100" onChange={handleChange}/>
                </div>
                <div className='addProductItem'>
                    <label>Color</label>
                    <input name="color" type="text" placeholder="Color" onChange={handleChange}/>
                </div>
                <div className='addProductItem'>
                    <label>Size</label>
                    <select name='size' id='size' onChange={handleChange}>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </select>
                </div>
                <div className='addProductItem'>
                    <label>In Stock</label>
                    <select name='inStock' id='inStock' onChange={handleChange}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
                <div className='addProductItem'>
                    <label>Category</label>
                    <input name="category" type="text" placeholder="Category" onChange={handleChange}/>
                </div>
                <div className='addProductItem'>
                    <label>Manufacturer</label>
                    <input name="manufacturer" type="text" placeholder="Manufacturer" onChange={handleChange}/>
                </div>
                <button onClick={handleClick} className='addProductButton'>Create</button>
            </form>
        </div>
    )
}

export default NewProduct