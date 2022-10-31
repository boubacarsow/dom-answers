let quotes = [
    `I love early morning flight`,
    `Here we come San Francisco`,
    `Let's climb that space niddle....in Seattle.`,
    `Starbucks...the best coffee in the world!`,
    `Family first...Family always!`,
    `The legendary Golden Bridge.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  document.querySelector('#main-title').textContent = 'Short Trips, Lasting Joy!'
  
    // Part 2
  document.querySelector('body').style.backgroundColor = 'yellow'
  
    // Part 3
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
  
    // Part 4
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
  
    // Part 5
  document.querySelectorAll('#past-races > li').forEach((item) => {
    if(item.textContent.trim() === 'Chicago'){
      document.querySelector('#past-races').removeChild(item)
    }
  })
  
    // Part 6
  const li = document.createElement('li')
  li.textContent = 'Aurora'
  document.querySelector('#Past-Trips').appendChild(li)
  
    // Part 7
  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  heading.textContent = 'Aurora'
  const pEl = document.createElement('p')
  pEl.textContent = 'My hometown in Denver, CO'
  
  document.querySelector('.main').appendChild(blogPost)
  
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)
  
    // Part 8
  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  
    // Part 9
  
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('purple')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('red')
    })
  })
  
  
  
  });
  