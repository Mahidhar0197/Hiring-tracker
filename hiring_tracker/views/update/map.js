function(doc) {
  if(doc.hiring_ticket_type && doc.position_status =="Active")
  {
  	emit(doc.hiring_ticket_type,doc);
  }
}
