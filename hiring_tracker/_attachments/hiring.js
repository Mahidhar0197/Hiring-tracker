db = $.couch.db("hiring_tracker");

function Change(){
    $(document).on('change','#hiring_ticket_type',function(){
		var option = $("#hiring_ticket_type :selected").text();
		var temp;
		if(option =="Employee")
		{
			$("#ec").empty();
			temp='<li>Hiring Ticket open date:<br></li>'+
			         '<input type="date" id="hi_open_date"><br>'+
					 '<li>Hiring Ticket closed date:<br></li>'+
					 '<input type="date" id="hi_closed_date"><br>';

			$("#ec").append(temp);
		}
		else if(option=="--Hiring Ticket Type--")
			$("#ec").empty();
		else
		{
			$("#ec").empty();
			temp='<li>RR Number<br></li>'+
				 '<input type="text" id="rr_number" placeholder="Enter RR no"><br>'+
				 '<li>RR Open date<br></li>'+
				 '<input type="date" id="rr_open_date"><br>'+
				 '<li>RR Closed date<br></li>'+
				 '<input type="date" id="rr_closed_date"><br>';
			$("#ec").append(temp);
		}
    	
    });
}

function builddocfromform(doc) {
if (!doc) {
doc = new Object;
}
var option = $("#hiring_ticket_type :selected").text();

doc.hiring_ticket_type = option;
doc.hiring_ticket_no   = $("#hiring_ticket_no").val();
doc.number_of_postions = $("#number").val(); 

if(option =="Employee")
{
	doc.hi_open_date = $("#hi_open_date").val();
	doc.hi_closed_date = $("#hi_closed_date").val();
}
else
{
	doc.rr_number = $("#rr_number").val();
	doc.rr_open_date = $("#rr_open_date").val();
	doc.rr_closed_date = $("#rr_closed_date").val();
}

doc.hiring_manager     = $("#hiring_manager").val();
doc.cost_center        = $("#cost_center").val();
doc.role               = $("#role").val();
doc.band               = $("#band").val();
doc.hiring_type        = $("#hiring_type :selected").text(); 
doc.position_status    = $("#position_status :selected").text(); 
doc.segment            = $("#segment").val();


return(doc);
}

$(document).ready(function() {
	Change();
	
	$(document).on('click', '#add_record', function(){
    db.saveDoc(builddocfromform(null), {
        success: function() {
        },
    });
    return false;
    });
});

	