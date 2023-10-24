const quotes = [

  {
    quote:'What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.',
    author:'Helen Keller'
  },

  {
    quote:'Life is from the inside out. When you shift on the inside, life shifts on the outside.',
    author:'Kamal Ravikant',
  },
  {
    quote:'Time cools, time clarifies. No mood can be maintained quite unaltered through the course of hours.',
    author:'Mark Twain',
  },
  {
    quote:'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.',
    author:'Marcus Aurelius Antoninus',
  },
  {
    quote:'There are risks and costs to a program of action. But they are far less than the long-range risks and costs of comfortable inaction.',
    author:'John F. Kennedy',
  },
  {
    quote:'Courage is resistance to fear, mastery of fear - not absence of fear.',
    author:'Mark Twain',
  },
  {
    quote:'Your beliefs become your thoughts. Your thoughts become your words. Your words become your actions. Your actions become your habits. Your habits become your values. Your values become your destiny.',
    author:'Mahatma Gandhi',
  },


]

const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

const todaysQuote = quotes[Math.floor((Math.random()*quotes.length))]

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;