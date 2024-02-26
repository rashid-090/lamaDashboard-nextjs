import { fetchProducts, fetchUsers } from "../lib/data";
import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = async () => {
  const prods = await fetchProducts()
  const users = await fetchUsers()
  const prodcount = prods?.count;
  const usercount = users?.count;
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <p>Total Products: {prodcount}</p>
        <p>Total user: {usercount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
