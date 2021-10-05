// ADDING NEW TASK



$('.Addbtn').click(function(){
//e.preventDefault();
var input = $('#task').val();
const span = '<span>'+input+'</span>';

 $('ul').append('<li>' + span + '<button class="delete" type="button" name="button">DELETE</button>' + '</li>');

 $('input').val('');
});

// list =   $('ul');

//if (e.target.className ='Addbtn')


//console.log(list);
//DELETING TASKS
$('button.delete').click(function(e) {
  var list = $('ul');
  if(e.target.className ='delete'){

    const list = e.target.parentElement;
    list.remove('li');
  }

});
