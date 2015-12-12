function calculateGPA() {
	var classes = document.getElementsByClassName('classes');
	var total,totalCredits = 0,sumGrades = 0;

	for (var i = 0;i < classes.length;i++){
		var grade = classes[i].childNodes[1].value;
		var nCredits = classes[i].childNodes[3].value;

		sumGrades += grade * nCredits;
		totalCredits += parseInt(nCredits);
	}

	total = sumGrades / totalCredits;
	total = total.toFixed(2);

	console.log(total);

}