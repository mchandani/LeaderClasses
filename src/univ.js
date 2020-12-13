import React from 'react'
import logo from'./logo/download.png'
import mit from'./logo/mit.png'
import yale from'./logo/yale.png'
import oxford from'./logo/oxford.png'
import uc from'./logo/uc.png'
import stanford from'./logo/stanford.png'
import up from'./logo/up.png'
import insead from'./logo/insead.png'
import imd from'./logo/imd.png'
import lbs from'./logo/lbs.png'
import cambridge from'./logo/cambridge.png'
import northwestern from'./logo/noorthwestern.png'
import './Home.css'
import {Grid,CardContent} from '@material-ui/core'
class Univ extends React.Component {
    render() {
        return (
            
            <Grid container spacing={1} justify="center">
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={logo}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={mit} alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={yale}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={oxford}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={uc}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={stanford}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={up}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={insead}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={imd}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={lbs}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={cambridge}  alt="Logo" />
                    </CardContent>
                </Grid>
                <Grid item xs={6} md={3} >
                    <CardContent>
                        <img className="imgxl2" src={northwestern}  alt="Logo" />
                    </CardContent>
                </Grid>
                
            </Grid>
            
            
        );
    }
}
export default Univ;