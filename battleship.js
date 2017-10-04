$(() => {
  // Select table containing the battleground
    const battleground = $('#battleground');
    var ctr = 0; 
    var randomleng = 0; //defining ship by length instead of defining a ship.
    var shipcrossing = false;
  // Build 10 x 10 grid for battleground
    for (let row = 0; row < 10; row++) {
        // Create table row
        const tr = $('<tr>');
        for (let column = 0; column < 10; column++) {
            if (randomleng === 0) {
                randomleng = Math.floor((Math.random() * 6));
                $('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
            } else {
                ctr = randomleng;
                if (column + ctr < 10) {

                    for (let key = columns; key < 10 && key < column + ctr; key++) {
                        if ($('<tr>').hasClass('water')){
                            shipscrossed = true;
                            columns = 10;
                        }
                    }

                    if (shipscrossed === false) {
                        $('<td>').addClass('ship').attr('data-r', row).attr('data-c', column).appendTo(tr);
                        $('<td>').addClass('water').attr('data-r', row).attr('data-c', column+1).appendTo(tr);
                    }

                    //$('<tr>').hasClass('water');
                    
                } else {
                    $('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
                }
                ctr -= 1;
            }
            
      // Create table cell with CSS class `water`. Note that we use
      // HTML data attributes  to store the coordinates of each cell
      // (see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). 
      // That makes it much easier to find cells based on coordinates later.
        //$('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
        }

    // Add table row to battleground table
        tr.appendTo(battleground);
  }

  $('#generate').click(() => {
    // Here you have to add your code for building a random battleground.

    // Tip: The next line of code demonstrates how you can select a table cell
    // using coordinates, remove CSS classes and add CSS classes. 
    $('td[data-r="1"][data-c="1"]').removeClass('water').addClass('ship');
    $('td[data-r="2"][data-c="1"]').removeClass('water').addClass('ship');
    $('td[data-r="3"][data-c="1"]').removeClass('water').addClass('ship');
  });
});