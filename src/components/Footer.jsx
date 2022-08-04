import { Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <footer>
            <Grid container sx={{
                backgroundColor: '#4A4C55',
                color: '#ffffff',
                padding: '5rem',
                marginBottom: '-30'
            }}>
                <Grid item xs={3}>
                    <Typography variant="h6">About Us</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Terms & Conditions</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Privacy Policy</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">Social Links</Typography>
                    <br />
                    <EmailIcon sx={{padding: '10px'}} />
                    <CallIcon sx={{padding: '10px'}} />
                    <TwitterIcon sx={{padding: '10px'}} />
                </Grid>
            </Grid>
            <div style={{backgroundColor: '#000000', color: 'white', padding: '10px'}}>
                @Copyright
            </div>
        </footer>
    )
}