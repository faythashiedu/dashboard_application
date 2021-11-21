import { TransactionList } from "../UserList"
import "./largeWidget.css"

const LargeWidgets = () => {

    const Button = ({type}) => {
        return (
            <button className={"lgBtn " + type}>{type}</button>
        )
    }
    return (
        <div className="widgetLg">
            <h3>Lastest Transactions</h3>
            <table className="lgTable">
                <tr className="lgTr">
                    <th className="lgTh">Customers</th>
                    <th className="lgTh">Date</th>
                    <th className="lgTh">Amount</th>
                    <th className="lgTh">Status</th>
                </tr>
                {TransactionList.map((items,index) => {
                    return (
                        <tr key={index} className="lgTrTd">
                            <td className="lgTd">
                                <img src={items.src} alt="" className="lgImg" />
                                <h4 className="lgName">{items.name}</h4>
                            </td>
                            <td className="lgDate">{items.date}</td>
                            <td className="lgAmount">{items.Amount} </td>
                            <td className="lgStatus">
                                <Button type={items.status} />
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default LargeWidgets
