let products = [
  {
    id: 1,
    brand: "Lacoste",
    name: "Red & White Lacoste",
    price: 800,
    imageUrl: "./img/Red_White_Lacoste1.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [2, 3, 4, 5],
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Black addidas shoes",
    price: 600,
    imageUrl: "./img/black-adidas.avif",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [4, 5, 6, 7],
  },

  {
    id: 3,
    brand: "Lacoste",
    name: "Light blue Lacoste",
    price: 800,
    imageUrl: "./img/Light_blue_lacoste.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [1, 4, 5, 6],
  },
  {
    id: 4,
    brand: "New Balance",
    name: "Orange New Balance",
    price: 1000,
    imageUrl: "./img/New_balance_orange.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [1, 4, 5, 6],
  },
  {
    id: 5,
    brand: "Adidas",
    name: "White Adidas",
    price: 550,
    imageUrl: "./img/white-addidas.avif",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [1, 4, 5, 6],
  },
  {
    id: 7,
    brand: "Adidas",
    name: "Adidas Samba Light Purple",
    price: 550,
    imageUrl: "./img/adidas_samba_light_purple.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [1, 4, 5, 6],
  },
  {
    id: 8,
    brand: "Adidas",
    name: "ADIDAS ORIGINALS x KSENIA SCHNAIDER",
    price: 1800,
    imageUrl: "./img/adidas_ksenia_shchnaider.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [1, 4, 5, 6],
  },
  {
    id: 9,
    brand: "New Balance",
    name: "New Balance Pink Sneaker",
    price: 1100,
    imageUrl: "./img/New_balance_pink_sneaker.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [1, 4, 5, 6],
  },
  {
    id: 10,
    brand: "Converse",
    name: "Converse Chuck Taylor",
    price: 1600,
    imageUrl: "./img/Converse_Chuck_Taylor.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quasi optio, suscipit aperiam earum ipsa ratione iusto. Dicta nobis officiis libero ea! Suscipit eligendi voluptas exercitationem tempore! Ullam, voluptate? LaboreRecusandae, sit itaque. Praesentium deserunt facere distinctio doloremque alias? Veniam quas, omnis blanditiis nemo esse, commodi assumenda fugiat asperiores reprehenderit vero ducimus, repudiandae repellendus rem sequi sit odit dolore voluptatum?Omnis facilis perferendis dolorum quisquam quas, magnam fugit molestias mollitia laudantium in rem cumque aliquid explicabo, soluta totam pariatur aperiam autem corporis libero vitae iusto illo magni, aliquam sint. Quisquam?Hic, sit aut! Hic, voluptas et? Optio illum iure repellendus dicta autem facere molestias eligendi repudiandae? Quas quibusdam deleniti reiciendis assumenda praesentium excepturi optio nesciunt soluta, voluptas esse iure numquam.In, nam. Magni soluta ducimus nisi ut quam temporibus tenetur sit, eaque rerum? Beatae ab saepe ducimus consectetur fugit, fuga quidem adipisci amet nesciunt, doloremque similique possimus eum aut dolores!",
    relatedProducts: [1, 4, 5, 6],
  },
];

let cartList = [];

