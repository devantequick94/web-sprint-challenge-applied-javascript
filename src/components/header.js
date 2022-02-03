const Header = (title, date, temp) => {
  
  
  
  const div = document.createElement("div");
  div.className = "header";

  const initialSpan = document.createElement("span");
  initialSpan.className = "date";
  initialSpan.textContent = date;

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = title;

  const addSpan  = document.createElement("span");
  addSpan.className ="temp";
  addSpan.textContent = temp;
  
  div.append(initialSpan, mainTitle, addSpan);

  return div;



  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
};

const headerAppender = (selector) => {

  const react = document.querySelector(selector);
  react.appendChild(Header("Insert Header Here"))
  return react
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
