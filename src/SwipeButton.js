import React from 'react';
import ReplayIcon from "@mui/icons-material/Replay"
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from "@mui/icons-material/FlashOn";
import './swipeButton.css'
import { IconButton } from '@mui/material';

const SwipeButton = () => {
    return <div className="sawipeButton">
        <IconButton className="replayicon">
            <ReplayIcon fontSize='large' />

        </IconButton>
        <IconButton className="closeicon">

            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className="starticon">

            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton className="favoriteicon">

            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className="flashicon">

            <FlashOnIcon fontSize='large' />
        </IconButton>

    </div>;
};

export default SwipeButton;