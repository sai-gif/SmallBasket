import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.bigbasket.com/media/uploads/banner_images/2011019_breakfast-store_460.jpg"
          alt=""
        />

        <div className="home__row">

          <Product
            id="12321341"
            title="Fresh Apples 1kg"
            price={210.00}
            rating={4}
            image="https://images.heb.com/is/image/HEBGrocery/000320625-1?$article%2D235%2Dsquare$"
          />
          <Product
            id="49538094"
            title="Best Farm Eggs 12 no's"
            price={80}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyLf6gum-OUoBLrc21Q5na95L7_7dWTJ9snQ&usqp=CAU"
          />
          <Product
            id="49538094"
            title="Pomogrinate 4ps"
            price={120.70}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1r0Qz6GE8hiOEhW_QFu5fjo54yktGzCPijg&usqp=CAU"
          />

          <Product
            id="49538094"
            title="Watermelon 1ps (700grams)"
            price={100.80}
            rating={4}
            image="https://www.naturalfoodseries.com/wp-content/uploads/2017/08/Watermelon-800x416.jpg"
          />


        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Tamatos 1Kg"
            price={90.00}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSACsPh2O1P0SWmGtRydcPnDGTYLpnVjL6rvg&usqp=CAU"
          />
          <Product
            id="4903850"
            title="Potatos the best near you -1Kg"
            price={79.99}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzHWmmxIB4jjttczwhze6ZyAZ29F3u_jOcdQ&usqp=CAU"
          />
          
          <Product
            id="23445930"
            title="Onions 1Kg Best quality"
            price={98.99}
            rating={5}
            image="https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Onions_Red_Hero.jpg"
          />
          <Product
            id="3254354345"
            title="Almonds (500grams)"
            price={598.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_QvAJ6BYst5xqCqyCCEP1UHhXrlzeqZfMfO7ORdjkM2_JGBAe7e9ctcUfacNgRSdZgzvTlrhxoY9CYeRZpbKAcOUpccJPUUSFv4n-atep&usqp=CAE"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="TATA Salt purity at its peek"
            price={45.00}
            rating={4}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ207hMo_btlxivvXnDYuzyFPg2vLqj2bY38jPYe6VEH294GAUgFupEqYoRs5SEeDNJ6RV9zdSP32V5UOVc8CEKqfU3hxvfEFxvQ43njIVGgOakIrwv-8lp&usqp=CAE"
          />
          <Product
            id="90829332"
            title="Freedom Refined Sunflower Oil Pouch(1 liter)"
            price={150.98}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWF3ch6x-D28vtx-9v8kRyC0G3GL2etVJi6C5EfAjRc2plWuVGN1TJUV05qdTSxbCD6bSjRVuM22OU7wH6Aj18Y9rtLwCt4dek_BusIWnS&usqp=CAE"
          />
          <Product
            id="90829332"
            title="Kellogg's Corn Flakes Original  (250 g, Box)"
            price={95.00}
            rating={4}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDF2cfhzZ9KVevHpx5hcwgsqq8PVYEf_p-xx_-FGJ3FKi_89qGzQ1xPpNOBv_FvhO-xgdRZzN3qfZaQn_4mMF5JJaU1kDS0hmW5u_YbPUobihBwO1ebfLf0Q&usqp=CAE"
          />
          <Product
            id="90829332"
            title="Lay's American Style Cream & Onion Flavour Chips  (90 g)"
            price={35.90}
            rating={2}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrXnS6Kvqu0w_SfXtttQiHvxtTIqwlG-ay7zXxeSMXx9vmxsZDI7dWMRP29rr_JXNAZG4dplslppMlfvUJodSjJdMrlIv9HQ31asIjg9cM&usqp=CAE"
          />
        </div>




        <div className="home__row">
          <Product
            id="90829332"
            title="Hershey's Kisses Creamy Milk Chocolate Truffles  (108 g)"
            price={126.46}
            rating={3}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTRpM12DgG21EwgR-3DN9cmox2uNS8SLLqUdbHXHAGLdfPh85lCTAjuMjTa1w3jjkb1rhaEUUcSx3jBHaavAgCj0S7wiFU_G8A-vR36FtYOw3zCnKegnjAbQ&usqp=CAE"
          />
          <Product
            id="90829332"
            title="Amul pure Butter 250g"
            price={300}
            rating={5}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQM9jzzIDzL4eiRWTR8wHAFdQnCd4ghH-ykTFHqq3JrPjqqpFdsRsaHm8Z9_aLjCpbRyAGJE0njIYjiu_opVnQJrQry28wTu8GEUaJ04HFAJBRYo5HktHG6&usqp=CAE"
          />
          <Product
            id="90829332"
            title="Nescafe Classic Instant Coffee 100g"
            price={195.00}
            rating={3}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0yr2sR_Ybt2re-O9SJraZNaKpj21Ls4ZYpVRpd9FhZ0kgEYm1gA_YQtJDliV0xiljiazG-EE81Y6qyKRC1EufWRaHHNWobnzfXIVznEMG&usqp=CAE"
          />
          <Product
            id="90829332"
            title="Kissan Tamato ketchup"
            price={99.90}
            rating={2}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSs22Q9gkeLLa9WXnX5TOpDBnuOrwWcCM5F2-0sNPoN5mQR09lwCs-HBYgBULUxdNBV2XVD_Hzdv_CDMceqq9V-zy44eAF8rfjarXpNXw&usqp=CAE"
          />

        </div>










      </div>
    </div>
  );
}

export default Home;
