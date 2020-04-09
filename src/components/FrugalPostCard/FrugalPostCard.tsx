import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './FrugalPostCard.css';
import paella from '../../static/images/paella.jpeg';
import {IconButton} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


export default function MediaControlCard() {
    return (
        <Card className='root'>
            <CardMedia
                className='cover'
                image={paella}
                title="Live from space album cover"
            />
            <div className='details'>
                <CardHeader
                    id='header'
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent id='content'>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing id='action'>
                    <Typography variant="caption" color="textSecondary" component="p">
                        Aniket Singh
                    </Typography>
                    <div className='actionBtn'>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </div>
                </CardActions>
            </div>
        </Card>
    );

}
