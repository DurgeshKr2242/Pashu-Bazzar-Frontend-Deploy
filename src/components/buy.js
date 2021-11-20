import React from "react";
import "../static/buy.css";
import { useState } from "react";
function Buy() {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1571846599782-8164c94f5892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0dGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "New Delhi",
      price: 200,
      contact: 123456787,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus corrupti excepturi odit sit! Numquam reprehenderit veniam ipsam, maxime dolorem alias officia dolorum in ipsum modi? Odio sequi ratione nihil iste mollitia nemo. Omnis dolore, cum repudiandae illum eligendi voluptates, aliquam explicabo a mollitia maxime, enim earum porro hic exercitationem reiciendis! Velit at repellendus quae ut minus incidunt itaque officiis assumenda, eaque enim natus iusto ipsam temporibus cumque! Soluta culpa voluptas in odio error, impedit doloremque autem, aperiam harum, aliquam animi illum et. Consequuntur dolorem doloremque assumenda, voluptates rerum sapiente similique veniam sequi tempore, cupiditate ab id eos laboriosam maxime?",
      breed: "Giri",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1571846599782-8164c94f5892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0dGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "New Delhi",
      price: 200,
      contact: 123456787,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus corrupti excepturi odit sit! Numquam reprehenderit veniam ipsam, maxime dolorem alias officia dolorum in ipsum modi? Odio sequi ratione nihil iste mollitia nemo. Omnis dolore, cum repudiandae illum eligendi voluptates, aliquam explicabo a mollitia maxime, enim earum porro hic exercitationem reiciendis! Velit at repellendus quae ut minus incidunt itaque officiis assumenda, eaque enim natus iusto ipsam temporibus cumque! Soluta culpa voluptas in odio error, impedit doloremque autem, aperiam harum, aliquam animi illum et. Consequuntur dolorem doloremque assumenda, voluptates rerum sapiente similique veniam sequi tempore, cupiditate ab id eos laboriosam maxime?",
      breed: "Giri",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1571846599782-8164c94f5892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0dGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "New Delhi",
      price: 200,
      contact: 123456787,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus corrupti excepturi odit sit! Numquam reprehenderit veniam ipsam, maxime dolorem alias officia dolorum in ipsum modi? Odio sequi ratione nihil iste mollitia nemo. Omnis dolore, cum repudiandae illum eligendi voluptates, aliquam explicabo a mollitia maxime, enim earum porro hic exercitationem reiciendis! Velit at repellendus quae ut minus incidunt itaque officiis assumenda, eaque enim natus iusto ipsam temporibus cumque! Soluta culpa voluptas in odio error, impedit doloremque autem, aperiam harum, aliquam animi illum et. Consequuntur dolorem doloremque assumenda, voluptates rerum sapiente similique veniam sequi tempore, cupiditate ab id eos laboriosam maxime?",
      breed: "Giri",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1571846599782-8164c94f5892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0dGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "New Delhi",
      price: 200,
      contact: 123456787,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus corrupti excepturi odit sit! Numquam reprehenderit veniam ipsam, maxime dolorem alias officia dolorum in ipsum modi? Odio sequi ratione nihil iste mollitia nemo. Omnis dolore, cum repudiandae illum eligendi voluptates, aliquam explicabo a mollitia maxime, enim earum porro hic exercitationem reiciendis! Velit at repellendus quae ut minus incidunt itaque officiis assumenda, eaque enim natus iusto ipsam temporibus cumque! Soluta culpa voluptas in odio error, impedit doloremque autem, aperiam harum, aliquam animi illum et. Consequuntur dolorem doloremque assumenda, voluptates rerum sapiente similique veniam sequi tempore, cupiditate ab id eos laboriosam maxime?",
      breed: "Giri",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1571846599782-8164c94f5892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0dGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      location: "New Delhi",
      price: 200,
      contact: 123456787,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus corrupti excepturi odit sit! Numquam reprehenderit veniam ipsam, maxime dolorem alias officia dolorum in ipsum modi? Odio sequi ratione nihil iste mollitia nemo. Omnis dolore, cum repudiandae illum eligendi voluptates, aliquam explicabo a mollitia maxime, enim earum porro hic exercitationem reiciendis! Velit at repellendus quae ut minus incidunt itaque officiis assumenda, eaque enim natus iusto ipsam temporibus cumque! Soluta culpa voluptas in odio error, impedit doloremque autem, aperiam harum, aliquam animi illum et. Consequuntur dolorem doloremque assumenda, voluptates rerum sapiente similique veniam sequi tempore, cupiditate ab id eos laboriosam maxime?",
      breed: "Giri",
    },
  ];
  const [info, setInfo] = useState(data);
  return (
    <main class="buyContainer">
      <h1 class="buyheading">Available Cattles</h1>
      <div class="emptyLine"></div>
      {info.map((item) => {
        const { id, img, location, price, breed, contact, desc } = item;
        return (
          <section key={id} class="cardContainer">
            <div class="card">
              <div class="imgContainer">
                <img src={img} alt="cattle image" />
              </div>
              <div class="cattleInfo">
                <div class="aboutSection">
                  <h3>About</h3>
                  <div class="aboutLine"></div>
                </div>
                <p class="cattleBreed">
                  Breed: <span>{breed}</span>
                </p>
                <p class="cattlePrice">
                  Price: <span>₹{price}</span>
                </p>
                <p class="ownerLocation">
                  Location: <span>{location}</span>
                </p>
                <p class="ownerContact">
                  Contact: <span>{contact}</span>
                </p>
              </div>
            </div>
            <div class="cattleDesc">
              <div class="descSection">
                <h3>Description</h3>
                <div class="descLine"></div>
              </div>
              <p>{desc}</p>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Buy;
