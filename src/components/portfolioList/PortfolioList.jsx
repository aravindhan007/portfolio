import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  // console.log(active);
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
