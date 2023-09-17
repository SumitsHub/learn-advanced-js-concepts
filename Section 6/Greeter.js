(function (global, $) {
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  var supportedLanguages = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged in",
    es: "Inicio session",
  };
  Greeter.prototype = {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },

    validate: function () {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.fullName() + "!";
    },

    greet: function (formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log() {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }

      return this;
    },

    setLang: function (lang) {
      this.validate(lang);

      this.language = lang;

      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not found";
      }
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
    },
  };

  Greeter.init = function (firstName, lastName, lanuage) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = lanuage || "en";
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.G$ = Greeter;
})(window, jQuery);
