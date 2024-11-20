import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableContainer}>
      <thead>
        <tr className={`${css.tableListFlex} ${css.blackBackground}`}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item) => {
        return (
          <tbody className={css.tbodyBackground} key={item.id}>
            <tr className={css.tableListFlex}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TransactionHistory;
