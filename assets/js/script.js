// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
console.log(articlesDiv.children)
articlesDiv.children[0].children[1].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';
headerDiv.children[1].style.color = 'white';
