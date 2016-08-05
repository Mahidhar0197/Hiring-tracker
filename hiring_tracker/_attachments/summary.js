db = $.couch.db("hiring_tracker");

function summary() {
$("#summary > tbody").empty();
$("#summary > tbody").append('<tr>'+
	'<th>Hiring Ticket type</th>'+
	'<th>Hiring Ticket No</th>'+
	'<th>Number of positions</th>'+
	'<th>Hiring Ticket open date</th>'+
	'<th>Hiring Ticket close date</th>'+
	'<th>RR Number</th>'+ 
	'<th>RR Open date</th>'+
	'<th>RR Close date</th>'+
	'<th>Hiring Manager</th>'+
	'<th>Cost Center</th>'+
	'<th>Role</th>'+
	'<th>Band</th>'+
	'<th>Hiring Type</th>'+
	'<th>Position status</th>'+
	'<th>Segment</th>'+
  '</tr>');

//$("#myTable > tbody").append("<tr><td>row content</td></tr>");
db.view("hiring_tracker/summary",{success: function(data) {
    for (i in data.rows) {
      var temp = data.rows[i].value.hiring_ticket_type;
      var temp1 = data.rows[i].value._id;
       $("#summary > tbody").append('<tr id="' + temp1 
							 + '" class="summaryrow">'
                             +'<td>'+temp+'</td>'
                             +'<td>'+data.rows[i].value.hiring_ticket_no
                             +'</td><td>'+data.rows[i].value.number_of_postions+'</td>');
 
      temp1 = "#"+temp1;
      if(temp=="Employee"){
      	$(temp1).append('<td>'+data.rows[i].value.hi_open_date+'</td>'+
      						 '<td>'+data.rows[i].value.hi_closed_date+'</td>'+
      						 '<td>empty</td>'+
      						 '<td>empty</td>'+
      						 '<td>empty</td>');
      }
      else
      {
      	$(temp1).append('<td>empty</td>'+
      						 '<td>empty</td>'+
      						 '<td>'+data.rows[i].value.rr_number+'</td>'+
      						 '<td>'+data.rows[i].value.rr_open_date+'</td>'+
      						 '<td>'+data.rows[i].value.rr_closed_date+'</td>');
      }
        $(temp1).append('<td>'+data.rows[i].value.hiring_manager    
                             +'</td><td>'+data.rows[i].value.cost_center        
                             +'</td><td>'+data.rows[i].value.role               
                             +'</td><td>'+data.rows[i].value.band               
                             +'</td><td>'+data.rows[i].value.hiring_type         
                             +'</td><td>'+data.rows[i].value.position_status     
                             +'</td><td>'+data.rows[i].value.segment            
                              +'</td></tr>');
                             
    }
}
});
}

$(document).ready(function() {
  summary();
  $("#style").append(' th,td{ min-width: 200px; text-align: center;}'+
    '.summary_div{ overflow-x: scroll; }'+
    'th{padding:20px 7px; font-size:15px; color:#444; background:#66C2E0;}'+
    'td{padding:5px 10px; height:35px;}');
});