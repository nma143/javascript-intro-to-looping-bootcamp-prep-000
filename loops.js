function forLoop (arrayArg)
{
  for(var i=0; i<25; i++)
  {
    if(i==1)
    {
      arrayArg.push("I am 1 strange loop.");
    }
    else
    {
      arrayArg.push("I am ${i} strange loops.");
    }
  }
  return arrayArg;
}

function whileLoop(num)
{
  while(num>0)
  {
    console.log(num);
    num=num-1;
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
function doWhileLoop(arrayArg)
{
  do
  {
    arrayArg.shift();
  }
  while (arrayArg.length > 0 && maybeTrue());
  return arrayArg;
}
