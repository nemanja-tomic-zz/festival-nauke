(function() {
  var questions = [{
    question: "Шта су то микроорганизми?",
    choices: [
		"Тропске биљке", "Мале животиње", "Сићушна бића која се не могу видети голим оком", "Жива бића видљива голим оком"
	],
    correctAnswer: 2,
	preImages: [],
	postImages: [],
	postInfo: ""
  }, 
  {
    question: "Где се налазе микроорганизми?",
    choices: [
		"У води, земљишту и ваздуху", "У и на свим живим бићима", "У извориштима вреле воде, на вечном снегу и леду поларних подручја", "Све од наведеног"
	],
    correctAnswer: 3,
	preImages: [],
	postImages: ["assets/img/2-ploca.png", "assets/img/2-gejzir.png", "assets/img/2-nebo.png"],
	postInfo: ""
  },
  {
    question: "Шта је приказано на слици?",
    choices: [
		"Квасац", "Инсект", "Бактерија", "Ништа од наведеног"
	],
    correctAnswer: 2,
	preImages: ["assets/img/3-bakterija.png"],
	postImages: [],
	postInfo: "У дигестивном тракту човека се налази 10 пута више бактерија него ћелија у људском телу. То је у просеку око 1kg бактерија."
  },
  {
    question: "Чиме се најчешће посматрају микроорганизми?",
    choices: [
		"Специјалним наочарима", "Микроскопом"
	],
    correctAnswer: 1,
	preImages: [],
	postImages: ["assets/img/4-lupa.png", "assets/img/4-mikroskop.png", "assets/img/4-elektronski-mikroskop.png"],
	postInfo: "<p><b>Микроскоп</b> (грчки <i>micros</i>=мали и <i>scopos</i>=посматрач) је инструмент који увећава оку невидљиве или слабо видљиве објекте. Без микроскопа би милиони сићушних бића и честица који играју кључну улогу у животним процесима остале неоткривене.</p><p><b>Једноставан</b> микроскоп може да постигне увећање од <u>70 до 250 пута.</u></p><p><b>Сложенији</b> микроскопи користе два сочива, па могу да достигну увећања и <u>до 2000 пута.</u></p><p><b>Електронски</b> микроскопи користе снопове електрона уместо светлости и могу постићи увећања и до <u>неколико стотина хиљада пута.</u></p>"
  },
  {
    question: "Ко је најстарији?",
    choices: [
		"Микроорганизми", "Диносауруси", "Људи"
	],
    correctAnswer: 0,
	preImages: ["assets/img/5-bakterije.png", "assets/img/5-dino.png", "assets/img/5-beba.png"],
	postImages: [],
	postInfo: "<p>Микроорганизми су населили планету Земљу много пре диносауруса и људи.</p><p>Уколико замислимо да је еволуција Земље трајала само један дан, онда су се микроорганизми појавили око 5h, диносауруси око 22h, а људи неколико секунди пре поноћи.</p>"
  },
  {
    question: "Који је највећи копнени организам на свету?",
    choices: [
		"Слон", "Секвоја(дрво)", "Гљива"
	],
    correctAnswer: 2,
	preImages: [],
	postImages: ["assets/img/6-pecurka1.png", "assets/img/6-pecurka2.png"],
	postInfo: "<p>Прва помисао на највећи организам могао би бити нека животиња или биљка. Али тачан одговор је гљива!</p><p>Гљиве се у току раста и развића не раздвајају, чинећи тако велику мрежу преко читавих шума, а могу да расту свуда!</p><p>Пример таквих је управо Медена гљива (<i>Armillaria ostoyae</i>) која расте у шумама Националног парка у Орегону.</p>"
  },
  {
    question: "Који проценат микроорганизама изазива болести?",
    choices: [
		"95%", "5%", "50%"
	],
    correctAnswer: 1,
	preImages: [],
	postImages: ["assets/img/7-procenti.png"],
	postInfo: "<p>Само 5% микроорганизама доноси штету човеку изазивајући краткотрајне или дуготрајне болести, а већина нема негативног утицаја на човечији или животињски организам.</p>"
  },
  {
    question: "Микроорганизми могу да учествују у производњи многих производа које скоро свакодневно користимо. Шта мислиш који су то производи?",
    choices: [
		"assets/img/8-pivo.png", "assets/img/8-patike.png", "assets/img/8-bajs.png", "assets/img/8-zimnica.png"
	],
    correctAnswer: [0, 3],
	preImages: [],
	postImages: [],
	postInfo: ""
  },
  {
    question: "Зашто хлеб расте?",
    choices: [
		"Зато што га много месимо", "Зато што квасац ручка и продукује CO2", "Због брашна које користимо"
	],
    correctAnswer: 1,
	preImages: ["assets/img/9-lebac.png", "assets/img/9-lebac2.png"],
	postImages: [],
	postInfo: "Квасац, као један од основних састојака за припрему теста, има могућност да расте и размножава се у њему, а као нуспроизвод његовог метаболизма јавља се гас угљен-диоксид, због чега тесто приликом припреме и печења порасте!"
  },
  {
    question: "Како се зове човек који употребом микроорганизама ствара нове производе и користи их у својим испитивањима?",
    choices: [
		"Инспектор", "Тенисер", "Технолог"
	],
    correctAnswer: 2,
	preImages: ["assets/img/10-lab.png"],
	postImages: ["assets/img/10-pipeta.png", "assets/img/10-fax.png"],
	postInfo: ""
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
  var answeredElement = null;
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
	answeredCorrectly = false;
    displayNext();
    $('#start').hide();
	$('#finalScore').remove();
	$("#confirm").removeClass('hidden');
  });
  
  $(document).on('click', '#next', function(e){
	  if (answeredCorrectly) {
			questionCounter++;
			displayNext();
			showConfirm();
			$('#postInfo').hide();
			if (questionCounter == 6) {
				$("html").addClass("hardCoded");
				$("html").removeClass("fullScreen");
			} else {
				$("html").removeClass("hardCoded");
				$("html").addClass("fullScreen");
			}
	  }
  });
  
	$(document).on('click', '#confirm', function(e){
		var hasMultipleAnswers = Array.isArray(questions[questionCounter].correctAnswer);
		
		if (!hasMultipleAnswers) {
			var value = answeredElement.data("value");
		
			if (!questionAnswered(questionCounter))
				selections.push({question: questionCounter, value: value});
				
			if (questions[questionCounter].correctAnswer == value) {
				answeredCorrectly = true;
				toastr.success('Тачан одговор!');
				answeredElement.parent().addClass('success');
				disableAnswers();
				showNext();
				applyPostImages(questionCounter);
				applyPostInfo(questionCounter);
			} else {
				toastr.error('Погрешан одговор, покушајте поново.')
			}
		} else {
			var checkValues = $('input[name=options]:checked').map(function() {
				return $(this).data("value");
			}).get();
			
			if (!questionAnswered(questionCounter))
				selections.push({question: questionCounter, value: checkValues});
			
			answeredCorrectly = questions[questionCounter].correctAnswer.length == checkValues.length;
			for (var i = 0; i < questions[questionCounter].correctAnswer.length; i++) {
				answeredCorrectly &= checkValues.indexOf(questions[questionCounter].correctAnswer[i]) != -1
			}
			if (answeredCorrectly) {
				toastr.success('Тачан одговор!');
				disableAnswers();
				showNext();
				applyPostImages(questionCounter);
				applyPostInfo(questionCounter);
			} else {
				toastr.error('Погрешан одговор, покушајте поново.')
			}
		}
	});
  
  $(document).on('click', '.answers', function(e){
	answeredElement = $(this).children(":input");
  });
  
  function disableAnswers() {
	  $(".answers").addClass('disabled');
  }
  
  function questionAnswered(questionIndex) {
	for (var i = 0; i < selections.length; i++) {
		if (selections[i].question == questionIndex)
			return true;
	}
	return false;
  }
  
  function showNext() {
	  $("#confirm").addClass('hidden');
	  $("#next").removeClass('hidden');
  }
  
  function showConfirm() {
	  $("#confirm").removeClass('hidden');
	  $("#next").addClass('hidden');
  }
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2 class="questionHeader">' + (index + 1) + '. ' + questions[index].question + ' </h2>');
	qElement.append(header);
	
	var postImages = $('<div id="postImages"></div>');
    qElement.append(postImages);
	
	var preImages = $('<div id="preImages"></div>');
	applyPreImages(index, preImages);
	qElement.append(preImages);
	
    var answers = createAnswers(index);
    qElement.append(answers);
	
    return qElement;
  }
  
  // Creates a list of the answer choices as button inputs
  function createAnswers(index) {
	var hasMultipleAnswers = Array.isArray(questions[index].correctAnswer);
    var buttonList = $('<div class="btn-group" data-toggle="buttons">');
	if (!hasMultipleAnswers) {
		buttonList.addClass("btn-group-vertical");
	} else {
		buttonList.addClass("btn-group-horizontal");
	}
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<label class="btn btn-primary answers">');

	  if (hasMultipleAnswers) {
		item.css("margin-right", "10px")
		input = '<input type="checkbox" name="options" id="option'+i+'" autocomplete="off" data-value=' + i + ' />' + '<img class="img" src="'+questions[index].choices[i]+'">';
	  } else {
		input = '<input type="radio" name="options" id="option'+i+'" autocomplete="off" data-value=' + i + ' />' + questions[index].choices[i];  
	  }
	  
	  item.append(input);
      buttonList.append(item);
    }
	
    return buttonList;
  }
  
  function applyPreImages(index, element) {
	  for (var i = 0; i < questions[index].preImages.length; i++) {
		  var item = $('<img class="img-responsive" src="'+questions[index].preImages[i]+'" />');
		  element.append(item);
	  }
  }
  
  function applyPostImages(index) {
	  var element = $('#postImages');
	  
	  for (var i = 0; i < questions[index].postImages.length; i++) {
		  var item = $('<img class="img-responsive" src="'+questions[index].postImages[i]+'" />');
		  element.append(item);
	  }
  }
  
  function applyPostInfo(index) {
	  if (questions[index].postInfo == "")
		  return;
	  $('#postInfo').html(questions[index].postInfo);
	  $('#postInfo').show();
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
	$("#confirm").addClass('hidden');
    var score = $('<h1>',{id: 'finalScore'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
		if (Array.isArray(questions[i].correctAnswer)) {
			var correct = questions[i].correctAnswer.length == selections[i].value.length;
			for (var j = 0; j < questions[i].correctAnswer.length; j++) {
				correct &= selections[i].value.indexOf(questions[i].correctAnswer[j]) != -1
			}
			if (correct)
				numCorrect++;
		} else {
			if (selections[i].value === questions[i].correctAnswer) {
				numCorrect++;
			}
		}
    }
    
    score.append('Имате ' + numCorrect + ' тачних одговора од укупно ' +
                 questions.length + ' питања (' + (numCorrect * 100) / questions.length + '%)!');
    return score;
  }
})();