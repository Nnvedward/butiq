import { Visibility } from "@mui/icons-material"
import { useEffect, useState } from "react"
import "./widgetSmall.css"
import { userRequest } from '../../requestMethods'

const WidgetSmall = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try{
                const res = await userRequest.get('users/?new=true')
                setUsers(res.data.data)
            }catch{}
        }
        getUsers()
    },[])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Newly joined members</span>
            <ul className="widgetSmList">
            {users.map((user) => (
                <li className="widgetSmListItem" key={user._id}>
                    <img src={user.image || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="Shawn" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSmall