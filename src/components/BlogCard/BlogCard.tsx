import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './BlogCard.css';
import {IconButton} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";


export interface BlogCardProps {
    uri: string;
    img?: any;
    alt?: string;
    title?: string;
    date?: any;
    body?: string;
    author?: string;
}

export interface BlogCardState {

}

export class BlogCard extends React.PureComponent<BlogCardProps, BlogCardState> {


    render() {
        const {uri} = this.props;
        return (
            <Box width="100%">
                <Link to={`/blog/${uri}`}>
                    {/* <CardActionArea> */}
                    <Card className='blog-root'>
                        {
                            this.props.img &&
							<CardMedia
								className='cover'
								image={this.props.img}
								title={this.props.alt}
							/>
                        }
                        <div className='details'>
                            {
                                this.props.title &&
								<CardHeader
									id='header'
									title={this.props.title}
									subheader={this.props.date}
								/>
                            }
                            {
                                this.props.body &&
								<CardContent id='content'>
									<Typography variant="body2" color="textSecondary" component="p">
                                        {this.props.body}
									</Typography>
								</CardContent>
                            }
                            <CardActions disableSpacing id='action'>
                                {
                                    this.props.author &&
									<Typography variant="caption" color="textSecondary" component="p">
                                        {this.props.author}
									</Typography>
                                }
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
                    {/* </CardActionArea> */}
                </Link>
            </Box>
        );
    }
}
