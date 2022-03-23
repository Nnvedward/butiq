import './product.css'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../data'
import { Publish } from '@mui/icons-material'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../requestMethods'

const Product = () => {
    const location = useLocation()
    const productId = location.pathname.split('/')[2]
    const product = useSelector(state => state.product.products.find(product => product._id === productId))
    const [pStats, setPStats] = useState([])

    const MONTHS = useMemo(() => [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ], [])

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('order/income?iId=' + productId)
                const list = res.data.data.sort((a, b)=> {
                    return a._id - b._id
                })
                list.map((item) =>
                    setPStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total }
                    ])
                )
            } catch { }
        }
        getStats()
    },[productId, MONTHS])

    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
            <div className='productTop'>
                <div className='productTopLeft'>
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img src={product.image} alt='' className='productInfoImg' />
                        <span className='productName'>{product.title}</span>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>id: </span>
                            <span className='productInfoValue'>{product._id}</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>sales:</span>
                            <span className='productInfoValue'>4523</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>in stock:</span>
                            <span className='productInfoValue'>{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productBottom'>
                <form className='productForm'>
                    <div className='productFormLeft'>
                        <label>Product Name</label>
                        <input type='text' placeholder={product.title} />
                        <label>Product Description</label>
                        <input type='text' placeholder={product.description} />
                        <label>Product Price</label>
                        <input type='text' placeholder={product.price} />
                        <label>In Stock</label>
                        <select name='inStock' id='inStock'>
                            <option value='true'>Yes</option>
                            <option value='false'>No</option>
                        </select>
                    </div>
                    <div className='productFormRight'>
                        <div className='productUpload'>
                            <img src={product.image} className='productUploadImg' alt='' />
                            <label for='file'>
                                <Publish />
                            </label>
                            <input type='file' id='file' style={{ display: "none" }} />
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product