import React from 'react'
import "./Post.css"
import { Avatar } from "@mui/material"
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import InputOption from './InputOption';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl}) {
    return (
        <div className='post'>
            <div className="post-header">
                <Avatar />
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>    
            <div className="post-buttons">
                <InputOption Icon = {ThumbUpOffAltOutlinedIcon} title ='Like' color = 'gray' />
                <InputOption Icon = {ModeCommentOutlinedIcon} title ='Comment' color = 'gray' />
                <InputOption Icon = {ShareIcon} title ='Share' color = 'gray' />
                <InputOption Icon = {SendIcon} title ='Send' color = 'gray' />
            </div>
        </div>
    )
}
export default Post;