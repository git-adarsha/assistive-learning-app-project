function help() {
  const text = document.getElementById("helpInput").value.toLowerCase();
  let reply = "I am not sure. Try words like confused, stuck, or help.";

  if (text.includes("confused")) {
    reply = "It is okay to feel confused. Read the question slowly.";
  } 
  else if (text.includes("stuck")) {
    reply = "Break the task into smaller steps.";
  } 
  else if (text.includes("help")) {
    reply = "Choose one game from the list above.";
  }

  document.getElementById("helpReply").innerText = reply;
}
