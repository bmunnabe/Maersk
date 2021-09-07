const arrayInput = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const htmlContent = ( value ) => `
    <div class='main box-${ value }'>
        <div class="mobile-icon"></div>
        <div class="title"> ${ value }</div>
    </div>`;


const renderBoxes = ( array ) => {
    const boxes = array.reduce( ( acc, value ) => `${ acc } ${ htmlContent( value ) }`, '' );
    document.getElementById( 'box-container' ).innerHTML = boxes;
};

const shuffleAndRender = ( array ) => {
    const arr = [ ...array ];
    for ( let i = arr.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ arr[ i ], arr[ j ] ] = [ arr[ j ], arr[ i ] ];
    }
    renderBoxes( arr );
};

renderBoxes( arrayInput );