const quotes = [
  {
    q: "My actions are my only true belongings. I cannot escape the consequences of my actions. My actions are the ground upon which I stand.",
    a: "Thich Nhat Hanh",
    h: "<blockquote>&ldquo;My actions are my only true belongings. I cannot escape the consequences of my actions. My actions are the ground upon which I stand.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>",
  },
  {
    q: "Success comes to those who become success conscious.",
    a: "Napoleon Hill",
    h: "<blockquote>&ldquo;Success comes to those who become success conscious.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>",
  },
  {
    q: "A journey of a thousand miles begins with a single step.",
    a: "Lao Tzu",
    h: "<blockquote>&ldquo;A journey of a thousand miles begins with a single step.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>",
  },
  {
    q: "The greatest deception men suffer is from their own opinions.",
    a: "Leonardo da Vinci",
    h: "<blockquote>&ldquo;The greatest deception men suffer is from their own opinions.&rdquo; &mdash; <footer>Leonardo da Vinci</footer></blockquote>",
  },
  {
    q: "Logic is like the sword – those who appeal to it shall perish by it.",
    a: "Samuel Butler",
    h: "<blockquote>&ldquo;Logic is like the sword – those who appeal to it shall perish by it.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>",
  },
  {
    q: "Life would be tragic if it weren't funny.",
    a: "Stephen Hawking",
    h: "<blockquote>&ldquo;Life would be tragic if it weren't funny.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>",
  },
  {
    q: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    a: "Albus Dumbledore",
    h: "<blockquote>&ldquo;It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.&rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>",
  },
  {
    q: "One reason so few of us achieve what we truly want is that we never direct our focus; we never concentrate our power.",
    a: "Tony Robbins",
    h: "<blockquote>&ldquo;One reason so few of us achieve what we truly want is that we never direct our focus; we never concentrate our power.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>",
  },
  {
    q: "I am not proud, but I am happy; and happiness blinds, I think, more than pride.",
    a: "Alexandre Dumas",
    h: "<blockquote>&ldquo;I am not proud, but I am happy; and happiness blinds, I think, more than pride.&rdquo; &mdash; <footer>Alexandre Dumas</footer></blockquote>",
  },
  {
    q: "Let the beauty of what you love be what you do.",
    a: "Rumi",
    h: "<blockquote>&ldquo;Let the beauty of what you love be what you do.&rdquo; &mdash; <footer>Rumi</footer></blockquote>",
  },
  {
    q: "The eyes of others our prisons; their thoughts our cages.",
    a: "Virginia Woolf",
    h: "<blockquote>&ldquo;The eyes of others our prisons; their thoughts our cages.&rdquo; &mdash; <footer>Virginia Woolf</footer></blockquote>",
  },
  {
    q: "Ask no questions, and you'll be told no lies.",
    a: "Charles Dickens",
    h: "<blockquote>&ldquo;Ask no questions, and you'll be told no lies.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>",
  },
  {
    q: "Honor is the foundation of courage.",
    a: "Amelia Earhart",
    h: "<blockquote>&ldquo;Honor is the foundation of courage.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>",
  },
  {
    q: "It's not what we do once in a while that shapes our lives, but what we do consistently.",
    a: "Tony Robbins",
    h: "<blockquote>&ldquo;It's not what we do once in a while that shapes our lives, but what we do consistently.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>",
  },
  {
    q: "Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift – today.",
    a: "Steve Maraboli",
    h: "<blockquote>&ldquo;Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift – today.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>",
  },
  {
    q: "Keep away from people who try to belittle your ambitions.",
    a: "Mark Twain",
    h: "<blockquote>&ldquo;Keep away from people who try to belittle your ambitions.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>",
  },
  {
    q: "The way to change others' minds is with affection, and not anger.",
    a: "Dalai Lama",
    h: "<blockquote>&ldquo;The way to change others' minds is with affection, and not anger.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
  },
  {
    q: "The decisions of our past are the architects of our present.",
    a: "Dan Brown",
    h: "<blockquote>&ldquo;The decisions of our past are the architects of our present.&rdquo; &mdash; <footer>Dan Brown</footer></blockquote>",
  },
  {
    q: "The more reasons you have for achieving your goal, the more determined you will become.",
    a: "Brian Tracy",
    h: "<blockquote>&ldquo;The more reasons you have for achieving your goal, the more determined you will become.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
  },
  {
    q: "an action committed in anger is an action doomed to failure. ",
    a: "Genghis Khan",
    h: "<blockquote>&ldquo;an action committed in anger is an action doomed to failure. &rdquo; &mdash; <footer>Genghis Khan</footer></blockquote>",
  },
  {
    q: "Life is one long process of getting tired.",
    a: "Samuel Butler",
    h: "<blockquote>&ldquo;Life is one long process of getting tired.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>",
  },
  {
    q: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    a: "Albert Einstein",
    h: "<blockquote>&ldquo;Life is like riding a bicycle. To keep your balance you must keep moving.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>",
  },
  {
    q: "Stop acting so small. You are the universe in ecstatic motion.",
    a: "Rumi",
    h: "<blockquote>&ldquo;Stop acting so small. You are the universe in ecstatic motion.&rdquo; &mdash; <footer>Rumi</footer></blockquote>",
  },
  {
    q: "Each problem has a positive side.",
    a: "Og Mandino",
    h: "<blockquote>&ldquo;Each problem has a positive side.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>",
  },
  {
    q: "You win more from losing than winning.",
    a: "Morgan Wootten",
    h: "<blockquote>&ldquo;You win more from losing than winning.&rdquo; &mdash; <footer>Morgan Wootten</footer></blockquote>",
  },
  {
    q: "We may not be responsible for the world that created our minds, but we can take responsibility for the mind with which we create our world.",
    a: "Gabor Mate'",
    h: "<blockquote>&ldquo;We may not be responsible for the world that created our minds, but we can take responsibility for the mind with which we create our world.&rdquo; &mdash; <footer>Gabor Mate'</footer></blockquote>",
  },
  {
    q: "Those who bring sunshine into the lives of others cannot keep it from themselves.",
    a: "James Matthew Barrie",
    h: "<blockquote>&ldquo;Those who bring sunshine into the lives of others cannot keep it from themselves.&rdquo; &mdash; <footer>James Matthew Barrie</footer></blockquote>",
  },
  {
    q: "A very little key will open a very heavy door.",
    a: "Charles Dickens",
    h: "<blockquote>&ldquo;A very little key will open a very heavy door.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>",
  },
  {
    q: "It is difficult to free fools from the chains they revere. ",
    a: "Voltaire",
    h: "<blockquote>&ldquo;It is difficult to free fools from the chains they revere. &rdquo; &mdash; <footer>Voltaire</footer></blockquote>",
  },
  {
    q: "The longer we dwell on our misfortunes, the greater is their power to harm us.",
    a: "Voltaire",
    h: "<blockquote>&ldquo;The longer we dwell on our misfortunes, the greater is their power to harm us.&rdquo; &mdash; <footer>Voltaire</footer></blockquote>",
  },
  {
    q: "Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.",
    a: "Roy T. Bennett",
    h: "<blockquote>&ldquo;Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "Have a vision. Be demanding.",
    a: "Colin Powell",
    h: "<blockquote>&ldquo;Have a vision. Be demanding.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
  },
  {
    q: "A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise. ",
    a: "Buddha",
    h: "<blockquote>&ldquo;A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise. &rdquo; &mdash; <footer>Buddha</footer></blockquote>",
  },
  {
    q: "Truth is such a rare thing, it is delighted to tell it.",
    a: "Emily Dickinson",
    h: "<blockquote>&ldquo;Truth is such a rare thing, it is delighted to tell it.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>",
  },
  {
    q: "We are always complaining that our days are few, and acting as though there would be no end of them.  ",
    a: "Seneca",
    h: "<blockquote>&ldquo;We are always complaining that our days are few, and acting as though there would be no end of them.  &rdquo; &mdash; <footer>Seneca</footer></blockquote>",
  },
  {
    q: "Alone we can do so little; together we can do so much.",
    a: "Helen Keller",
    h: "<blockquote>&ldquo;Alone we can do so little; together we can do so much.&rdquo; &mdash; <footer>Helen Keller</footer></blockquote>",
  },
  {
    q: "Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!",
    a: "Sathya Sai Baba",
    h: "<blockquote>&ldquo;Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!&rdquo; &mdash; <footer>Sathya Sai Baba</footer></blockquote>",
  },
  {
    q: "You cannot find peace avoiding life.",
    a: "Virginia Woolf",
    h: "<blockquote>&ldquo;You cannot find peace avoiding life.&rdquo; &mdash; <footer>Virginia Woolf</footer></blockquote>",
  },
  {
    q: "Adventure is worthwhile in itself.",
    a: "Amelia Earhart",
    h: "<blockquote>&ldquo;Adventure is worthwhile in itself.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>",
  },
  {
    q: "If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.",
    a: "Robert Greene",
    h: "<blockquote>&ldquo;If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>",
  },
  {
    q: "It is well known that those who do not trust themselves never trust others.",
    a: "Alfred Adler",
    h: "<blockquote>&ldquo;It is well known that those who do not trust themselves never trust others.&rdquo; &mdash; <footer>Alfred Adler</footer></blockquote>",
  },
  {
    q: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    a: "Nelson Mandela",
    h: "<blockquote>&ldquo;I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.&rdquo; &mdash; <footer>Nelson Mandela</footer></blockquote>",
  },
  {
    q: "Whenever you do a thing, act as if all the world were watching.",
    a: "Thomas Jefferson",
    h: "<blockquote>&ldquo;Whenever you do a thing, act as if all the world were watching.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>",
  },
  {
    q: "Only the hand that erases can write the true thing.",
    a: "Meister Eckhart",
    h: "<blockquote>&ldquo;Only the hand that erases can write the true thing.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>",
  },
  {
    q: "The biggest adventure is what lies ahead.",
    a: "J.R.R. Tolkien",
    h: "<blockquote>&ldquo;The biggest adventure is what lies ahead.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>",
  },
  {
    q: "Don't bother people for help without first trying to solve the problem yourself.",
    a: "Colin Powell",
    h: "<blockquote>&ldquo;Don't bother people for help without first trying to solve the problem yourself.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
  },
  {
    q: "Formal education will make you a living, self-education will make you a fortune.",
    a: "Jim Rohn",
    h: "<blockquote>&ldquo;Formal education will make you a living, self-education will make you a fortune.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "Given the choice between the experience of pain and nothing, I would choose pain.",
    a: "William Faulkner",
    h: "<blockquote>&ldquo;Given the choice between the experience of pain and nothing, I would choose pain.&rdquo; &mdash; <footer>William Faulkner</footer></blockquote>",
  },
  {
    q: "Deeds will not be less valiant because they are upraised.",
    a: "J.R.R. Tolkien",
    h: "<blockquote>&ldquo;Deeds will not be less valiant because they are upraised.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>",
  },
  {
    q: "Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.",
    a: "James Allen",
    h: "<blockquote>&ldquo;Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.&rdquo; &mdash; <footer>James Allen</footer></blockquote>",
  },
];

export default quotes;