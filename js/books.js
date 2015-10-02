$(function () {
  // Grab the template script
  var theTemplateScript = $("#book-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "entries": [
      {
        "title": "The Heart Goes Last",
        "author": "Margaret Atwood",
        "bookCode": "heart",
        "imgAlt": "The Heart Goes Last book cover, depicting a man and a woman in prison-orange suits holding hands.",
        "bookUrl": "http://www.denverpost.com/books/ci_28873826/review-heart-goes-last-by-margaret-atwood-dystopian",
        "teaser": "In \"The Heart Goes Last,\" dystopia virtuoso Margaret Atwood turns her effortless world-building, deft humor and grim commentary on the depths of human hubris to the prison industrial complex, love and free will."
      },
      {
        "title": "Bright Lines",
        "author": "Tanwi Nandini Islam",
        "bookCode": "bright-lines",
        "imgAlt": "Bright Lines book cover with an illustration of a silhouetted young girl with long hair riding a bicycle against bold lines radiating out from behind her in all colors of the spectrum.",
        "bookUrl": "http://www.denverpost.com/books/ci_28597426/review-bright-lines-by-tanwi-nandini-islam-brooklyn",
        "teaser": "A Brooklyn-by-way-of-Bangladesh \"Royal Tenenbaums.\" A pot-tinged, PTSD Muslim \"Sesame Street.\" With sex. Hallucinations, hijabs and handlebars on the always-busy Atlantic Avenue."
      },
      {
        "title": "The Dark Forest",
        "author": "Cixin Liu",
        "bookCode": "dark-forest",
        "imgAlt": "The Dark Forest book cover with a foreboding image of a planet in space surrounded by mysterious shapes.",
        "bookUrl": "http://www.denverpost.com/books/ci_28597429/review-dark-forest-gives-humanity-400-year-challenge",
        "teaser": "\"The Dark Forest,\" the second installment in Chinese author Cixin Liu's \"Three-Body\" series, depicts a humanity trapped in indecision and argument over how to receive an invading alien civilization."
      },
      {
        "title": "Confession of the Lioness",
        "author": "Mia Couto",
        "bookCode": "confession",
        "imgAlt": "Confession of the Lioness book cover with an illustration of a snarling lion framing a photo of a young woman in a rural, hilly setting.",
        "bookUrl": "http://www.denverpost.com/lifestyles/ci_28460804/confession-lioness-review-magical-realism-mozambique",
        "teaser": "In Mia Couto's \"Confession of the Lioness,\" set in a put-upon Mozambican village, young Mariamar has had it rough: She has a despotic father, a detached mother, and her sister has just been killed by a lion. She wants out."
      },
      {
        "title": "The Water Knife",
        "author": "Paolo Bacigalupi",
        "bookCode": "water-knife",
        "imgAlt": "The Water Knife book cover with reflective blue cyberpunk-style lettering on a black background.",
        "bookUrl": "http://www.denverpost.com/entertainment/ci_28254530/water-knife-review-waters-fighting-over",
        "teaser": "It's the dark, action-packed story of a hired gun getting tangled up with a scrappy young girl and a semi-idealistic journalist in the catastrophically water-starved American Southwest of the not-so-distant future."
      },
      {
        "title": "The Tusk That Did The Damage",
        "author": "Tania James",
        "bookCode": "tusk",
        "imgAlt": "The Tusk That Did the Damage book cover with an elephant staring straight out at the viewer.",
        "bookUrl": "http://www.denverpost.com/books/ci_27653826/review-tusk-that-did-damage-by-tania-james",
        "teaser": "There is a myth-like inevitability about \"The Tusk That Did The Damage,\" which starts with Tania James' timeless first line: \"He would come to be called the Gravedigger.\""
      },
      {
        "title": "Disgruntled",
        "author": "Asali Solomon",
        "bookCode": "disgruntled",
        "imgAlt": "Disgruntled book cover with a young Black woman's face partially concealed by three stripes of color: pink, yellowish-green and light blue.",
        "bookUrl": "http://www.denverpost.com/books/ci_27421661/asali-solomons-debut-novel-disgruntled-tackles-youth-and",
        "teaser": "Kenya Curtis isn't yet disgruntled as a Philadelphia public school third-grader in 1984. But \"Disgruntled\" — the title of Asali Solomon's debut novel — is a fair description of everyone who's close to Kenya."
      },
    ]
};

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
