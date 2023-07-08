var btn = document.getElementById("btn")
var quote = document.getElementById("quote")
var auther = document.getElementById("auther")

var theqoute = ["“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”"];

var Auther = ["― Oscar Wilde",
    "― Marilyn Monroe",
    "― Albert Einstein",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
    "― Bernard M. Baruch",
    "― Dr. Seuss",
    "― Mae West",
    "― Mahatma Gandhi"];

function changequote() {
    var quote1 = Math.floor((Math.random() * theqoute.length));
    var quote2 = (theqoute[quote1])
    var auther1 = (Auther[quote1])
    quote.innerHTML = quote2
    auther.innerHTML = auther1

    
}



























