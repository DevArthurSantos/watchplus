import style from "../../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FilmeCard from "./filmeCard";
import { useRouter } from "next/router";

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
