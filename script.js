/* .js files add interaction to your website */
//create list of facts 
var factList = [
  "As of 2020, suicide is the second leading cause of death for U.S. children ages 10 to 14, preceded only by unintentional injury - National Alliance on Mental Illness",
  "In 2020, 51.2% of U.S. females received mental health services, while only 37.4% of males received mental health services - National Institute of Mental Health",
  "Young adults ages 18 to 25 in the U.S have the highest rate of experiencing any mental health concerns (30.6%) compared to adults aged 26 to 49 years, and the highest rate of serious mental illness (9.7%) - National Institute of Mental Health.",
  "Due to the COVID-19 pandemic, the number of anxiety and depressive disorders grew. Depressive symptoms grew from a base of about 193 million people worldwide to 246 million, which is about 28%. Anxiety disorders grew from about 298 million people affected to 374 million, which is about a 25% increase. - The Lancet",
  "In the United States, almost half of adults (46.4 percent) will experience a mental illness during their lifetime. - Mental Health First Aid"
];

//get elements in order to change the HTML
var fact = document.getElementById("facts");
var factButton = document.getElementById("factsButton");
var count = 0;

//make sure there is a fact generator button before showing anything
if (factButton){
  factButton.addEventListener("click", displayFact);
}


function displayFact() {
  
  fact.innerHTML = factList[count];
  count ++;
  if (count == factList.length){
    count = 0;
  }
  
}

