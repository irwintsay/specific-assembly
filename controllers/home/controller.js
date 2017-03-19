let controller        = {};

controller.index      = (req, res) => {
  res.render('home/index', res.pageInfo);
};

module.exports        = controller;