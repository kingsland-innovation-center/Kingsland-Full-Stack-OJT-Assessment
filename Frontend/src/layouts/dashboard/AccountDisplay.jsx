import React, {useState, useEffect} from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { styled} from '@mui/material/styles';
import {getCurrentUserId} from '../../utils/AuthorizationUtils';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
}));

const AccountDisplay = () => {
  const loggedInId = getCurrentUserId();
  const [userDetails, setUserDetails] = useState({});

  const getUserDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3100/user/${loggedInId}`
      );
      const jsonData = await response.json();
      setUserDetails(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <Box sx={{  mx: 2.5 }}>
        <AccountStyle>
        <Avatar>
          <AccountCircleIcon style={{height: '100%', width: '100%'}}/>
        </Avatar>
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '15px'}}>
            {userDetails.firstname} {userDetails.lastname}
          </Typography>
        </Box>
        </AccountStyle>
      </Box>
    </div>
  );
}

export default AccountDisplay;
