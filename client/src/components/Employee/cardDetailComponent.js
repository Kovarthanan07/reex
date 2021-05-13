import React, { useContext, useEffect } from 'react';

export default function DisplayCardDetail(props) {
  const { cardDetails } = props;
  let amount = 0;
  if (cardDetails) {
    amount = cardDetails.balanceAmount;
  }

  return (
    <div>
      <h1> Card Balance</h1>
      <hr />
      <h3>{amount}</h3>
    </div>
  );
}
