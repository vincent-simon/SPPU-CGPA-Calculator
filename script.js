function calculateCGPA() {
  // Fetching user inputs
  const fe_sgpa = parseFloat(document.getElementById("fe_sgpa").value);
  const se_sgpa = parseFloat(document.getElementById("se_sgpa").value);
  const te_sgpa = parseFloat(document.getElementById("te_sgpa").value);
  const be_sgpa = parseFloat(document.getElementById("be_sgpa").value);

  // Defining credits
  const fe_credits = 44;
  const se_credits = 44;
  const te_credits = 42;
  const be_credits = 40;

  // Calculate total credits
  const total_credits = fe_credits + se_credits + te_credits + be_credits;

  // Calculate CGPA
  const cgpa = ((fe_sgpa * fe_credits) + (se_sgpa * se_credits) + (te_sgpa * te_credits) + (be_sgpa * be_credits)) / total_credits;

  // Display result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p style="font-size: 24px;">CGPA: ${cgpa.toFixed(2)}</p>`;

}

