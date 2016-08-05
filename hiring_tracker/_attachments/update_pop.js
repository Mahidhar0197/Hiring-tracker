function Add_record(){
	var add_record;
	add_record='Round 1<select name="Round_1" id="Round_1">'+
'<option name="Telephonic">Telephonic</option>'+
'<option name="Technical F~F">Technical F~F</option>'+
'<option name="Technical F~F (Skype)">Technical F~F (Skype)</option>'+
'<option name="Manager round">Manager round</option>'+
'<option name="Final Round">Final Round</option></select>'+
'Date of Scheduled<input type="date" name="date_of_scheduled">'+
'Panel name<input type="text" name="panel_name">'+
'Status<select name="status" id="mySelect">'+
'<option name="In progress" >In progress</option>'+
'<option name=" Shortlisted"> Shortlisted</option>'+
'<option name="HOLD">HOLD</option>'+
'<option name="Rejected">Rejected</option>'+
'</select>'+
'Comments<input type="text" name="comments">'+
'<div id="hired"></div>';
$("#addrecord").empty();	
$("#addrecord").append(add_record);

}
$(document).ready(function() {
    $(document).on('change','#Round_1',function(){
		var element = document.getElementById("Round_1");
		var option  = element.options[element.selectedIndex].text;
		if(option =="Final Round")
		{
			$("#mySelect").append('<option name="Hired">Hired</option>');
		}
		else
		{
			$("#mySelect option[name='Hired']").remove();	
		}
    	
    });
    $(document).on('change','#mySelect',function(){
		var element = document.getElementById("mySelect");
		var option  = element.options[element.selectedIndex].text;
    	if(option=="Hired")
    	{
    	   var temp='<li>Offer Roll Outdate</li>'+
					'<input type="date" ><br>'+
					'<li>Offer Status</li>'+
					'<select name="Offer Status">'+
					'<option name="Accepted">Accepted</option>'+
					'<option name="Turned Down">Turned Down</option></select>'+
					'<br>'+
					'<li>Onboarding Date</li>'+
					'<input type="date" ><br>'+
					'<li>Additional comments</li>'+
					'<input type="text" name="Additional comments" placeholder="comment here">'+
					'<br>';
		    $("#hired").append(temp);			
    	}
    	else
    	{
    		$("#hired").empty();
    	}
    });
});
