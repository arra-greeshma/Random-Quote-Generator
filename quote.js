let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.",
"Your time is limited, so don't waste it living someone else's life.",
"If life were predictable it would cease to be life, and be without flavor.",
"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
"The best and most beautiful things in the world cannot be seen, they must be felt with the heart.",
"Money and success don’t change people; they merely amplify what is already there.",
"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
"The future belongs to those who believe in the beauty of their dreams.",
"When you reach the end of your rope, tie a knot in it and hang on.",
 "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
 "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
 "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
 "You can't be great if you don't feel great. Make exceptional health your number one priority.",
 "Impossible is just an opinion.",
 "The secret of getting ahead is getting started.",
 "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
 "By The River Piedra I Sat Down And Wept",
 "All our dreams can come true if we have the courage to pursue them.",
 "I always wanted to be somebody, but now I realize I should have been more specific.",
 "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
 "If life were predictable it would cease to be life, and be without flavor. ",
 "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
 "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
 "Life is what happens when you're busy making other plans.",
 "When you reach the end of your rope, tie a knot in it and hang on.",
 "Don't judge each day by the harvest you reap but by the seeds that you plant.",
 "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
 "It is during our darkest moments that we must focus to see the light.",
 "Do not go where the path may lead, go instead where there is no path and leave a trail."
];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})