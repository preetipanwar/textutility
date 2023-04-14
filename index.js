function uppercase() {
  let textarea = document.querySelector("textarea");
  textarea.value = textarea.value.toUpperCase();
}

function lowercase() {
  let textarea = document.querySelector("textarea");
  textarea.value = textarea.value.toLowerCase();
}

function clean() {
  let textarea = document.querySelector("textarea");
  textarea.value = "";
}

function whitespace() {
  // 1. convert string to array
  // 2. new array with no spaces in b/w
  // 3. join this new array to a string

  let textarea = document.querySelector("textarea");
  let arrayOfWords = textarea.value.trim().split(" ");
  // ['this', '', '', '', 'is']
  // ['this', 'is']
  // this is
  //       bangalore   delhi   i   was     .

  let arrayWithNoSpaces = [];

  for (let word of arrayOfWords) {
    if (word != "") {
      arrayWithNoSpaces.push(word);
    }
  }
  textarea.value = arrayWithNoSpaces.join(" ");
}

function copy() {
  let textarea = document.querySelector("textarea");
  navigator.clipboard.writeText(textarea.value);
}

function titlecase() {
  // 1 . convert string to array
  // 2. replicate array to an array of Title case
  // 3. convert array to string

  let textarea = document.querySelector("textarea");
  let arrayOfWords = textarea.value.trim().split(" ");
  let titlecaseArray = [];

  console.log(arrayOfWords);

  for (let word of arrayOfWords) {
    titlecaseArray.push(word[0].toUpperCase() + word.slice(1));
  }

  let titlecaseString = titlecaseArray.join(" ");
  textarea.value = titlecaseString;
}
