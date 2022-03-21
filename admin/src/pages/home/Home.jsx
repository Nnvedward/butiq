import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import { userData } from "../../data"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import { useEffect, useMemo, useState } from "react"
import { userRequest } from "../../requestMethods"

const Home = () => {
    const [userStats, setUserStats] = useState([])

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
                const res = await userRequest.get('/users/stats')
                res.data.data.map(item => {
                    setUserStats(prev => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active user": item.total }
                    ])
                })
            } catch { }
        }
        getStats()
    }, [MONTHS])

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home