import { useContext, useState, useEffect, createContext } from "react";
const blogContext = createContext();
export function DevBlogsContextProvider({ children }) {
  const [devBlogs, setDevBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=ak_ram")
      .then((res) => res.json())
      .then((data) => setDevBlogs(data));
  }, []);
  return (
    <blogContext.Provider value={{ devBlogs }}>{children}</blogContext.Provider>
  );
}

export function useDevBlogs() {
  const context = useContext(blogContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
