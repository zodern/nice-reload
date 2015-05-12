// global
niceReload = function () {
  Reload._reload();
};

Template.body.onCreated(function () {
  var ctrlDown = false;
  var ctrlKey = 17;

  $(document).keydown(function(e)
  {
    if (e.keyCode == ctrlKey) ctrlDown = true;
  }).keyup(function(e)
  {
    if (e.keyCode == ctrlKey) ctrlDown = false;
  });

  $(document).keydown(function(e) {
    console.log(ctrlDown, e.keyCode);
    if (ctrlDown && e.keyCode === 76) {
      niceReload();
    }
  });
});