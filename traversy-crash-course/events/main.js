console.log('JS Loaded!');

$(document).ready(function(){

  // CLICK

  // $('#btn1').click(function(){
  //   alert('Button Clicked!');
  // });

  // $('#btn2').on('click', function(){
  //   alert('Button clicked again!');
  // })

  // $('#btn1').on('click', function(){
  //   // $('.para1').hide();
  //   $('.para1').toggle();
  // });
  //
  // $('#btn2').on('click', function(){
  //   $('.para1').show();
  // });

  // DOUBLE CLICK

  // $('#btn1').dblclick(function(){
  //   $('.para1').toggle();
  // });

  // HOVER

  // $('#btn1').hover(function(){
  //   $('.para1').toggle();
  // });

  // MOUSE ENTER / LEAVE / MOVE / UP / DOWN

  // $('#btn1').mouseenter(function(){
  //   $('.para1').toggle();
  // });

  // $('#btn1').mouseleave(function(){
  //   $('.para1').toggle();
  // });

  // $('#btn1').mousemove(function(){
  //   $('.para1').toggle();
  // });

  // $('#btn1').mouseup(function(){
  //   $('.para1').toggle();
  // });
  //
  // $('#btn1').mousedown(function(){
  //   $('.para1').toggle();
  // });

  // FINDING OUT ELEMENTS ON THE DOM

  // $('#btn1').click(function(e){
    //console.log(e);
    //alert(e.currentTarget.id);
    // alert(e.currentTarget.innerHTML);
    // alert(e.currentTarget.outerHTML);
    // alert(e.currentTarget.className);
  // });

  // FINDING OUT COORDINATES

  // $(document).on('mousemove', function(e){
  //   console.log('Coords: Y: '+e.clientY+"
  //       X: "+e.clientX);
  // });

  // FORMS - FOCUS

  // $('input').focus(function(){
  //   $(this).css('background', 'pink');
  // });
  //
  // $('input').blur(function(){
  //   $(this).css('background', '#ffffff');
  // });

  // CHANGE

  $('select#gender').change(function(){
    alert('changed!');
  });

  // SUBMIT

  $('#form').submit(function(e){
    e.preventDefault();
    var name = $('input#name').val();
    console.log(name);
  });








});