function renderProducts(container, productlist) {
  const productContainer = document.getElementById(container);

  productlist.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("pro");
    productDiv.onclick = function () {
      goToProductPage(product.id);
    };

    productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" />
            <div class="pro-content">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <h4>${product.price}TL</h4>
                </div>
                <a href="#" style="margin: auto 1rem auto auto">
                    <i class="bi bi-cart-check-fill cart"></i>
                </a>
            </div>
        `;

    productContainer.appendChild(productDiv);
  });
}

// display the detail of selected product

function displaySelectedProduct(productId) {
  const selectedProduct = products.find((product) => product.id === productId);
  const productDetailsContainer = document.getElementById("prodetails");

  if (selectedProduct) {
    // Clear previous content
    productDetailsContainer.innerHTML = "";

    productDetailsContainer.innerHTML = `
      <div class="single-pro-image">
        <img src="${selectedProduct.imageUrl}" alt="${selectedProduct.name}" width="100%" />
      </div>
      <div class="single-pro-details">
        <h6>Home/Shoes</h6>
        <h4>${selectedProduct.name}</h4>
        <h2 >${selectedProduct.price}TL</h2>
        <select id="sizeSelect">
          <option>Select Size</option>
          <option>36</option>
          <option>37</option>
          <option>38</option>
          <option>39</option>
          <option>40</option>
          <option>41</option>
          <option>42</option>
          <option>43</option>
          <option>44</option>
        </select>

        <input type="number" value="1" id="Quantity" />
        <button class="normal" onclick="addToCart(1)">Add To Cart</button>
        <h4>Product Details</h4>
        <p>${selectedProduct.description}</p>
      </div>
      `;

    //display related products
    let relatedProducts = [];
    selectedProduct.relatedProducts.forEach((item) => {
      relatedProducts.push(products[item - 1]);
    });
    renderProducts("relatedProducts", relatedProducts);
  } else {
    // Handle case where product ID is not found
    console.log("Product not found");
  }
}

function goToProductPage(productId) {
  window.location.href = `singleProduct.html?id=${productId}`;
}

// add products to cart list

function addToCart(productId) {
  // selected size
  let selectedSize = document.getElementById("sizeSelect").value;
  console.log("selectedSize", selectedSize);

  // selected quantity
  let selectedQuantity = document.getElementById("Quantity").value;

  // Find the product in the products array based on the productId
  let product = products.find((p) => p.id === productId);

  if (!product) {
    alert("Product not found!");
    return;
  }

  if (!selectedSize || selectedSize === "Select Size") {
    alert("Please choose a valid size!");
    return;
  }

  // // Add the product to the cart list
  cartList.push({
    id: product.id,
    brand: product.brand,
    name: product.name,
    image: product.imageUrl,
    price: product.price,
    size: selectedSize,
    quantity: selectedQuantity,
  });

  // Store the cartList in localStorage
  localStorage.setItem("cartList", JSON.stringify(cartList));

  alert("Product added to cart successfuly!!", product.name);
}

function renderCart() {
  console.log("cartList", cartList);
  const tableBody = document.querySelector("#cart tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  cartList.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td><i class="bi bi-x-circle"></i></td>
        <td><img src="${product.image}" alt="${
      product.name
    }" class="order-image"/></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><input type="number" value="${product.quantity}" /></td>
        <td>${(product.price * product.quantity).toFixed(2)}</td>
      `;

    tableBody.appendChild(row);
  });
}

// show the rsume cart table
function renderCartTotals() {
  const subtotal = cartList.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const shipping = "Free"; // You can update this dynamically based on your shipping logic

  const total = subtotal; // Placeholder for total calculation

  const subtotalElement = document.querySelector("#subtotal table");
  subtotalElement.innerHTML = `
      <tr>
        <td>Cart Subtotal</td>
        <td> ${subtotal.toFixed(2)} TL</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>${shipping}</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong> ${total.toFixed(2)} TL</strong></td>
      </tr>
    `;
}

// Call the function to render products when the page loads
window.onload = function () {
  if (window.location.pathname.includes("index.html")) {
    // Display first 4 products for new arrivals
    const firstFourProducts = products.slice(0, 4);
    renderProducts("newArrivalsPro", firstFourProducts);

    // Display summer products
    const summerProducts = [products[0], products[3], products[5], products[6]];
    renderProducts("productContainer", summerProducts);
  }

  //Display shop products
  if (window.location.pathname.includes("shop.html")) {
    renderProducts("shopProductContainer", products);
  }

  // display single product details
  if (window.location.pathname.includes("singleProduct.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    if (!isNaN(productId)) {
      displaySelectedProduct(productId);
    }
  }

  // display cart list items in table
  if (window.location.pathname.includes("cart.html")) {
    // Retrieve cart items from localStorage
    const storedCartItems = localStorage.getItem("cartList");
    if (storedCartItems) {
      cartList = JSON.parse(storedCartItems);
    }

    renderCart();

    // Update cart totals section
    renderCartTotals();
  }
};
