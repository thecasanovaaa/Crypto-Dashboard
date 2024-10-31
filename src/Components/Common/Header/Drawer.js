import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState();
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className='link' />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='drawer-div'>
          <Link to="/">
            <p className='link'>Home</p>
          </Link>
          <Link to="/dashboard">
            <p className='link'>Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
