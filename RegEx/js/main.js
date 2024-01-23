
/* Character classes
.	any character except newline
\w\d\s	word, digit, whitespace
\W\D\S	not word, digit, whitespace
[abc]	any of a, b, or c
[^abc]	not a, b, or c
[a-g]	character between a & g
Anchors
^abc$	start / end of the string
\b\B	word, not-word boundary
Escaped characters
\.\*\\	escaped special characters
\t\n\r	tab, linefeed, carriage return
Groups & Lookaround
(abc)	capture group
\1	backreference to group #1
(?:abc)	non-capturing group
(?=abc)	positive lookahead
(?!abc)	negative lookahead
Quantifiers & Alternation
a*a+a?	0 or more, 1 or more, 0 or 1
a{5}a{2,}	exactly five, two or more
a{1,3}	between one & three
a+?a{2,}?	match as few as possible
ab|cd	match ab or cd
 */

document.getElementById("phoneNum").addEventListener("input", (event) => {
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);
    if (!found && phone.length) {
      input.classList.add("invalid");
      format.classList.add("block");
    } else {
      input.classList.remove("invalid");
      format.classList.remove("block");
    }
  });
  
  document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(regex, "");
    console.log(savedPhoneNum);
  });
  
  document.getElementById("textForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    console.log(newText);
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodeURI(newText);
    console.log(encodedInputText);
    console.log(encodedCleanText);
  });