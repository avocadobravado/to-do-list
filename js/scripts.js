// Back end logic
function toDo (item) {
  this.itemInput = item;
}

// Front end logic
$(function() {
  $("form#toDoForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var newToDo = new toDo (userInput);

    $("ol#displayToDo").append('<li>' + newToDo.itemInput + '</li>');
    $("input#userInput").val("");

    $("ol#displayToDo").on("click","li", function(){
      $(this).fadeOut("slow");
    });
  });
});
