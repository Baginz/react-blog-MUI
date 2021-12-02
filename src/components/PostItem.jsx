import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => {
    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                    minWidth: 275,
                    display:'flex', 
                    justifyContent: "space-between", 
                    flexDirection:'column'
                }}
            >
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        Id {post.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/posts/${post.id}`}>
                        <Button >
                            Открыть
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default PostItem;
