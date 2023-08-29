import "./App.css";
import {
  Routes,
  Route,
  HashRouter,
  NavLink,
  useNavigate,
} from "react-router-dom";

const Todo = () => {
  return <p>這是 Todo 頁面</p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Logout = () => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/login");
      }}
    >
      登出
    </button>
  );
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/logout">
            <p>登出頁面</p>
          </NavLink>
        </div>{" "}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
