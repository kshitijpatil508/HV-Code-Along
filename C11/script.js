let jokes = [
  "I failed math so many times at school, I can’t even count.",
  "I can’t believe I got fired from the calendar factory. All I did was take a day off.",
  "Most people are shocked when they find out how bad I am as an electrician.",
  " Two fish are in a tank. One says, ‘How do you drive this thing?’",
  "Atheism is a non-prophet organization.",
  " I’m reading a book about anti-gravity. It’s impossible to put down.",
];

document.getElementById("joke").innerText =
  jokes[Math.floor(Math.random() * jokes.length)];
