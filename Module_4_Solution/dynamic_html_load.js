window.addEventListener("load",
  function() {
    // console.log("DOM loaded!");
    var delay = 0; // Half a second delay

    for (speakStringIndex in window.speak_strings) {
      var speak_string = speak_strings[speakStringIndex];
      // debugger;

      function makeSpeakFunc(html_string) {
        return (
          function () {
            var doc = document.getElementsByTagName("body")[0].innerHTML;
            document.getElementsByTagName("body")[0].innerHTML = doc + "<p style=\"text-align: center\">" + html_string + "</p>";
          }
        );
      }

      var speakFunc = makeSpeakFunc(speak_string);

      delay += 500; // Half a second delay
      // var doc = document.getElementsByTagName("body")[0].innerHTML;
      // document.getElementsByTagName("body")[0].innerHTML = doc + "<p style=\"text-align: center\">" + speak_string + "</p>";

      setTimeout(speakFunc, delay);
    }
  }, false);
