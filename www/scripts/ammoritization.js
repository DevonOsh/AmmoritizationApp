function displayAnnualCost() {
	var principle = document.getElementById("principle").value;
	var interestPerc = document.getElementById("interest").value;
	var years = document.getElementById("years").value;
	var interest = interestPerc / 100;

	var annualCost;

	console.log(principle + " " + interest + " " + years);

	annualCost = principle * (1 + interest * years);

	document.getElementById("annualCost").innerHTML = annualCost.toLocaleString();
}