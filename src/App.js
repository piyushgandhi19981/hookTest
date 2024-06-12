import React, { useState } from "react";

import { useDataFlowHook } from "./test";
import "./styles.css";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const { data } = useDataFlowHook(searchText);

  const handleValueChange = (e) => setSearchText(e.target.value);

  return (
    <div className="App">
      <input value={searchText} onChange={handleValueChange} />
      {(data || []).map(({ title }) => (
        <div>{title}</div>
      ))}
    </div>
  );
}
