$(() => {
  // Select table containing the battleground
    const battleground = $('#battleground');
    var ctr = 0; 
    var randomleng = 0; //defining ship by length instead of defining a ship.
    var shipcrossing = false;
    var big = false;
  // Build 10 x 10 grid for battleground
    for (let row = 0; row < 10; row++) {
        // Create table row
        const tr = $('<tr>');
        for (let column = 0; column < 10; column++) {
            $('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
      // Create table cell with CSS class `water`. Note that we use
      // HTML data attributes  to store the coordinates of each cell
      // (see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). 
      // That makes it much easier to find cells based on coordinates later.
        //$('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
        }

    // Add table row to battleground table
        tr.appendTo(battleground);
    }

    for (var i = 0; i < 10; i++) {
        shipcrossing = false;
        for (var j = 0; j < 10; j++) {
            if (ctr === 0) {
                randomleng = Math.floor((Math.random() * 6));
                ctr = randomleng;
            } else {
                if (column + ctr < 10) {

                    for (var key = j; key < 10 && key < j + ctr; key++) {
                        if ($('<tr>').hasClass('ship').attr('data-r', i+1).attr('data-c', j-1)) {
                            shipcrossing = true;
                            i = 10;
                        }
                    }

                    if (shipcrossing === false) {
                        $('td[data-r="'+i+'"][data-c="'+j+'"]').removeClass('water').addClass('ship');
                    }
                }
                ctr -= 1;
            }
        }
    }
    tr.appendTo(battleground);

  $('#generate').click(() => {
    // Here you have to add your code for building a random battleground.

    // Tip: The next line of code demonstrates how you can select a table cell
    // using coordinates, remove CSS classes and add CSS classes. 
    $('td[data-r="1"][data-c="1"]').removeClass('water').addClass('ship');
    $('td[data-r="2"][data-c="1"]').removeClass('water').addClass('ship');
    $('td[data-r="3"][data-c="1"]').removeClass('water').addClass('ship');
  });
});