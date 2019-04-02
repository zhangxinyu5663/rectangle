/* global Rectangle: true */
$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area'),
      $form=$('form');

 
  $form.submit(function(e){
    e.preventDefault();  //阻止表单提交时刷新
    var w=$width.val(),
        h=$height.val();
   
    var r=new Rectangle(w,h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});

