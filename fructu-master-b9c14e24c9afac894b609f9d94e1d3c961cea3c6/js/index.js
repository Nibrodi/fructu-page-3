$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100000000,
    values: [ 11000000, 65000000 ],
    slide: function( event, ui ) {
      $( "#amount-one" ).val( ui.values[ 0 ] + " руб." );
      $( "#amount-two" ).val( ui.values[ 1 ] + " руб." );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );



$( function() {
  $( "#dialog" ).dialog({
    autoOpen: false,
    show: {
      // effect: "blind",
      // duration: 1000
    },
    hide: {
      // effect: "explode",
      // duration: 1000
    }
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });
} );


$(document).ready(function() {
  $('.metro-select').select2({
    placeholder: "Ближайшие станции метро",
    allowClear: true
  });
});

$(document).ready(function() {
  $('.store-select').select2({
    placeholder: "Выберите магазин из списка",
    allowClear: true
  });
});

$(document).ready(function() {
  $('.bar-select').select2({
    placeholder: "Выберите заведение из списка",
    allowClear: true
  });
});

$(document).ready(function() {
  $('.service-select').select2({
    placeholder: "Выберите заведение из списка",
    allowClear: true
  });
});


$(function(){
  $('#agree-child').click(function() {
      if(!$(this).is(':checked'))
      $('.age-child').css('display', 'none');
      else
      $('.age-child').css('display', 'block');
  });
});


$( document ).ready(function() {
	$('#add-child').on('click', function(){
  	$(this).before($(".flex-age:last").clone());
  });
});
