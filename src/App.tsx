import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { columns } from "./utils/Headers";

function App() {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState({ column: "", order: "" });
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_sort=${sorting.column}&_order=${sorting.order}`);
    const info = await response.json();
    return info;
  };

  const sortTable = (newSorting: any) => {
    setSorting(newSorting);
  };

  useEffect(() => {
    fetchData().then((info) => setData(info));
  }, [sorting]);

  return (
    <div>
      <Table entries={data} columns={columns} sorting={sorting} setSorting={sortTable} />
    </div>
  );
}

export default App;
