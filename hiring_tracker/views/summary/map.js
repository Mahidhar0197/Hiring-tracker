function(doc) {
  if(doc.hiring_ticket_type)
  {
  	emit(doc.hiring_ticket_type,doc);
  }
}
