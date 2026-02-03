function submitApplication(e) {
  e.preventDefault(); // You can ignore this; prevents the default form submission!

  // TODO: Alert the user of the job that they applied for!
  jobs = document.getElementsByName("job");
  for (const element of jobs) {
    if (element.checked) {
      alert("Thank you for applying to be a " + element.value);
      return;
    }
  }
  alert("Please select a job!");
}
