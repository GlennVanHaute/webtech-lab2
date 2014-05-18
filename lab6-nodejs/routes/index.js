
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Glenn Van Haute' });
};

exports.ask = function(req, res){
	res.render('ask', {title: 'Ask us a question!' });
};

exports.allQuestions = function(req, res){
	res.render('allQuestions', {title: 'All the questions!' });
};
