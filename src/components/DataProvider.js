import { useEffect } from "react";
import { db } from "../data/firebase";

export default function DataProvider({ setData }) {
  useEffect(function loadData() {
    const fetchData = async () => {
      const vegetables = await db.collection("Vegetables").get();
      const tmp = [];
      vegetables.docs.map(async (doc) => {
        tmp.push({ id: doc.id, ...doc.data(), vegetable: true });
      });
      const other = await db.collection("Other").get();
      other.docs.map(async (doc) => {
        tmp.push({ id: doc.id, ...doc.data(), other: true });
      });
      setData(tmp);
      console.log(tmp);
    };
    fetchData();
  }, []);
  return null;
}
