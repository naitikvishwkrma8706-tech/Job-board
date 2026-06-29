import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import ApplyJob from "./pages/ApplyJob";
import Login from "./pages/Login";
import Notification from "./pages/Notification";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />

      <Jobs />

      <JobDetail />

      <CandidateDashboard />

      <EmployerDashboard />

      <ApplyJob />

      <Login />

      <Notification />

      <Footer />
    </>
  );
}

export default App;