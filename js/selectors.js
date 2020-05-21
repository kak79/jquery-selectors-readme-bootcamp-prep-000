// declare your functions here...

function paragraphSelector(){
  //The function should use an element selector to select the p tags in index.html and return those elements.
  
  return $("p");
  
}

function lastImageSelector(){
 //The function should use the last jQuery selector to return the last image in index.html 
  
  var img = "cat";
  return $(img); 
   
  
}
 
function ninjaBabySelector(){
 //The function should use an ID selector to return the ninja baby image. 
  
  return $(img.id= "baby-ninja");
  
}

function divSelector(){
 //The function should use a class selector to return the two divs with the class pics 
  
  $(div.class ="pics");
  
}

function firstListItem(){
 //The function should use a first-child selector to return the first list item in the ul with the ID pic-list 
  
   $("p:first-child (1 li)");
  
}

