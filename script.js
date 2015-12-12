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
	total = total.toFixed(2);

	if (isNaN(total))
		total == 0;

	return total;
}

function calculateGPA(){
	var GPA = getGPA();
	var GPA_show = document.createElement('div');
	var GPA_show_text = document.createElement('p');
	var container = document.getElementById('container');

	// GPA_show = document.getElementById('GPA_show');
	// if (GPA_show){
	// 	GPA_show_text = GPA_show.childNodes[0].innerHTML;
	// 	GPA_show_text = "Your GPA is " + GPA;
	// }
	// else{
	// 	GPA_show = document.createElement('div');
	// 	GPA_show_text = document.createElement('p');
	// }

	GPA_show.id = 'GPA_show';
	GPA_show_text.innerHTML = "Your GPA is " + GPA;
	GPA_show.appendChild(GPA_show_text);

	container.appendChild(GPA_show);

	console.log(GPA);
}