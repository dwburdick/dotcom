$(function () {
  // Grab the template script
  var theTemplateScript = $("#book-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "entries": [
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
        "title": "The Dark Forest",
        "author": "Cixin Liu",
        "bookCode": "dark-forest",
        "maxWidth": "800",
        "imgAlt": "The Dark Forest book cover with a foreboding image of a planet in space surrounded by mysterious shapes.",
        "bookUrl": "http://www.denverpost.com/books/ci_28597429/review-dark-forest-gives-humanity-400-year-challenge",
        "teaser": "\"The Dark Forest,\" the second installment in Chinese author Cixin Liu's \"Three-Body\" series, depicts a humanity trapped in indecision and argument over how to receive an invading alien civilization."
      },
      {
        "title": "Bright Lines",
        "author": "Tanwi Nandini Islam",
        "bookCode": "bright-lines",
        "maxWidth": "665",
        "imgAlt": "Bright Lines book cover with an illustration of a silhouetted young girl with long hair riding a bicycle against bold lines radiating out from behind her in all colors of the spectrum.",
        "bookUrl": "http://www.denverpost.com/books/ci_28597426/review-bright-lines-by-tanwi-nandini-islam-brooklyn",
        "teaser": "A Brooklyn-by-way-of-Bangladesh \"Royal Tenenbaums.\" A pot-tinged, PTSD Muslim \"Sesame Street.\" With sex. Hallucinations, hijabs and handlebars on the always-busy Atlantic Avenue."
      },
      {
        "title": "Bright Lines",
        "author": "Tanwi Nandini Islam",
        "bookCode": "bright-lines",
        "maxWidth": "665",
        "imgAlt": "Bright Lines book cover with an illustration of a silhouetted young girl with long hair riding a bicycle against bold lines radiating out from behind her in all colors of the spectrum.",
        "bookUrl": "http://www.denverpost.com/books/ci_28597426/review-bright-lines-by-tanwi-nandini-islam-brooklyn",
        "teaser": "A Brooklyn-by-way-of-Bangladesh \"Royal Tenenbaums.\" A pot-tinged, PTSD Muslim \"Sesame Street.\" With sex. Hallucinations, hijabs and handlebars on the always-busy Atlantic Avenue."
      },
      {
        "title": "The Dark Forest",
        "author": "Cixin Liu",
        "bookCode": "dark-forest",
        "maxWidth": "800",
        "imgAlt": "The Dark Forest book cover with a foreboding image of a planet in space surrounded by mysterious shapes.",
        "bookUrl": "http://www.denverpost.com/books/ci_28597429/review-dark-forest-gives-humanity-400-year-challenge",
        "teaser": "\"The Dark Forest,\" the second installment in Chinese author Cixin Liu's \"Three-Body\" series, depicts a humanity trapped in indecision and argument over how to receive an invading alien civilization."
      },
    ]
};

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
