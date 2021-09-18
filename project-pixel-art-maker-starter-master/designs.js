// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);

})

//makes grid based on user seledtion
function makeGrid(x, y) {
    $('tr').remove();

    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for(var j = 1; j <= y; j++){
            $('#table' + i).append('<td id=table' + i + '></td>');
        }
    }
//allows change of color
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
