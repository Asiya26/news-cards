const newsUrl = "https://newsapi.org/v2/top-headlines?apiKey=44d421d3751d49d5a702ef139d16261c&country=cz"

const fetchNews = async () => {
  const res = await fetch(newsUrl)
  if(!res.ok) throw new Error('Server error');
  const news = await res.json();
  return news;
}

const displayNews = (newsArray) => {
  const output = document.querySelector('#output');
  output.innerHTML = '';
  newsArray.forEach(news => {
    output.innerHTML += `
    <div class="card col-3 m-1 p-0">
    <img class="card-img-top" src="${news.urlToImage}"  alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${news.title}</h5>
      <p class="card-text">${news.description}</p>
      <small>Author : ${news.author} </small>
         <div class="text-center mt-2">
        <a href="${news.url}" class="btn btn-primary">Open Article</a>
      </div>
    </div>
    `;
  })
}


fetchNews()
.then(news => {
  displayNews(news.articles)
})
.catch(err => console.log(err))