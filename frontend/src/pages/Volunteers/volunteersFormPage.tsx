import React from 'react';
import Box from '@mui/material/Box'; 
import VolunteerForm from './volunteersForm'; 
import Navbar from '../homePage/Navbar';
import Footer from '../homePage/footer'; 
import LowerFooter from '../homePage/lowerfooter';
import AuthWrapper from '../../services/AuthWrapper';// Importing AuthWrapper for authentication
import { ROLES, User } from '../../models/user';

const VolunteerFormPage: React.FC = () => {
    return (
        // Defining the role as a volunteer
        <AuthWrapper allowedRoles={[ROLES.VOLUNTEER.toString()]}>
          {(user: User) => (
            <Box display="flex" flexDirection="column" minHeight="100vh">
              <Navbar user={user}/>
              <Box flexGrow={1}>
                <VolunteerForm volunteerId={user._id} />
              </Box>
              <Footer />
              <LowerFooter />
            </Box>
          )}
        </AuthWrapper>
      );
    };

export default VolunteerFormPage;