import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { useEffect,useState } from "react";
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent route for the dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          {/* Sub-routes inside dashboard */}
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}



function Dashboard() {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2>User Dashboard</h2>
        <nav style={styles.nav}>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/orders">Orders</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <main style={styles.mainColumn}>
        <div style={{ flex: 1 }}>
          {/* Nested child routes render here */}
          <Outlet />
        </div>
        <div style={{ marginTop: 'auto', padding: '16px', background: '#e8f4fd', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Welcome to your dashboard!</h3>
          <p>This is some extra content displayed below the sub child outlet.</p>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: { display: "flex", minHeight: "100vh" },
  sidebar: { width: "220px", background: "#f3f3f3", padding: "20px" },
  nav: { display: "flex", flexDirection: "column", gap: "10px" },
  mainColumn: { flex: 1, padding: "20px", display: "flex", flexDirection: "column", minHeight: 0 },
};


function Profile() {
  return <h3>👤 Profile Information</h3>;
}

function Orders() {
  return (
    <>
      <h3>🛍️ Your Orders</h3>
      <ul>
        <li>Order #12345 – Delivered</li>
        <li>Order #67890 – In Progress</li>
      </ul>
    </>
  );
}

function Settings() {
  return <h3>⚙️ Account Settings</h3>;
}

function Home() {
let [count,setCount]=useState(0);
  useEffect(() => {
    console.log("Home component mounted");
    setCount(count => count + 1);
  }, [count]);

  return (
    <div style={styles.container}>
      <h2>Welcome to My App 🏡</h2>
      <p>This is the homepage.</p>
      <p>
        Go to your <Link to="/dashboard/profile">Dashboard</Link> to view your account details.
      </p>
    </div>
  );
}

