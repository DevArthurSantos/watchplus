import style from "../../styles/Home.module.css";
import { useRef } from "react";

export default function Input({ onQuery }) {
  let inputRef = useRef(null);

  function query(e) {
    if (e.code === "Enter") {
      const querys = inputRef.current.value;
      if (querys) {
        onQuery(querys);
        inputRef.current.value = "";
      }
    }
  }

  return (
    <input
      ref={inputRef}
      className={style.searchInput}
      type="text"
      name="search"
      onKeyUp={query}
    ></input>
  );
}

Input.defaultProps = {
  onQuery: (value) => {},
};
