import React, { useState } from 'react'
import { addCategory } from '../../redux/apiCalls'
import './category.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from '../../firebase'
import { useDispatch } from 'react-redux'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Category = () => {
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [status, setStatus] = useState(undefined)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const category = { name, image: downloadURL }
                    try {
                        addCategory(category, dispatch)
                        setStatus({ type: 'success' })
                    } catch (e) {
                        setStatus({ type: 'error' }, e)
                    }
                });
            }
        );
    }

    return (
        <div className='category'>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {status?.type === 'success' && <Alert severity="success">Category created!</Alert>}
                {status?.type === 'error' && <Alert severity="error">An Error Occured!</Alert>}
            </Stack>
            <h1>New Category</h1>
            <form className='addCategoryForm'>
                <div className='addCategoryFormList'>
                    <div className='addCategoryItem'>
                        <label>Image</label>
                        <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className='addCategoryItem'>
                        <label>Name</label>
                        <input name="name" type="text" placeholder="Category Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button onClick={handleClick} className='addCategoryButton'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Category