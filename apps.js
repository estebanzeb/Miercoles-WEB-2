  
const fetchData = async (country="co", category="business") => {
    let response = await fetch(`http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f666b1a15c8940dc9df48ce0596933fa`);
    let dataJson = await response.json();
    return dataJson.articles;
  }
  const renderData = async (category) => {
    let country = document.getElementById("countries").value;
    const articles = await fetchData(country, category);
    let container = document.getElementById("articles");
    container.innerHTML = "";
    let urlImageNotFound = "https://programacion.net/files/article/20160819020822_image-not-found.png";
    // conticion ? instrucción : intrcción
    articles.forEach((article) => {
     
         
      container.innerHTML += alertTemplate;
    });
  }
  renderData();

