$(document).ready(function(){
  $("#get_pos").click(function(){
    var scrol_pos = $("#small_div").scrollTop();
    $("#inst_text").html("<p><b><font face='Georgia'>Your current scroll position is:</font> <font color='#FF0000'>" + scrol_pos + "</font><font face='Georgia'> px.</font></b></p>" );
  });
});