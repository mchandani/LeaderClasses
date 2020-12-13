import React from 'react'
import './Cards.css'
import {Grid,Card,CardContent,Typography} from '@material-ui/core'
class Cards extends React.Component {
    render() {
        return (
            <Grid container spacing={1} justify="center">
                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Typography variant="h5"> 
                            Category-1- Budding leaders commerce and other students
                        </Typography>
                        
                        <Typography color="textSecondary" >Ambitious chartered accountants,commerce,business,arts and other students aspiring to progress to director/GM/VP higher level roles within 10-12 years of completing their education. </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Typography variant="h5"> 
                        Category-II- Budding leaders Engineering students
                        </Typography>
                        
                        <Typography color="textSecondary" >Ambitious engineering students aspiring to progress to director/GM/VP higher level roles within 10-12 years of completing their education. </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Typography variant="h5"> 
                        Category-III- Budding leaders MS/PHD/ME/M.TECH students
                        </Typography>
                        
                        <Typography color="textSecondary" >Ambitious MS,PhD,ME and M.Tech students aspiring to progress to director/GM/VP higher level roles within 10-12 years of completing their education. </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Typography variant="h5"> 
                        Category-IV- Budding leaders MBA students
                        </Typography>
                        
                        <Typography color="textSecondary" >Ambitious MBA students aspiring to progress to director/GM/VP higher level roles within 10-12 years of completing their education. </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Typography variant="h5"> 
                        Category-V- Budding leaders working professionals
                        </Typography>
                        
                        <Typography color="textSecondary" >Ambitious chartered accountants,commerce,business,arts and other students aspiring to progress to director/GM/VP higher level roles within 10-12 years of completing their education. </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md="3" xs="12" className="cardxl">
                    <CardContent>
                        <Typography variant="h5"> 
                        Category-VI- Future Leaders
                        </Typography>
                        
                        <Typography color="textSecondary" >Ambitious chartered accountants,commerce,business,arts and other students aspiring to progress to director/GM/VP higher level roles within 10-12 years of completing their education. </Typography>
                    </CardContent>
                </Grid>

            </Grid>


        );
    }
}
export default Cards;