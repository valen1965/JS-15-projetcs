// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights turmeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items

const author = document.querySelector('.author');
const image = document.getElementById('person-img');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
  author.textContent = reviews[currentItem].name;
  job.textContent = reviews[currentItem].job;
  image.src = reviews[currentItem].img;
  info.textContent = reviews[currentItem].text;
  prevBtn.classList.add('hide-btn');
});

/// option circling the array
//===========================

// nextBtn.addEventListener('click', () => {
//   currentItem++;
//   if (currentItem > reviews.length - 1) {
//     currentItem = 0;
//   }
//   showPerson(currentItem);
// });

// prevBtn.addEventListener('click', () => {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = reviews.length - 1;
//   }
//   showPerson(currentItem);
// });


//// option till the end or beginning ofthe array
//===============================================

nextBtn.addEventListener('click', () => {
  currentItem++;
  prevBtn.classList.remove('hide-btn');
  if (currentItem === reviews.length - 1) {
    nextBtn.classList.add('hide-btn')
  }

  showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem > 0) {
    nextBtn.classList.remove('hide-btn');
  }
  if (currentItem === 0) {
    prevBtn.classList.add('hide-btn');
  }
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person]
  author.textContent = item.name;
  job.textContent = item.job;
  image.src = item.img;
  info.textContent = item.text;
}

// random person

randomBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * reviews.length)
  currentItem = randomNumber;
  showPerson(currentItem);
});