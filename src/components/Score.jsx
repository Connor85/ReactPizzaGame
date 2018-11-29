import React from 'react';

function Score() {
  return (
    <div>
      <style jsx>{`
          .score {
            text-align: center;
            border: 1px black solid;
            margin: 5px;
            height: 75px;
            font-size: 45pt;
            background: lightyellow;
          }
        `}</style>
      <h3 className='score'>Score: ####</h3>
    </div>
  );
}

export default Score;