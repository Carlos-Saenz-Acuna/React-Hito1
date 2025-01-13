import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <div>
      <Header />
      <CardPizza
        name="Pizza Napolitana"
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
      />
      <CardPizza
        name="Pizza Española"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img="https://media.ambito.com/p/f457f9e2b8150416959e6b3c284ac086/adjuntos/239/imagenes/037/508/0037508925/pizza.jpg"
      />
      <CardPizza
        name="Pizza Pepperoni"
        price={6950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img="https://todoenvases.cl/wp-content/uploads/2021/08/pizza-1239077_1920-300x200.jpg"
      />
    </div>
  );
};

export default Home;
