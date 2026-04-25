// Function Declaration
function getGreetingsDeclaration() {
    return ["Hello world!", "Hola mundo!", "Hallo wereld!", "Привет мир!"];
  }
  
  // Function Expression
  const getGreetingsExpression = function() {
    return ["Hello world!", "Hola mundo!", "Hallo wereld!", "Привет мир!"];
  };
  
  // Arrow Function
  const getGreetingsArrow = () => {
    return ["Hello world!", "Hola mundo!", "Hallo wereld!", "Привет мир!"];
  };
  
  console.log(getGreetingsDeclaration());
  console.log(getGreetingsExpression());
  console.log(getGreetingsArrow());