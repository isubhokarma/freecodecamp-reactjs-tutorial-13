import React from "react";
import AppCards from "./AppCards";

const App = () => {
  return (
    <div className="container">
      <AppCards
        imgUrl="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg"
        phone="123456789"
        title="Debo is idiot"
        about="And I don't like him"
      />
      <AppCards
        imgUrl="https://i.ytimg.com/vi/b9faeP_8KJA/maxresdefault.jpg"
        phone="123456789"
        title="Shubham is stupid"
        about="But I do like him"
      />
    </div>
  );
};

export default App;
