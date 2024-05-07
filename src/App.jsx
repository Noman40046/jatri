import React from 'react';
import Form from './components/Form';

/* toggle button-------- */
$(document).ready(function(){
  $('#toggle').change(function(){
    if($(this).is(':checked')){
      $('.toggle-dot').addClass('translate-x-full ');
    } else {
      $('.toggle-dot').removeClass('translate-x-full ');
    }
  });
});

$(document).ready(function(){
  $('#toggle').change(function(){
    if($(this).is(':checked')){
      $('.toggle-line').addClass(' toggle-line2 ');
    } else {
      $('.toggle-line').removeClass(' toggle-line2 ');
    }
  });
});


  $(document).ready(function(){
    $('#toggle').change(function(){
      if($(this).is(':checked')){
        $('#hiddenDiv1, #hiddenDiv2').removeClass('hidden');
      } else {
        $('#hiddenDiv1, #hiddenDiv2').addClass('hidden');
      }
    });
  });


  /* pickup--- */
  $(document).ready(function(){
    $('#toggleIcon').click(function(){
      $('#hiddenDiv3, #hiddenDiv4, #hiddenDiv5, #hiddenDiv6').toggleClass('hidden');
    });
  });

const App = () => {
  return (
    <div>
      <Form/>
      
    </div>
  );
};

export default App;