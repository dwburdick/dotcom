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
        "title": "Bright Lines",
        "author": "Tanwi Nandini Islam",
        "bookCode": "bright-lines",
        "imgAlt": "Bright Lines book cover with an illustration of a silhouetted young girl with long hair riding a bicycle against bold lines radiating out from behind her in all colors of the spectrum.",
        "bookUrl": "http://www.denverpost.com/books/ci_28597426/review-bright-lines-by-tanwi-nandini-islam-brooklyn",
        "teaser": "A Brooklyn-by-way-of-Bangladesh \"Royal Tenenbaums.\" A pot-tinged, PTSD Muslim \"Sesame Street.\" With sex. Hallucinations, hijabs and handlebars on the always-busy Atlantic Avenue."
      },
    ]
};

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
