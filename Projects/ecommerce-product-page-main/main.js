const cratCount = document.getElementById('cart-count');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const addToCart = document.querySelector('.cart');
const itemNo = document.querySelector('.item-number');
const cartItem = document.querySelector('.cart-item');
const cartIcon = document.querySelector('.cart-icon');
const cartView = document.querySelector('.cart-view');
const cartText = document.querySelector('.cart-text');
const cost = document.querySelector('.final-cost');
const calculate = document.querySelector('.calculate');
const deleteBtn = document.querySelector('.delete');
const alertMessg = document.querySelector('.empty');
const mainImage = document.querySelector('.main-img');
const show = document.querySelector('.main-section');
const closeBtn = document.querySelector('.img-close');
const thumb = document.querySelectorAll('.thumb');
const thumbOver = document.querySelectorAll('.thumb-overview');
const mainThumb = document.getElementById('main-thumb');
const mainThumbOver = document.getElementById('main-thumb-overview');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const prevOverBtn = document.getElementById('prev-over');
const nextOverBtn = document.getElementById('next-over');
let count = 0;
let imgCount = 1;
let overImgCount = 1;
itemNo.innerText = '0';
plus.addEventListener('click', () => {
  count++;
  cratCount.innerText = count;
  cartView.classList.remove('cart-view-display');
});
minus.addEventListener('click', () => {
  count--;
  if (count >= 0) {
    cratCount.innerText = count;
    cartView.classList.remove('cart-view-display');
  } else {
    alert('Count can not be less than zero');
  }
});
//----------------------------------------------
addToCart.addEventListener('click', () => {
  let a = parseFloat(cratCount.innerText);
  cartView.classList.remove('cart-view-display');
  itemNo.innerText = a;
  cartItem.classList.add('none');
});

//------------------------------------------------------------
cartIcon.addEventListener('click', () => {
  cartView.classList.toggle('cart-view-display');
  let a = parseFloat(itemNo.innerText);
  let b = parseFloat(cost.innerText);
  if (itemNo.innerText == 0) {
    cartText.classList.add('property');
    alertMessg.classList.remove('property');
  } else {
    cartText.classList.remove('property');
    alertMessg.classList.add('property');
    calculate.innerHTML = b + 'x' + a + '<h6>$' + eval(b * a) + '.<h6>';
  }
});

//---------------------------Image--------------------------

mainThumb.addEventListener('click', () => {
  if (screen.width > 500) {
    show.classList.add('show');
    closeBtn.addEventListener('click', () => {
      show.classList.remove('show');
      console.log('hi');
    });
  } else {
    show.classList.remove('show');
  }
});
thumb.forEach(content => {
  content.addEventListener('click', () => {
    let imgSrc = content.getAttribute('src');
    mainThumb.innerHTML = `<img class="img-fluid main-img" id="main-thumb" src="${imgSrc}" alt="">`;
  });
});
thumbOver.forEach(content => {
  content.addEventListener('click', () => {
    let imgSrc = content.getAttribute('src');
    mainThumbOver.innerHTML = `<img class="img-fluid main-img" id="main-thumb-overview" src="${imgSrc}" alt="">`;
  });
});
//---------------------------Normal--------------------------------------------
nextBtn.addEventListener('click', () => {
  imgCount++;
  if (imgCount >= 5) {
    imgCount = 1;
  }
  mainThumb.innerHTML = `<img class="img-fluid main-img" id="main-thumb" src="images/image-product-${imgCount}.jpg" alt="">`;
  console.log(imgCount);
});
prevBtn.addEventListener('click', () => {
  imgCount--;
  if (imgCount < 1) {
    imgCount = 4;
  }
  mainThumb.innerHTML = `<img class="img-fluid main-img" id="main-thumb" src="images/image-product-${imgCount}.jpg" alt="">`;
  console.log(imgCount);
});
//------------------------------OverView---------------------------------

nextOverBtn.addEventListener('click', () => {
  overImgCount++;
  if (overImgCount >= 5) {
    overImgCount = 1;
  }
  mainThumbOver.innerHTML = `<img class="img-fluid main-img" id="main-thumb-overview" src="images/image-product-${overImgCount}.jpg" alt="">`;
  console.log(overImgCount);
});
prevOverBtn.addEventListener('click', () => {
  overImgCount--;
  if (overImgCount < 1) {
    overImgCount = 4;
  }
  mainThumbOver.innerHTML = `<img class="img-fluid main-img" id="main-thumb-overview" src="images/image-product-${overImgCount}.jpg" alt="">`;
  console.log(overImgCount);
});
