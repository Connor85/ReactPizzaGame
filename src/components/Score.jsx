import React from 'react';

function Score(props) {
  return (
    <div>
      <style jsx>{`
          .score {
            text-align: center;
            border: 1px black solid;
            height: 75px;
            font-size: 45pt;
            background: lightyellow;
          }
        `}</style>
      <h3 className='score'>Score: {props.totalScore}</h3>
    </div>
  );
}

export default Score;