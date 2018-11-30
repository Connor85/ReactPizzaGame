import React from 'react';

function StatusPane(props) {
  return (
    <div>
      <style jsx>{` 
        .topHeader {
        text-align: center;
        text-decoration: underline;
        border: 1px black solid;
        background: lightyellow;
        height: 45px;
        }
        .statusPane {
          height: 100px;
        }
        .statusGlobal {
          border: 1px black solid;
          padding:10px;
          text-align: center;
          background-color: white;
          margin-bottom: 15px;
        }
      `}</style>
      <div className='statusGlobal'>
        <h2 className="topHeader">Status</h2>
        <div className='statusPane'>
        <h3>{props.statusString}</h3>
        </div>
      </div>
    </div>
  );
}

export default StatusPane;