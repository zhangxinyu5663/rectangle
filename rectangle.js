/* global Rectangle: true */
/* global valid: true */
$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area'),
      $widthValidation=$('#width-validation'),
      $heightValidation=$('#height-validation');

  $width.focusout(function(){
    //var w=$width.val();
    var result=valid($width.val());
    if(!result.isOK){
      $widthValidation.html('宽度'+result.reason);
      $width.select();
      return;
    }else{
      $widthValidation.html('');
    }
  });

  $height.focusout(function(){
    var result=valid($height.val());
    if(!result.isOK){
      $heightValidation.html('高度'+result.reason);
      $height.select();
      return;
    }else{
      $heightValidation.html('');
    }
  });

  $btnCal.click(function(){
    var w=$width.val(),
        h=$height.val();
    
    var validWidth=valid(w),
        validHeight=valid(h);
    if(!validWidth.isOK){
      $widthValidation.html('宽度'+validWidth.reason);
      $width.select();
    }

    if(!validHeight.isOK){
      $heightValidation.html('高度'+validHeight.reason);
      $height.select();
    }

    var r=new Rectangle(w,h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});

