import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import { userRequest } from "../../requestMethods"
import { useState, useEffect } from 'react'

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0)

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get('order/income')
                const list = res.data.data.sort((a, b)=> {
                    return a._id - b._id
                })
                setIncome(list)
                setPerc((list[1].total * 100) / list[0].total - 100)
            } catch { }
        }
        getIncome()
    }, [])

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total}</span>
                    <span className="featuredMoneyRate">
                        %{Math.floor(perc)}
                        {perc < 0 ? (
                            <ArrowDownward className="featuredIcon negative" />
                        ) : (
                            <ArrowUpward className="featuredIcon" />
                        )}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$23,415</span>
                    <span className="featuredMoneyRate">
                        -1.50 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        15.50 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo