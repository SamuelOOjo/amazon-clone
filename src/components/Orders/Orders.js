import { SearchRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import "./Orders.css";
import { useStateValue } from "../../StateProvider";
import Order from "../Order/Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [order, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders__order">
        {order?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
