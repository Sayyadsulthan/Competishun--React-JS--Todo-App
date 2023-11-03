import { createContext, useContext, useState } from "react";

const initialState = {
  user: null,
  todos: [{ title: "scam", completed: false }],
  loading: true,
  updateUser: () => {},
  updateTodos: () => {},
  createTodo: () => {},
  deleteTodo: () => {},
  removeUser: () => {},
};

const AuthContext = createContext(initialState);

export const useAuth = () => useContext(AuthContext);

const useAuthHook = () => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useState(() => {
    const getLocalUser = async () => {
      const user = await localStorage.getItem("setPass");

      if (user) {
        setUser(JSON.parse(user));
      }

      let getTodos = localStorage.getItem("setTodos");
      console.log("todos", getTodos);
      setTodos(JSON.parse(getTodos) || []);
    };

    getLocalUser();
  });

  const updateUser = (data) => {
    if (data) {
      setUser(data);
    }
  };

  const createTodo = (title) => {
    let todo = { title: title, completed: false };
    let updatedValue = [...todos, todo];
    localStorage.setItem("setTodos", JSON.stringify(updatedValue));
    setTodos(updatedValue);
  };

  const updateTodo = (index, { title, status }) => {
    let updatedValue = todos.map((todo, i) => {
      if (i === index) {
        todo.completed = status;
        todo.title = title;
      }
      return todo;
    });

    localStorage.setItem("setTodos", JSON.stringify(updatedValue));
    setTodos(updatedValue);
  };

  const deleteTodo = (index) => {
    let temp = todos.filter((todo, i) => i !== index);
    localStorage.setItem("setTodos", JSON.stringify(temp));
    setTodos([...temp]);
  };

  const removeUser = () => {
    setUser(null);
    localStorage.removeItem("setPass");
    localStorage.removeItem("setTodos");
  };

  return {
    user,
    todos,
    updateUser,
    updateTodo,
    createTodo,
    deleteTodo,
    removeUser,
  };
};

const AuthProvider = ({ children }) => {
  const auth = useAuthHook();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
