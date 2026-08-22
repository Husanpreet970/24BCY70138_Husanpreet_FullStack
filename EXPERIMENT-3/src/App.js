import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getPostsAll } from "./api/postApi";
import Child from "./components/Child";

/* =========================
   CUSTOM HOOK
========================= */

function useCustom() {
  const [state, setState] = useState(10);
  useEffect(() => {
    setState(15);
  }, []);
  return state;
}

/* =========================
   HOME COMPONENT
========================= */

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleClick = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await getPostsAll();
      setPosts(result);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to fetch posts."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <h1>Hi Home</h1>
      <p>
        This page demonstrates Axios API
        communication.
      </p>
      <button onClick={handleClick}>
        Call API
      </button>
      <button
        onClick={() => navigate("/profile")}
      >
        Go to Profile
      </button>
      {loading && (
        <h3>Loading...</h3>
      )}
      {error && (
        <p className="error">
          {error}
        </p>
      )}
      <div>
        {posts.map((post) => (
          <div
            className="post"
            key={post.id}
          >
            <h2>
              {post.title}
            </h2>
            <p>
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   ABOUT COMPONENT
========================= */

function About() {
  const { user } = useParams();
  const [searchParams] =
    useSearchParams();
  const name =
    searchParams.get("name");
  return (
    <div className="container">
      <h1>Hi About {user}</h1>
      <h2>
        Name: {name}
      </h2>
      <input
        type="text"
        value={name || ""}
        readOnly
      />
    </div>
  );
}

/* =========================
   PROFILE COMPONENT
========================= */

function Profile() {
  const state = useCustom();
  return (
    <div className="container">
      <h1>
        Hi Profile: {state}
      </h1>
      <p>
        The value is obtained from
        a custom Hook.
      </p>
      <Child
        variable={state}
        arr={state}
      />
    </div>
  );
}

/* =========================
   MAIN APP
========================= */

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/about/student?name=Husanpreet">
          About
        </Link>
        <Link to="/profile">
          Profile
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about/:user"
          element={<About />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
