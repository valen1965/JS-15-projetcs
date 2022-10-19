const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.webp",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.webp",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.webp",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.webp",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.webp",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.webp",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.webp",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.webp",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "meatloaf",
    category: "dinner",
    price: 42.09,
    img: "./images/item-9.webp",
    desc: `meatloaf steaks fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container'
);


// load content on windowloaded

window.addEventListener('DOMContentLoaded', () => {
  showMenuItems(menu);
  displayButtons();
});

function showMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `
    <article class="menu-item">
          <img src=${item.img}  alt=${item.title} class="photo" />
          <div class="item-info">
            <header class="item-title">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>
        `;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;

}

// filtering menu items

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const category = e.currentTarget.dataset.id;
//     const menuCategory = menu.filter((menuItem) => {

//       if (category === menuItem.category) {
//         return menuItem;
//       }
//     });
//     if (category === 'all') {
//       showMenuItems(menu);
//     } else {
//       showMenuItems(menuCategory);
//     }
//   });
// });

// dynamically adding buttons for categories
// 1 -- checking existing categories

function displayButtons() {
  const categories = menu.reduce((value, item) => {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  }, ['all']);

  // 2 render created buttons to HTML
  const categoryBtns = categories.map((category) => {
    return `
      <button type="button" class="filter-btn" data-id=${category}>${category}</button>
      `
    categoryBtns.join('');
  });

  btnContainer.innerHTML = categoryBtns;
  const filterBtn = btnContainer.querySelectorAll('.filter-btn');

  filterBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {

        if (category === menuItem.category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        showMenuItems(menu);
      } else {
        showMenuItems(menuCategory);
      }
    });
  });
}



