import React from 'react';

function Header() {
  return (
    <div>
      <style jsx>{`
          .mainHeader {
            padding:10px;
            text-align: center;
            background-color: white;
            border: 1px black solid;
            border-radius: 0px;
          }
        `}</style>
      <h1 className='jumbotron mainHeader'>Pizza Time!</h1>
    </div>
  );
}

export default Header;