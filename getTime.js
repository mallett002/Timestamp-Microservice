// Used to take the user input
// valid date is one that can be parsed by new Date(timeString)

function getTime(date) {
  if (typeof date === 'string') {
    
    const regex = /\d{4}-\d{2}-\d{2}/;
    
    if (regex.test(date)) {
        return {
          unix: date.getTime(),
          utc: date.toUTCString()
        }
    }
    
  }  else if (!date) {
    
    const newDate = new Date(); 
          
    return {
      unix: newDate.getTime(),
      utc: newDate.toUTCString()
    };
    
  } 
  
  return {"error" : "Invalid Date" };
  
}

module.exports = getTime;