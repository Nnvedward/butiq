import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../../redux/apiCalls'

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        getProducts(dispatch)
    },[dispatch])

    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
            field: 'product',
            headerName: 'Product',
            width: 220,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.image} alt=""/>
                        {params.row.title}
                    </div>
                )
            }
        },
        {
            field: 'inStock',
            headerName: 'Stock',
            width: 180
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 180
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListAction">
                        <Link to={"/product/"+ params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)}/>
                    </div>
                )
            }
        }
    ];
    return (
        <div className='productList'>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={8}
                getRowId={row => row._id}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList