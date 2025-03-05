// JavaScript code to handle the carousel
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function showNextItem() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

function showPrevItem() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', showPrevItem);
nextBtn.addEventListener('click', showNextItem);

setInterval(showNextItem, 5000); // Change image every 5 seconds

document.getElementById('toggleBtn').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('open');
});

// JavaScript code to handle the comment section
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `<p><strong>${name}:</strong> ${comment}</p>`;
  commentList.appendChild(newComment);
  commentForm.reset();
});