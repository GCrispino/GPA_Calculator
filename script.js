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

function changeGPAColor(GPA_show,GPA){
	var color;

	if (GPA >= 0 && GPA <= 1)
		//red
		color = '#D00000';
	else if(GPA > 1 && GPA <= 2){
		//orange
		color = '#FF6600';
	}
	else if(GPA > 2 && GPA < 3){
		//yellow
		color = '#FFFF00';
	}
	else if (GPA >= 3 && GPA < 3.5){
		//green
		color = '#00CC33';
	}
	else{
		//greener!
		color = '#00FF33';
	}

	GPA_show.style.backgroundColor = color;
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
		changeGPAColor(GPA_show,GPA);
	}
	else{
		var buttons = document.getElementById('buttons');

		GPA_show = document.createElement('div');
		GPA_show_text = document.createElement('p');
		GPA_show_text.innerHTML = "Your GPA is " + GPA;
		GPA_show.id = 'GPA_show';
		changeGPAColor(GPA_show,GPA);
		container.removeChild(buttons);
		GPA_show.appendChild(GPA_show_text);
		container.appendChild(GPA_show);
		container.appendChild(buttons);
		container.style.height = container.offsetHeight + GPA_show.offsetHeight + parseInt(window.getComputedStyle(buttons).marginBottom) + "px";
	}

}

function addNewClass(){
	var newClass = document.createElement('div');
	var container = document.getElementById('container');
	var classContainer = document.getElementById('classContainer');
	var buttons = document.getElementById('buttons');

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
	newClass.innerHTML += ' Number of credits: <select>'
							+ '<option value="-1" selected="selected"></option>'
							+ '<option value="1">1</option>'
							+ '<option value="2">2</option>'
							+ '<option value="3">3</option>'
							+ '<option value="4">4</option>'
							+ '<option value="5">5</option>'
							+ '<option value="6">6</option>'
							+ '<option value="7">7</option>'
						   	+ '</select>';

    container.style.height = container.offsetHeight + newClass.offsetHeight + "px";
	container.removeChild(buttons);
	classContainer.appendChild(newClass);
	container.appendChild(buttons);
}