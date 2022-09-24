
// ************Part 1!*********************
//styles.textDecoration = 'line-through' //strikethrough
//1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul`). 
//2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.
function strikeThrough(){
    //let listen listItem = document.querySelector('li');
    let listItem = document.querySelector('#arguments li') //selects the first li from the #arguments list
    listItem.style.textDecoration = ' line-through';
   }
strikeThrough();
//3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. 
// The function should set the image with that `id` to have that url as its image source.

/*
function setImage
id: 'string'
url: 'string'
*/
function setImage(id, url){
    let img = document.querySelector(`#${id}`);
    img.src = url;
}

//4. Now use that function to set the three images in the Image Area section to show three images of your choice. 
// You'll need three separate calls to your function!
setImage("image-1","https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_266.jpg");
setImage("image-2","https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_266.jpg");
setImage("image-3","https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_266.jpg");

//5. This next function also doesn't require any parameters: 
// write a function that always removes the first `<li>` from the Arguments `<ul>`
function remover(){
    let li = document.querySelector('li');
    li.remove();
}

// 6. Now use it to remove the first two items from that list. You'll need to call it twice!
remover();
remover();

// 7. Write a function that takes in two strings, one representing a font size and one representing an id, 
// and sets the thing with that id to have that size for its text.
function setTextSize(fontSize, id){
let text = document.querySelector(id);
text.style.fontSize = fontSize;
}
setTextSize(`${Math.floor(Math.random() * 100)}px`,'#heading');

// 8. Try using it to change the size of any text on the page.
setTextSize('50px', '#thing-1');




// *****************Part 2!DOM Elements as Function Parameters**********************
// 1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.
function addChild(element){
    let list = document.querySelector("#arguments");
    list.appendChild(element);
}
let newElement = document.createElement('li');
newElement.innerText = "Woah, it's a list item!";
addChild(newElement);

// 2. Let's use it! Create an image element in Javascript and pass it into your function.
let newImg = document.createElement('img')
newImg.src = ('https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_266.jpg')
addChild(newImg)

// 3. Write a function that takes in an image element and modifies its height to be 30 pixels.
function imgSize(img){
    img.style.height = "30px"
}

// 4. Let's use it. Query an image element and then pass it into the function.
imgSize(newImg);

// 5. Write a function that takes in an element and gives it the class `invisible`.
function catchUp(go){
    go.Name = 'invisible';
}

// 6. Now query an element on the page and pass it into that function. Y
// you should see it disappear! (feel free to check the CSS file to see how this class works.)
let comp = document.querySelector('h1')
catchUp('h1')


// ************Part Three - Creating DOM Elements***************
//1. Write a function that takes in text and returns a new `<li>` 
// with the given text parameter as its `innerText`.
function textCreator(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}
//2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, 
// then append it to the page (use your first function from part 2).
let testItem = textCreator("Hi globe");

addChild(testItem);

//3. Write a function that takes in two strings, one representing a header size and one some text, 
// and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.
function createHeader(hSize, text){
    let header = document.createElement('h${hSize}');
    header.innerText = text;
    return header;

    // let one = "h1";
    // let two = "h2";
    // let three = "h3";
    // let four = "h4";
    // let five = "h5";
    // let six = "h6";
  
    // let header = "";

    // if (hSize === '1'){
    //   let header = document.createElement("h1");
    // } else if (hsize === '2'){
    //     header = document.createElement("h2");
    // }
    // }
}
//4. Test it by calling it with a header size and some text, storing the return value in a variable, 
// then appending it to the page (again, use your first function from part 2).
let headerTest = createHeader('2','some text');
addChild(headerTest);
