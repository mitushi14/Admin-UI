// import logo from './logo.svg';
import "./App.css";
import AdminPage from "./Components/Admin/js/AdminPage";

export const config = {
  endpoint:
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
};
function App() {
  return <AdminPage></AdminPage>;
}

export default App;
