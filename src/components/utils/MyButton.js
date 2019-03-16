import React from 'react';
import { Button } from '@material-ui/core';
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = props => {
  const link = props.link ? props.link : '#';
  const bg = props.bg ? props.bg : '#000';
  const color = props.color ? props.color : '#fff';
  const text = props.text ? props.text : 'My Text Here';

  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{ background: bg, color: color }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon button" />
      {text}
    </Button>
  );
};

export default MyButton;
