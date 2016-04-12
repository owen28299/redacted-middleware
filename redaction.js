function redaction(replacement){
  return function(req,res,next){

    for (var prop in replacement){
      if (req.body.message.indexOf(prop) !== -1){
        var phrase = new RegExp(prop, 'gi');
        req.body.message = req.body.message.replace(phrase, replacement[prop]);
        // could also use: req.body.message = req.body.message.replace(/`${key}`/gi, replacement[prop]);
      }
    }

    next();

  };

}

module.exports = redaction;