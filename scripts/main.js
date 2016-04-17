(function() {
  var questions = [{
    question: "Шта су то микроорганизми?",
    choices: [
		"Тропске биљке", "Мале животиње", "Сићушна бића која се не могу видети голим оком", "Жива бића видљива голим оком"
	],
    correctAnswer: 2
  }, 
  {
    question: "Где се налазе микроорганизми?",
    choices: [
		"У води, земљишту и ваздуху", "У и на свим живим бићима", "У извориштима вреле воде, на вечном снегу и леду поларних подручја", "Све од наведеног"
	],
    correctAnswer: 3
  },
  {
    question: "Шта је приказано на слици?",
    choices: [
		"Квасац", "Инсект", "Бактерија", "Ништа од наведеног"
	],
    correctAnswer: 2
  },
  {
    question: "Чиме се најчешће посматрају микроорганизми?",
    choices: [
		"Специјалним наочарима", "Микроскопом"
	],
    correctAnswer: 1
  },
  {
    question: "Ко је најстарији?",
    choices: [
		"Микроорганизми", "Диносауруси", "Људи"
	],
    correctAnswer: 0
  },
  {
    question: "Који је највећи копнени организам на свету?",
    choices: [
		"Слон", "Секвоја(дрво)", "Гљива"
	],
    correctAnswer: 2
  },
  {
    question: "Који проценат микроорганизама изазива болести?",
    choices: [
		"95%", "5%", "50%"
	],
    correctAnswer: 1
  },
  {
    question: "Микроорганизми могу да учествују у производњи многих производа које скоро свакодневно користимо. Шта мислиш који су то производи?",
    choices: [
		"Слика1", "Слика2", "Слика3", "Слика4"
	],
    correctAnswer: 3 //multiple in this case
  },
  {
    question: "Зашто хлеб расте?",
    choices: [
		"Зато што га много месимо", "Зато што квасац ручка и продукује CO2", "Због брашна које користимо"
	],
    correctAnswer: 1
  },
  {
    question: "Како се зове човек који употребом микроорганизама ствара нове производе и користи их у својим испитивањима?",
    choices: [
		"Инспектор", "Тенисер", "Технолог"
	],
    correctAnswer: 2
  }];
  
  toastr.options = {
	"closeButton": false,
	"debug": false,
	"newestOnTop": false,
	"progressBar": false,
	"positionClass": "toast-bottom-center",
	"preventDuplicates": false,
	"onclick": null,
	"showDuration": "150",
	"hideDuration": "500",
	"timeOut": "2000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
  }
  
  var answeredCorrectly = false;
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
	$(document).on('click', '#next', function(e){
		if (answeredCorrectly)
			displayNext();
	});
  
  $(document).on('click', '.answers', function(e){
	var button = $(this);
	var value = button.data("value");
	
	if (!questionAnswered(questionCounter))
		selections.push({question: questionCounter, value: value});
		
	if (questions[questionCounter].correctAnswer == value) {
		answeredCorrectly = true;
		questionCounter++;
		toastr.success('Тачан одговор!');
		button.addClass('success');
	} else {
		toastr.error('Погрешан одговор, покушајте поново.')
	}
  });
  
  function questionAnswered(questionIndex) {
	for (var i = 0; i < selections.length; i++) {
		if (selections[i].question == questionIndex)
			return true;
	}
	return false;
  }
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Питање број ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var answers = createAnswers(index);
    qElement.append(answers);
	
    return qElement;
  }
  
  // Creates a list of the answer choices as button inputs
  function createAnswers(index) {
    var buttonList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
	  if (Array.isArray(questions[index].correctAnswer)) {
		input = '<button type="button" name="answer" class="answers btn btn-secondary" data-value=' + i + '>' + questions[index].choices[i] +'</button>';
	  } else {
		input = '<button type="button" name="answer" class="answers btn btn-secondary" data-value=' + i + '>' + questions[index].choices[i] +'</button>';
	  }      
      item.append(input);
      buttonList.append(item);
    }
    return buttonList;
  }
  
  // Displays next requested element
  function displayNext() {
	answeredCorrectly = false;
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i].value === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('Имате ' + numCorrect + ' тачних одговора од укупно ' +
                 questions.length + ' питања (' + (numCorrect * 100) / questions.length + '%)!');
    return score;
  }
})();