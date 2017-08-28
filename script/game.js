var isOver;
var player;
var computer;
var points;

function start() {
    reset();
    player = 'X';
    computer = 'O';
    points = [];
    points.push( 0 );
    points.push( 0 );
    console.log( "Start! =)" )
}

function canSetPrint( innerHTML ) {
    var ret;

    if ( innerHTML.trim() == "&nbsp;" ) {
        ret = true;
    }

    return ret;
}

function canSetPrintObj( btn ) {
    var ret;

    ret = canSetPrint( btn.innerHTML );

    return ret;
}

function reset() {
    isOver = false;

    var buttons = document.getElementsByClassName( "btn" );

    for ( var i = 0 ; i < buttons.length ; i++ ){
        buttons[ i ].disabled = false;
        buttons[ i ].innerHTML = '&nbsp;';
    }
}

function onClick( btn ) {
    if ( canSetPrintObj( btn )  && !isOver ) {
        btn.disabled = true;
        btn.innerHTML = player;
        verifyWinner();
        computerPlay();
    }
}

function computerPlay() {
    if ( !isOver && canPlay() ) {

        var pc;

        pc = lookWherePlay( computer );

        if ( !pc ) {
            pc = lookWherePlay( player );
        }

        if ( !pc ) {
            var id;
            var stop = true;

            while ( stop ) {
                id = '0' + Math.floor((Math.random() * 9) + 1);

                if ( canSetPrintObj( document.getElementById( id ) ) ) {
                    pc = document.getElementById( id )
                    stop = false;
                }
            }

        }

        if ( pc ) {
            pc.disabled = true;
            pc.innerHTML = computer;
            verifyWinner();
        }
    }
}

function canPlay() {
    var ret = false;
    var buttons = document.getElementsByClassName( "btn" );

    for ( var i = 0 ; i < buttons.length ; i++ ){
        if ( canSetPrintObj( buttons[ i ] ) ) {
            ret = true;
            break;
        }
    }

    return ret;
}

function lookWherePlay( typePlay ) {
    var pc;
    var b01 = document.getElementById( '01' ).innerHTML;
    var b02 = document.getElementById( '02' ).innerHTML;
    var b03 = document.getElementById( '03' ).innerHTML;
    var b04 = document.getElementById( '04' ).innerHTML;
    var b05 = document.getElementById( '05' ).innerHTML;
    var b06 = document.getElementById( '06' ).innerHTML;
    var b07 = document.getElementById( '07' ).innerHTML;
    var b08 = document.getElementById( '08' ).innerHTML;
    var b09 = document.getElementById( '09' ).innerHTML;

    if      ( b01 == b02 && b01 == typePlay && canSetPrint( b03 ) ) {
        pc = document.getElementById( '03' ); //Horizontal 01
    }
    else if ( b02 == b03 && b02 == typePlay && canSetPrint( b01 ) ) {
        pc = document.getElementById( '01' ); //Horizontal 01
    }
    else if ( b03 == b01 && b01 == typePlay && canSetPrint( b02 ) ) {
        pc = document.getElementById( '02' ); //Horizontal 01
    }
    else if ( b04 == b05 && b04 == typePlay && canSetPrint( b06 ) ) {
        pc = document.getElementById( '06' ); //Horizontal 02
    }
    else if ( b05 == b06 && b05 == typePlay && canSetPrint( b04 ) ) {
        pc = document.getElementById( '04' ); //Horizontal 02
    }
    else if ( b06 == b04 && b06 == typePlay && canSetPrint( b05 ) ) {
        pc = document.getElementById( '05' ); //Horizontal 02
    }
    else if ( b07 == b08 && b07 == typePlay && canSetPrint( b09 ) ) {
        pc = document.getElementById( '09' ); //Horizontal 03
    }
    else if ( b08 == b09 && b08 == typePlay && canSetPrint( b07 ) ) {
        pc = document.getElementById( '07' ); //Horizontal 03
    }
    else if ( b09 == b07 && b09 == typePlay && canSetPrint( b08 ) ) {
        pc = document.getElementById( '08' ); //Horizontal 03
    }
    else if ( b01 == b04 && b01 == typePlay && canSetPrint( b07 ) ) {
        pc = document.getElementById( '07' ); //Vertical 01
    }
    else if ( b04 == b07 && b04 == typePlay && canSetPrint( b01 ) ) {
        pc = document.getElementById( '01' ); //Vertical 01
    }
    else if ( b07 == b01 && b07 == typePlay && canSetPrint( b04 ) ) {
        pc = document.getElementById( '04' ); //Vertical 01
    }
    else if ( b02 == b05 && b02 == typePlay && canSetPrint( b08 ) ) {
        pc = document.getElementById( '08' ); //Vertical 02
    }
    else if ( b05 == b08 && b05 == typePlay && canSetPrint( b02 ) ) {
        pc = document.getElementById( '02' ); //Vertical 02
    }
    else if ( b08 == b02 && b08 == typePlay && canSetPrint( b05 ) ) {
        pc = document.getElementById( '05' ); //Vertical 02
    }
    else if ( b03 == b06 && b03 == typePlay && canSetPrint( b09 ) ) {
        pc = document.getElementById( '09' ); //Vertical 03
    }
    else if ( b06 == b09 && b06 == typePlay && canSetPrint( b03 ) ) {
        pc = document.getElementById( '03' ); //Vertical 03
    }
    else if ( b09 == b03 && b09 == typePlay && canSetPrint( b06 ) ) {
        pc = document.getElementById( '06' ); //Vertical 03
    }
    else if ( b01 == b05 && b01 == typePlay && canSetPrint( b09 ) ) {
        pc = document.getElementById( '09' ); //Diagonal 01
    }
    else if ( b05 == b09 && b05 == typePlay && canSetPrint( b01 ) ) {
        pc = document.getElementById( '01' ); //Diagonal 01
    }
    else if ( b09 == b01 && b09 == typePlay && canSetPrint( b05 ) ) {
        pc = document.getElementById( '05' ); //Diagonal 01
    }
    else if ( b03 == b05 && b03 == typePlay && canSetPrint( b07 ) ) {
        pc = document.getElementById( '07' ); //Diagonal 02
    }
    else if ( b05 == b07 && b05 == typePlay && canSetPrint( b03 ) ) {
        pc = document.getElementById( '03' ); //Diagonal 02
    }
    else if ( b07 == b03 && b07 == typePlay && canSetPrint( b05 ) ) {
        pc = document.getElementById( '05' ); //Diagonal 02
    }

    return pc;
}

