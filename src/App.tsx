import { useCallback, useEffect } from "react";
import "./App.css";
import { client } from "./client";

function App() {

  const getData = useCallback(async () => {
    try {
      const responeFromCms = await client.getEntries({
        content_type: "dog",
      });
      console.log(responeFromCms);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return <>Halloj</>;
}

export default App;
