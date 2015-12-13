var nClasses = 5;

function getGPA() {
	var classes = document.getElementsByClassName('classes');
	var total = 0,totalCredits = 0,sumGrades = 0;

	for (var i = 0;i < classes.length;i++){
		var grade = classes[i].childNodes[1].value;
		var nCredits = classes[i].childNodes[3].value;

		if (grade == -1 || nCredits == -1)
			continue;

		sumGrades += grade * nCredits;
		totalCredits += parseInt(nCredits);
	}

	total = sumGrades / totalCredits;

	if (isNaN(total))
		total = 0;

	total = total.toFixed(2);

	return total;
}

function calculateGPA(){
	var GPA = getGPA();
	var GPA_show;
	var GPA_show_text;
	var container = document.getElementById('container');

	GPA_show = document.getElementById('GPA_show');
	if (GPA_show){
		GPA_show_text = GPA_show.childNodes[0];
		GPA_show_text.innerHTML = "Your GPA is " + GPA;
	}
	else{
		GPA_show = document.createElement('div');
		GPA_show_text = document.createElement('p');
		GPA_show_text.innerHTML = "Your GPA is " + GPA;
		GPA_show.id = 'GPA_show';
		GPA_show.appendChild(GPA_show_text);
		container.appendChild(GPA_show);
	}

}

function addNewClass(){
	var newClass = document.createElement('div');
	var container = document.getElementById('container');

	nClasses += 1;

	newClass.classList.add('classes');
	newClass.innerHTML = "Class " + nClasses + ": \n";
	newClass.innerHTML += 'Grade: <select> '
								+ '<option value="-1" selected="selected"></option>'
								+ '<option value="4">A</option>'
								+ '<option value="3">B</option>'
								+ '<option value="2">C</option>'
								+ '<option value="1">D</option>'
								+ '<option value="0">F</option>'
							+ '</select>';
	newClass.innerHTML += '<select>'
							+ '<option value="-1" selected="selected"></option>'
							+ '<option value="1">1</option>'
							+ '<option value="2">2</option>'
							+ '<option value="3">3</option>'
							+ '<option value="4">4</option>'
							+ '<option value="5">5</option>'
							+ '<option value="6">6</option>'
							+ '<option value="7">7</option>'
						   	+ '</select>';

	container.appendChild(newClass);
}