function verifyWinner() {
    //isOver = true;
    var b01 = document.getElementById( '01' ).innerHTML;
    var b02 = document.getElementById( '02' ).innerHTML;
    var b03 = document.getElementById( '03' ).innerHTML;
    var b04 = document.getElementById( '04' ).innerHTML;
    var b05 = document.getElementById( '05' ).innerHTML;
    var b06 = document.getElementById( '06' ).innerHTML;
    var b07 = document.getElementById( '07' ).innerHTML;
    var b08 = document.getElementById( '08' ).innerHTML;
    var b09 = document.getElementById( '09' ).innerHTML;
    var winner = '';


    if( !canSetPrint( b01 ) && b01 == b02 && b02 == b03 ) {
        isOver = true;
        winner = b01;
    }

    else if( !canSetPrint( b04 ) && b04 == b05 && b05 == b06 ) {
        isOver = true;
        winner = b04;
    }

    else if( !canSetPrint( b07 ) && b07 == b08 && b08 == b09 ) {
        isOver = true;
        winner = b07;
    }

    else if( !canSetPrint( b01 ) && b01 == b04 && b04 == b07 ) {
        isOver = true;
        winner = b01;
    }

    else if( !canSetPrint( b02 ) && b02 == b05 && b05 == b08 ) {
        isOver = true;
        winner = b02;
    }

    else if( !canSetPrint( b03 ) && b03 == b06 && b06 == b09 ) {
        isOver = true;
        winner = b03;
    }

    else if( !canSetPrint( b01 ) && b01 == b05 && b05 == b09 ) {
        isOver = true;
        winner = b01;
    }

    else if( !canSetPrint( b03 ) && b03 == b05 && b05 == b07 ) {
        isOver = true;
        winner = b03;
    }

    updateScore( winner );
}

function updateScore ( winner ) {
    if ( isOver ) {
        if ( winner == player ) {
            points[ 0 ]++;
            document.getElementById( 'playerScore' ).innerHTML = points[ 0 ];
        }
        else {
            points[ 1 ]++;
            document.getElementById( 'computerScore' ).innerHTML = points[ 1 ];
        }
    }
}

function change() {
    var playerIcon;

    playerIcon = player;
    player = computer;
    computer = playerIcon;

    reset();
}
