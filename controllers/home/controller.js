let controller        = {};

controller.index      = (req, res) => {
  res.render('home/index', req.pageInfo);
};

module.exports        = controller;