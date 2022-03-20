import "./widgetLarge.css"

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://i.ibb.co/fGsk7V7/IMG-2313.jpg" className="widgetLgImg" alt=""/>
                <span className="widgetLgName">Clark Kent</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">$250.00</td>
              <td className="widgetLgStatus"><Button type="Approved"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://i.ibb.co/fGsk7V7/IMG-2313.jpg" className="widgetLgImg" alt=""/>
                <span className="widgetLgName">Clark Kent</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">$250.00</td>
              <td className="widgetLgStatus"><Button type="Pending"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://i.ibb.co/fGsk7V7/IMG-2313.jpg" className="widgetLgImg" alt=""/>
                <span className="widgetLgName">Clark Kent</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">$250.00</td>
              <td className="widgetLgStatus"><Button type="Declined"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://i.ibb.co/fGsk7V7/IMG-2313.jpg" className="widgetLgImg" alt=""/>
                <span className="widgetLgName">Clark Kent</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">$250.00</td>
              <td className="widgetLgStatus"><Button type="Pending"/></td>
            </tr>
        </table>
    </div>
  )
}

export default WidgetLarge