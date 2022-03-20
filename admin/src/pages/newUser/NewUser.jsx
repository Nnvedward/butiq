import './newUser.css'

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label className=''>Username</label>
                    <input type="text" placeholder="Peter" />
                </div>
                <div className='newUserItem'>
                    <label className=''>Full Name</label>
                    <input type="text" placeholder="Peter Parker" />
                </div>
                <div className='newUserItem'>
                    <label className=''>Email</label>
                    <input type="email" placeholder="Peter@gmail.com" />
                </div>
                <div className='newUserItem'>
                    <label className=''>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className='newUserItem'>
                    <label className=''>Phone</label>
                    <input type="text" placeholder="+12345678910" />
                </div>
                <div className='newUserItem'>
                    <label className=''>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className='newUserItem'>
                    <label className=''>Gender</label>
                    <div className='newUserGender'>
                        <input type="radio" name="gender" id='male' value='male' />
                        <label for='male'>Male</label>
                        <input type="radio" name="gender" id='female' value='female' />
                        <label for='female'>Female</label>
                        <input type="radio" name="gender" id='other' value='other' />
                        <label for='other'>Other</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}

export default NewUser